@echo off
echo ========================================
echo Git Push Update Script - Root Repository
echo ========================================
echo.

REM Add all files to staging
echo Adding all files to git...
git add .
echo.

REM Show status
echo Current git status:
git status --short
echo.

REM Create commit with timestamp
echo Creating commit...
for /f "tokens=2-4 delims=/ " %%a in ('date /t') do (set mydate=%%c-%%a-%%b)
for /f "tokens=1-2 delims=/:" %%a in ("%TIME%") do (set mytime=%%a:%%b)
git commit -m "Update: %mydate% %mytime%"
echo.

REM Push to remote repository
echo Pushing to remote repository...
git push
echo.

echo ========================================
echo Update complete!
echo ========================================
pause