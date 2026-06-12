$lines = Get-Content '.env'
$tokenLine = ($lines | Where-Object { $_ -match '^UNIK_PAGE_TOKEN=' } | Select-Object -Last 1)
$token = $tokenLine -replace 'UNIK_PAGE_TOKEN=', ''
$token = $token.Trim()

$appId = '1595632491666845'
$appSecret = ''  # not needed for debug endpoint with the token itself

$url = "https://graph.facebook.com/debug_token?input_token=$token&access_token=$token"
$response = Invoke-RestMethod -Uri $url -Method Get

$data = $response.data
Write-Output ("Type:        " + $data.type)
Write-Output ("App:         " + $data.application)
Write-Output ("Valid:       " + $data.is_valid)

if ($data.expires_at -and $data.expires_at -ne 0) {
    $expiry = [DateTimeOffset]::FromUnixTimeSeconds($data.expires_at).LocalDateTime
    Write-Output ("Expires:     " + $expiry.ToString("MMM dd, yyyy"))
} else {
    Write-Output ("Expires:     Never (permanent token)")
}

Write-Output ("Scopes:      " + ($data.scopes -join ", "))
