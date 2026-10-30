@echo off
chcp 65001 >nul
cd /d "%~dp0"

powershell -NoProfile -Command "try{$c=New-Object Net.Sockets.TcpClient;$c.Connect('127.0.0.1',8910);$c.Close();exit 0}catch{exit 1}"
if %errorlevel%==0 (
  start "" "http://127.0.0.1:8910/"
  exit /b
)

set "PY=C:\Users\凌晨望晚霞\.dsh\dsh-runtimes\dsh-primary-runtime\dependencies\python\python.exe"
if exist "%PY%" (
  "%PY%" serve.py
) else (
  python serve.py
)
pause