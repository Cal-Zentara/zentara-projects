// Run once to re-authenticate without creating a new sheet
// Usage: node auth.js
import { google } from 'googleapis';
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { createServer } from 'http';
import { URL } from 'url';
import open from 'open';

const CREDS = JSON.parse(readFileSync('./credentials.json', 'utf8')).installed;
const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];
const TOKEN_PATH = './token.json';

const oauth2Client = new google.auth.OAuth2(CREDS.client_id, CREDS.client_secret, 'http://localhost:3000');

if (existsSync(TOKEN_PATH)) {
  console.log('token.json already exists. Delete it first if you want to re-auth.');
  process.exit(0);
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
console.log('token.json saved. You can now run log.js.');
