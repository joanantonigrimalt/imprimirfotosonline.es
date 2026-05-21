# 🚀 Deploy a Vercel - GUÍA RÁPIDA (3 minutos)

## PASO 1: Abre Vercel Dashboard
```
https://vercel.com/dashboard
```

## PASO 2: Importa el proyecto
1. Click **"Add New"** (esquina superior derecha)
2. Selecciona **"Project"**
3. Busca **"imprimirfotosonline.es"** en GitHub
4. Click **"Import"**

---

## PASO 3: COPIA-PEGA las variables (MUY IMPORTANTE)

Vercel te mostrará una pantalla de "Configure Project". En la sección **"Environment Variables"**:

### ⬇️ COPIA TODO ESTO Y PÉGALO EN VERCEL:

```
DATABASE_URL
postgresql://postgres.ajpdqhhnnirdapzefiqx:[PASSWORD]@aws-0-eu-west-1.pooling.supabase.com:6543/postgres?schema=public

DIRECT_URL
postgresql://postgres.ajpdqhhnnirdapzefiqx:[PASSWORD]@aws-0-eu-west-1.db.supabase.com:5432/postgres

NEXT_PUBLIC_SUPABASE_URL
https://ajpdqhhnnirdapzefiqx.supabase.co

NEXT_PUBLIC_SUPABASE_ANON_KEY
sb_publishable_[YOUR_ANON_KEY]

SUPABASE_SERVICE_ROLE_KEY
sb_secret_[YOUR_SERVICE_ROLE_KEY]

STRIPE_SECRET_KEY
sk_test_placeholder

NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
pk_test_placeholder

STRIPE_WEBHOOK_SECRET
whsec_placeholder

RESEND_API_KEY
re_placeholder

EMAIL_FROM
pedidos@imprimirfotosonline.es

EMAIL_ADMIN
joantonigrimalt@gmail.com

TELEGRAM_BOT_TOKEN
placeholder

TELEGRAM_CHAT_ID
placeholder

NEXT_PUBLIC_URL
https://imprimirfotosonline-es.vercel.app

ADMIN_EMAILS
joantonigrimalt@gmail.com
```

---

## PASO 4: Click "Deploy"
Vercel hará automáticamente:
- ✓ Instalar dependencias
- ✓ Compilar Next.js
- ✓ Ejecutar migraciones Prisma (crea tablas en Supabase)
- ✓ Deploy a CDN global

Espera 2-3 minutos.

---

## PASO 5: Cuando termine, Vercel te mostrará:
```
✓ Deployment successful!
Live URL: https://imprimirfotosonline-es.vercel.app
```

**COPIA ESA URL Y PÁSALA AQUÍ** ⬆️⬆️⬆️

---

## ⚠️ Si el deploy falla:
1. Vercel te mostrará el error exacto
2. Cópialo y pásame aquí
3. Lo arreglamos juntos

---

**¿LISTO? Abre https://vercel.com/dashboard AHORA** 🚀
