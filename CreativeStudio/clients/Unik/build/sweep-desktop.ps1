New-Item -ItemType Directory -Path 'C:\Users\Aesth\Desktop\BU03 Video' -Force | Out-Null
$files = Get-ChildItem 'C:\Users\Aesth\Desktop' -File | Where-Object {
    ($_.Name -like 'BU03*') -or ($_.Name -like 'TunnelRun*') -or ($_.Name -like 'AUDIO_PROOF*')
}
foreach ($f in $files) {
    Move-Item -Path $f.FullName -Destination 'C:\Users\Aesth\Desktop\BU03 Video\' -Force
}
Write-Output ("Moved " + $files.Count + " files into BU03 Video folder")
Get-ChildItem 'C:\Users\Aesth\Desktop' -File | Where-Object { $_.Name -like '*CLIP*' -or $_.Name -like '*COMBINED*' } | Select-Object -ExpandProperty Name
