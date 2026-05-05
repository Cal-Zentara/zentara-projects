// Fixes existing sheet: shortens URLs to HYPERLINK formulas + applies formatting
// Run once: node format.js
import { google } from 'googleapis';
import { readFileSync } from 'fs';

const CREDS = JSON.parse(readFileSync('./credentials.json', 'utf8')).installed;
const { sheetId } = JSON.parse(readFileSync('./config.json', 'utf8'));
const token = JSON.parse(readFileSync('./token.json', 'utf8'));

const oauth2Client = new google.auth.OAuth2(CREDS.client_id, CREDS.client_secret, 'http://localhost:3000');
oauth2Client.setCredentials(token);
const sheets = google.sheets({ version: 'v4', auth: oauth2Client });

// Get the spreadsheet to find the Generations sheet ID (needed for batchUpdate)
const meta = await sheets.spreadsheets.get({ spreadsheetId: sheetId });
const tabId = meta.data.sheets.find(s => s.properties.title === 'Generations').properties.sheetId;

// Read existing data
const read = await sheets.spreadsheets.values.get({
  spreadsheetId: sheetId,
  range: 'Generations!A:G',
});
const rows = read.data.values || [];

// Rebuild column E: replace raw URLs with =HYPERLINK("url","short name")
function shortenUrl(url) {
  if (!url || !url.startsWith('http')) return url;
  const filename = url.split('/').pop();
  // Show just hf_YYYYMMDD_HHMMSS_XXXX.png (trim UUID tail)
  const short = filename.replace(/^(hf_\d{8}_\d{6}_)([a-f0-9]{8})[a-f0-9-]+(\.\w+)$/, '$1$2$3');
  return `=HYPERLINK("${url}","${short}")`;
}

// Write updated column E values (skip header row 0)
const updatedE = rows.map((row, i) => {
  if (i === 0) return [row[4] || 'Output URL']; // keep header
  return [shortenUrl(row[4] || '')];
});

await sheets.spreadsheets.values.update({
  spreadsheetId: sheetId,
  range: 'Generations!E1',
  valueInputOption: 'USER_ENTERED',
  requestBody: { values: updatedE },
});
console.log('URLs shortened.');

// Apply formatting: column widths, freeze header row, bold header, bg color
await sheets.spreadsheets.batchUpdate({
  spreadsheetId: sheetId,
  requestBody: {
    requests: [
      // Freeze row 1
      {
        updateSheetProperties: {
          properties: { sheetId: tabId, gridProperties: { frozenRowCount: 1 } },
          fields: 'gridProperties.frozenRowCount',
        },
      },
      // Bold + background on header row
      {
        repeatCell: {
          range: { sheetId: tabId, startRowIndex: 0, endRowIndex: 1 },
          cell: {
            userEnteredFormat: {
              textFormat: { bold: true, foregroundColor: { red: 1, green: 1, blue: 1 } },
              backgroundColor: { red: 0.22, green: 0.22, blue: 0.22 },
            },
          },
          fields: 'userEnteredFormat(textFormat,backgroundColor)',
        },
      },
      // Column widths: Date(90) Client(90) Model(130) Prompt(280) URL(160) Rating(60) Notes(340)
      ...[90, 90, 130, 280, 160, 60, 340].map((pixels, i) => ({
        updateDimensionProperties: {
          range: { sheetId: tabId, dimension: 'COLUMNS', startIndex: i, endIndex: i + 1 },
          properties: { pixelSize: pixels },
          fields: 'pixelSize',
        },
      })),
    ],
  },
});

console.log('Formatting applied. Sheet is ready.');
