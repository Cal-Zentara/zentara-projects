import { google } from 'googleapis';
import { readFileSync } from 'fs';
const CREDS = JSON.parse(readFileSync('./credentials.json', 'utf8')).installed;
const { sheetId } = JSON.parse(readFileSync('./config.json', 'utf8'));
const token = JSON.parse(readFileSync('./token.json', 'utf8'));
const oauth2Client = new google.auth.OAuth2(CREDS.client_id, CREDS.client_secret, 'http://localhost:3000');
oauth2Client.setCredentials(token);
const sheets = google.sheets({ version: 'v4', auth: oauth2Client });

// Rows are 1-indexed in Sheets. Data rows 7-11 (0-indexed) = sheet rows 9-13.
// Approved: rows 7,8,10,11 (0-indexed). Rejected: row 9.
const updates = [
  { range: 'Generations!F9:G9', values: [['5', '✅ APPROVED — Chamomile Lavender hero']] },
  { range: 'Generations!F10:G10', values: [['5', '✅ APPROVED — Lavender Rose hero']] },
  { range: 'Generations!F11:G11', values: [['1', '❌ REJECTED — black chalkboard label (redone in row 13)']] },
  { range: 'Generations!F12:G12', values: [['5', '✅ APPROVED — Jasmine Euca hero']] },
  { range: 'Generations!F13:G13', values: [['5', '✅ APPROVED — Cherry Blossom redo (clean kraft label)']] },
];

await sheets.spreadsheets.values.batchUpdate({
  spreadsheetId: sheetId,
  requestBody: {
    valueInputOption: 'RAW',
    data: updates,
  },
});

console.log('Done — 4 approved, 1 rejected marked.');
