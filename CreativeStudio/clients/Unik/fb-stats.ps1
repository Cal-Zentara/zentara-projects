$lines = Get-Content '.env'
$tokenLine = ($lines | Where-Object { $_ -match '^UNIK_PAGE_TOKEN=' } | Select-Object -Last 1)
$token = $tokenLine -replace 'UNIK_PAGE_TOKEN=', ''
$token = $token.Trim()
$pageId = '126393510763439'

Write-Output "=== UNIK INC FACEBOOK STATS ==="
Write-Output ""

# Page basics
$page = Invoke-RestMethod -Uri "https://graph.facebook.com/v21.0/$pageId`?fields=name,followers_count,fan_count,talking_about_count&access_token=$token" -Method Get
Write-Output "PAGE"
Write-Output ("  Name:       " + $page.name)
Write-Output ("  Followers:  " + $page.followers_count)
Write-Output ("  Likes:      " + $page.fan_count)
Write-Output ("  Talking:    " + $page.talking_about_count)
Write-Output ""

# Page insights - last 30 days
try {
    $insights = Invoke-RestMethod -Uri "https://graph.facebook.com/v21.0/$pageId/insights?metric=page_impressions,page_reach,page_views_total&period=month&access_token=$token" -Method Get
    Write-Output "PAGE REACH (last 30 days)"
    foreach ($item in $insights.data) {
        $val = if ($item.values) { $item.values[-1].value } else { "n/a" }
        Write-Output ("  " + $item.name + ": " + $val)
    }
    Write-Output ""
} catch {
    Write-Output "Page insights: not available (may need advanced permissions)"
    Write-Output ""
}

# Recent posts
$posts = Invoke-RestMethod -Uri "https://graph.facebook.com/v21.0/$pageId/posts?fields=message,created_time,full_picture,likes.summary(true),comments.summary(true),shares&limit=10&access_token=$token" -Method Get
Write-Output "RECENT POSTS"
$i = 1
foreach ($post in $posts.data) {
    $msg = if ($post.message) { $post.message.Substring(0, [Math]::Min(60, $post.message.Length)) + "..." } else { "(no caption)" }
    $likes = if ($post.likes) { $post.likes.summary.total_count } else { 0 }
    $comments = if ($post.comments) { $post.comments.summary.total_count } else { 0 }
    $shares = if ($post.shares) { $post.shares.count } else { 0 }
    Write-Output ("  [$i] " + $post.created_time.Substring(0,10) + " | Likes: $likes | Comments: $comments | Shares: $shares")
    Write-Output ("      " + $msg)
    Write-Output ""
    $i++
}

# Videos
$videos = Invoke-RestMethod -Uri "https://graph.facebook.com/v21.0/$pageId/videos?fields=title,description,created_time,views,likes.summary(true),comments.summary(true)&limit=5&access_token=$token" -Method Get
if ($videos.data.Count -gt 0) {
    Write-Output "VIDEOS"
    foreach ($vid in $videos.data) {
        $title = if ($vid.title) { $vid.title } else { "(no title)" }
        $views = if ($vid.views) { $vid.views } else { 0 }
        $likes = if ($vid.likes) { $vid.likes.summary.total_count } else { 0 }
        $comments = if ($vid.comments) { $vid.comments.summary.total_count } else { 0 }
        Write-Output ("  " + $vid.created_time.Substring(0,10) + " | Views: $views | Likes: $likes | Comments: $comments")
        Write-Output ("  Title: $title")
        Write-Output ""
    }
}
