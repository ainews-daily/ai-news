# Run /ai日报 headlessly with Claude Code. Called by Windows Task Scheduler every morning.
# Usage: powershell -ExecutionPolicy Bypass -File scripts\daily.ps1 [-PromptFile <path>]
# Output goes to logs\daily-<time>.log (logs\ is git-ignored). Keeps the latest 30 logs.
# Kept ASCII-only on purpose: Windows PowerShell 5.1 misreads non-ASCII in BOM-less scripts.
param([string]$PromptFile = "")

$root = Split-Path -Parent $PSScriptRoot
Set-Location $root
if (-not $PromptFile) { $PromptFile = Join-Path $PSScriptRoot "daily-prompt.txt" }

$utf8 = New-Object System.Text.UTF8Encoding $false
$OutputEncoding = $utf8
[Console]::InputEncoding = $utf8
[Console]::OutputEncoding = $utf8

$logDir = Join-Path $root "logs"
New-Item -ItemType Directory -Force $logDir | Out-Null
$log = Join-Path $logDir ("daily-" + (Get-Date -Format "yyyy-MM-dd_HHmm") + ".log")

# Pick the newest claude.exe: the standalone CLI or the one bundled with the VS Code extension
# (the extension auto-updates, the CLI may lag behind and not know the newest models).
$candidates = @(Join-Path $env:USERPROFILE ".local\bin\claude.exe") +
  @(Get-ChildItem (Join-Path $env:USERPROFILE ".vscode\extensions") -Directory -Filter "anthropic.claude-code*" -ErrorAction SilentlyContinue |
    ForEach-Object { Join-Path $_.FullName "resources\native-binary\claude.exe" })
$claude = $candidates | Where-Object { Test-Path $_ } |
  Sort-Object { try { [version](((& $_ --version) -split " ")[0]) } catch { [version]"0.0" } } -Descending |
  Select-Object -First 1
$tools = "Bash,Read,Write,Edit,Glob,Grep,WebSearch,WebFetch,Skill,ToolSearch"

"[start] $(Get-Date -Format s) prompt=$PromptFile claude=$claude" | Out-File $log -Encoding utf8
$prompt = Get-Content $PromptFile -Raw -Encoding UTF8
$prompt | & $claude -p --model claude-opus-5-5 --permission-mode acceptEdits --allowedTools $tools 2>&1 |
  ForEach-Object { "$_" } | Out-File $log -Append -Encoding utf8
$code = $LASTEXITCODE
"[end] $(Get-Date -Format s) exit=$code" | Out-File $log -Append -Encoding utf8

Get-ChildItem $logDir -Filter "daily-*.log" | Sort-Object Name -Descending |
  Select-Object -Skip 30 | Remove-Item -Force
exit $code
