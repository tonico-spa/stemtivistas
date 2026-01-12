# Stemtivistas - Quick Setup Script for Windows PowerShell

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Stemtivistas Setup Script" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Backend Setup
Write-Host "[1/4] Setting up Python Backend..." -ForegroundColor Yellow
Set-Location -Path "stemtivistas_backend"

Write-Host "Creating virtual environment..." -ForegroundColor Gray
python -m venv venv

Write-Host "Activating virtual environment..." -ForegroundColor Gray
& ".\venv\Scripts\Activate.ps1"

Write-Host "Installing Flask dependencies..." -ForegroundColor Gray
pip install -e .

Write-Host "Backend setup complete!" -ForegroundColor Green
Set-Location -Path ".."

Write-Host ""

# Frontend Setup
Write-Host "[2/4] Setting up Next.js Frontend..." -ForegroundColor Yellow
Set-Location -Path "stemtivistas_frontend"

Write-Host "Installing npm dependencies..." -ForegroundColor Gray
npm install

Write-Host "Frontend setup complete!" -ForegroundColor Green
Set-Location -Path ".."

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Setup Complete!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "To run the application:" -ForegroundColor White
Write-Host ""
Write-Host "Terminal 1 (Backend):" -ForegroundColor Yellow
Write-Host "  cd stemtivistas_backend" -ForegroundColor Gray
Write-Host "  .\venv\Scripts\Activate" -ForegroundColor Gray
Write-Host "  python app.py" -ForegroundColor Gray
Write-Host ""
Write-Host "Terminal 2 (Frontend):" -ForegroundColor Yellow
Write-Host "  cd stemtivistas_frontend" -ForegroundColor Gray
Write-Host "  npm run dev" -ForegroundColor Gray
Write-Host ""
Write-Host "Then open: http://localhost:3000" -ForegroundColor Cyan
Write-Host ""
