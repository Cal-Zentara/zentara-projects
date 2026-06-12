$lines = Get-Content '.env'
$tokenLine = ($lines | Where-Object { $_ -match '^UNIK_PAGE_TOKEN=' } | Select-Object -Last 1)
$token = $tokenLine -replace 'UNIK_PAGE_TOKEN=', ''
$token = $token.Trim()
$pageId = '126393510763439'

# Get IG account linked to this FB page
$page = Invoke-RestMethod -Uri "https://graph.facebook.com/v21.0/$pageId`?fields=instagram_business_account&access_token=$token" -Method Get

if (-not $page.instagram_business_account) {
    Write-Output "No Instagram Business account linked to this Facebook page."
    exit
}

$igId = $page.instagram_business_account.id
Write-Output "=== UNIK INSTAGRAM STATS ==="
Write-Output ""

# IG account basics
$ig = Invoke-RestMethod -Uri "https://graph.facebook.com/v21.0/$igId`?fields=username,name,followers_count,follows_count,media_count,biography&access_token=$token" -Method Get
Write-Output "ACCOUNT"
Write-Output ("  Handle:     @" + $ig.username)
Write-Output ("  Followers:  " + $ig.followers_count)
Write-Output ("  Following:  " + $ig.follows_count)
Write-Output ("  Posts:      " + $ig.media_count)
Write-Output ""

# Recent posts
$media = Invoke-RestMethod -Uri "https://graph.facebook.com/v21.0/$igId/media?fields=caption,media_type,timestamp,like_count,comments_count,reach,impressions&limit=10&access_token=$token" -Method Get

Write-Output "RECENT POSTS"
$i = 1
foreach ($post in $media.data) {
    $cap = if ($post.caption) { $post.caption.Substring(0, [Math]::Min(60, $post.caption.Length)) + "..." } else { "(no caption)" }
    $likes = if ($post.like_count) { $post.like_count } else { 0 }
    $comments = if ($post.comments_count) { $post.comments_count } else { 0 }
    $reach = if ($post.reach) { $post.reach } else { "n/a" }
    Write-Output ("  [$i] " + $post.timestamp.Substring(0,10) + " | " + $post.media_type + " | Likes: $likes | Comments: $comments | Reach: $reach")
    Write-Output ("      " + $cap)
    Write-Output ""
    $i++
}
