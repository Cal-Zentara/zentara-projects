$lines = Get-Content '.env'
$tokenLine = ($lines | Where-Object { $_ -match '^UNIK_PAGE_TOKEN=' } | Select-Object -Last 1)
$token = $tokenLine -replace 'UNIK_PAGE_TOKEN=', ''
$token = $token.Trim()
$pageId = '126393510763439'

$page = Invoke-RestMethod -Uri "https://graph.facebook.com/v21.0/$pageId`?fields=instagram_business_account&access_token=$token" -Method Get
$igId = $page.instagram_business_account.id

$media = Invoke-RestMethod -Uri "https://graph.facebook.com/v21.0/$igId/media?fields=caption,media_type,media_product_type,timestamp,like_count,comments_count&limit=8&access_token=$token" -Method Get

Write-Output "=== PER-POST DEEP STATS (v2) ==="
Write-Output ""

foreach ($post in $media.data) {
    $cap = if ($post.caption) { $post.caption.Substring(0, [Math]::Min(50, $post.caption.Length)) } else { "(no caption)" }
    Write-Output ($post.timestamp.Substring(0,10) + " | " + $post.media_product_type)
    Write-Output ("  " + $cap)

    # v21+ metric names: views replaced plays/impressions
    $metrics = "reach,views,saved,shares,total_interactions"

    try {
        $ins = Invoke-RestMethod -Uri ("https://graph.facebook.com/v21.0/" + $post.id + "/insights?metric=$metrics&access_token=$token") -Method Get
        foreach ($m in $ins.data) {
            Write-Output ("    " + $m.name + ": " + $m.values[0].value)
        }
    } catch {
        # capture real error body
        $stream = $_.Exception.Response.GetResponseStream()
        $reader = New-Object System.IO.StreamReader($stream)
        $body = $reader.ReadToEnd()
        Write-Output ("    ERROR: " + $body)
    }
    Write-Output ""
}
