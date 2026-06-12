$lines = Get-Content '.env'
$tokenLine = ($lines | Where-Object { $_ -match '^BUFFER_ACCESS_TOKEN=' } | Select-Object -Last 1)
$token = $tokenLine -replace 'BUFFER_ACCESS_TOKEN=', ''
$token = $token.Trim()

$orgId   = '6a2720deba07d109029b2e3d'
$ttId    = '6a2722e98f1d11f9b26623f7'

$query = @"
{
  "query": "query { posts(input: { organizationId: \"$orgId\", filter: { channelIds: [\"$ttId\"], status: [sent] } }, first: 10) { edges { node { id text sentAt metrics { type value } } } } }"
}
"@

$headers = @{ Authorization = "Bearer $token"; "Content-Type" = "application/json" }
$resp = Invoke-RestMethod -Uri "https://api.bufferapp.com/graphql" -Method Post -Headers $headers -Body $query

Write-Output "=== TIKTOK STATS (last 10 posts) ==="
Write-Output ""

foreach ($edge in $resp.data.posts.edges) {
    $post = $edge.node
    $cap = if ($post.text) { $post.text.Substring(0, [Math]::Min(60, $post.text.Length)) } else { "(no caption)" }
    $date = $post.sentAt.Substring(0,10)
    Write-Output ($date + " | " + $cap)

    foreach ($m in $post.metrics) {
        if ($m.value -gt 0 -or $m.type -in @('views','reach','reactions','shares','comments')) {
            Write-Output ("    " + $m.type + ": " + $m.value)
        }
    }
    Write-Output ""
}
