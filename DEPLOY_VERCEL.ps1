# Script para deployar a Vercel automáticamente
# Ejecutar en PowerShell como administrador

Write-Host "
╔═══════════════════════════════════════════════════════════════════╗
║              DEPLOYANDO A VERCEL                                  ║
╚═══════════════════════════════════════════════════════════════════╝
" -ForegroundColor Green

cd "C:\Users\Pc\Desktop\Imprimir fotos"

# Paso 1: Login en Vercel
Write-Host "`n📱 Iniciando sesión en Vercel..." -ForegroundColor Yellow
vercel login

# Paso 2: Link del proyecto
Write-Host "`n🔗 Vinculando proyecto..." -ForegroundColor Yellow
vercel link --yes

# Paso 3: Añadir variables de entorno
Write-Host "`n🔐 Añadiendo variables de entorno..." -ForegroundColor Yellow

$env_vars = @(
    "DATABASE_URL=postgresql://postgres.ajpdqhhnnirdapzefiqx:[PASSWORD]@aws-0-eu-west-1.pooling.supabase.com:6543/postgres?schema=public",
    "DIRECT_URL=postgresql://postgres.ajpdqhhnnirdapzefiqx:[PASSWORD]@aws-0-eu-west-1.db.supabase.com:5432/postgres",
    "NEXT_PUBLIC_SUPABASE_URL=https://ajpdqhhnnirdapzefiqx.supabase.co",
    "NEXT_PUBLIC_SUPABASE_ANON_KEY=sb_publishable_[YOUR_KEY]",
    "SUPABASE_SERVICE_ROLE_KEY=sb_secret_[YOUR_KEY]",
    "STRIPE_SECRET_KEY=sk_test_",
    "NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_",
    "STRIPE_WEBHOOK_SECRET=whsec_",
    "RESEND_API_KEY=re_",
    "EMAIL_FROM=pedidos@imprimirfotosonline.es",
    "EMAIL_ADMIN=joantonigrimalt@gmail.com",
    "TELEGRAM_BOT_TOKEN=",
    "TELEGRAM_CHAT_ID=",
    "NEXT_PUBLIC_URL=https://imprimirfotosonline-es.vercel.app"
)

foreach ($var in $env_vars) {
    $key = $var.Split("=")[0]
    $value = $var.Split("=", 2)[1]
    Write-Host "  → Añadiendo $key..." -ForegroundColor Cyan
    vercel env add $key --yes $value 2>&1 | Out-Null
}

# Paso 4: Deploy
Write-Host "`n🚀 Desplegando..." -ForegroundColor Yellow
vercel deploy --prod

Write-Host "`n
╔═══════════════════════════════════════════════════════════════════╗
║                   ✅ DEPLOYMENT COMPLETADO                       ║
║                                                                   ║
║  Tu URL de Vercel está arriba ☝️                                  ║
║  Cópiala y pásala aquí para continuar con:                       ║
║  - Crear Storage bucket en Supabase                              ║
║  - Configurar Stripe webhook                                     ║
║  - ¡Prueba end-to-end!                                           ║
╚═══════════════════════════════════════════════════════════════════╝
" -ForegroundColor Green
