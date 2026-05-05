// Run once: authenticates + creates "Salvia Lion — Generations" Google Sheet
// Saves sheet ID to config.json for future log.js calls
import { google } from 'googleapis';
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { createServer } from 'http';
import { URL } from 'url';
import open from 'open';

const CREDS = JSON.parse(readFileSync('./credentials.json', 'utf8')).installed;
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];
const TOKEN_PATH = './token.json';
const CONFIG_PATH = './config.json';

async function getToken(oauth2Client) {
  if (existsSync(TOKEN_PATH)) {
    const token = JSON.parse(readFileSync(TOKEN_PATH, 'utf8'));
    oauth2Client.setCredentials(token);
    return;
  }

  const authUrl = oauth2Client.generateAuthUrl({ access_type: 'offline', scope: SCOPES });
  console.log('\nOpening browser for Google auth...');
  await open(authUrl);

  const code = await new Promise((resolve) => {
    const server = createServer((req, res) => {
      const url = new URL(req.url, 'http://localhost');
      const code = url.searchParams.get('code');
      res.end('<h2>Auth complete — you can close this tab.</h2>');
      server.close();
      resolve(code);
    }).listen(3000);
    console.log('Waiting for Google redirect on localhost:3000...');
  });

  const { tokens } = await oauth2Client.getToken(code);
  oauth2Client.setCredentials(tokens);
  writeFileSync(TOKEN_PATH, JSON.stringify(tokens));
  console.log('Token saved.');
}

async function createSheet(auth) {
  const sheets = google.sheets({ version: 'v4', auth });

  const response = await sheets.spreadsheets.create({
    requestBody: {
      properties: { title: 'Salvia Lion — Generations' },
      sheets: [{
        properties: { title: 'Generations' },
        data: [{
          startRow: 0,
          startColumn: 0,
          rowData: [{
            values: [
              { userEnteredValue: { stringValue: 'Date' } },
              { userEnteredValue: { stringValue: 'Client' } },
              { userEnteredValue: { stringValue: 'Model' } },
              { userEnteredValue: { stringValue: 'Prompt' } },
              { userEnteredValue: { stringValue: 'Output URL' } },
              { userEnteredValue: { stringValue: 'Rating' } },
              { userEnteredValue: { stringValue: 'Notes' } },
            ]
          }]
        }]
      }]
    }
  });

  const sheetId = response.data.spreadsheetId;
  const url = `https://docs.google.com/spreadsheets/d/${sheetId}`;
  writeFileSync(CONFIG_PATH, JSON.stringify({ sheetId }, null, 2));

  console.log(`\nSheet created: ${url}`);
  console.log(`Sheet ID saved to config.json`);
  console.log('\nSetup complete. Use log.js to add rows after each generation.');
}

const oauth2Client = new google.auth.OAuth2(CREDS.client_id, CREDS.client_secret, 'http://localhost:3000');
await getToken(oauth2Client);
await createSheet(oauth2Client);
