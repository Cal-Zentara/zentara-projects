// Append one generation row to the tracker sheet
// Usage: node log.js "<prompt>" "<model>" "<output-url>" "<client>" "<rating>" "<notes>"
// Rating: 1-5. Notes optional.
import { google } from 'googleapis';
import { readFileSync } from 'fs';

const CREDS = JSON.parse(readFileSync('./credentials.json', 'utf8')).installed;
const { sheetId } = JSON.parse(readFileSync('./config.json', 'utf8'));
const token = JSON.parse(readFileSync('./token.json', 'utf8'));

const [, , prompt, model, outputUrl, client, rating, notes] = process.argv;

if (!prompt || !model || !outputUrl || !client) {
  console.error('Usage: node log.js "<prompt>" "<model>" "<url>" "<client>" [rating] [notes]');
  process.exit(1);
}

const oauth2Client = new google.auth.OAuth2(CREDS.client_id, CREDS.client_secret, 'http://localhost:3000');
oauth2Client.setCredentials(token);

const sheets = google.sheets({ version: 'v4', auth: oauth2Client });
const date = new Date().toLocaleDateString('en-US', { timeZone: 'America/Los_Angeles' });

// Extract just the filename from the URL for display (e.g. hf_20260505_170408_da61f69a.png)
const filename = outputUrl.split('/').pop().replace(/^(hf_\d{8}_\d{6}_)([a-f0-9-]{8})[a-f0-9-]+(\.\w+)$/, '$1$2$3');

await sheets.spreadsheets.values.append({
  spreadsheetId: sheetId,
  range: 'Generations!A:G',
  valueInputOption: 'USER_ENTERED',
  requestBody: {
    values: [[date, client, model, prompt, `=HYPERLINK("${outputUrl}","${filename}")`, rating || '', notes || '']]
  }
});

console.log(`Logged: [${client}] ${model} — ${date}`);
