$lines = Get-Content '.env'
$token = (($lines | Where-Object { $_ -match '^UNIK_PAGE_TOKEN=' } | Select-Object -Last 1) -replace 'UNIK_PAGE_TOKEN=', '').Trim()
$pageId = '126393510763439'
$page = Invoke-RestMethod -Uri "https://graph.facebook.com/v21.0/$pageId`?fields=instagram_business_account&access_token=$token"
$igId = $page.instagram_business_account.id

# Try follower_count daily time series
$growth = Invoke-RestMethod -Uri "https://graph.facebook.com/v21.0/$igId/insights?metric=follower_count&period=day&access_token=$token"
Write-Output "=== FOLLOWER COUNT CHANGES ==="
foreach ($day in $growth.data[0].values) {
    $sign = if ($day.value -gt 0) { "+" } else { "" }
    if ($day.value -ne 0) {
        Write-Output ($day.end_time.Substring(0,10) + ": " + $sign + $day.value)
    }
}
