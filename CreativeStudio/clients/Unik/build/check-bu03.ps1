$folder = 'C:\Users\Aesth\Desktop\BU03 Colors'
$files = Get-ChildItem $folder -File
$empty = $files | Where-Object { $_.Length -eq 0 }
Write-Output ("Total files: " + $files.Count)
Write-Output ("Empty files: " + $empty.Count)
foreach ($f in $empty) { Write-Output ("  EMPTY: " + $f.Name) }
