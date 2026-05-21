# Guía de Deployment a Vercel

## 1. Conectar GitHub a este proyecto

```bash
git remote add origin https://github.com/tu-usuario/imprimirfotosonline.es.git
git push -u origin main
```

## 2. Crear proyecto en Vercel

1. Ve a [vercel.com](https://vercel.com)
2. Conecta tu repositorio de GitHub
3. Selecciona este proyecto
4. Vercel detectará automáticamente que es Next.js 15

## 3. Variables de entorno en Vercel

En Settings → Environment Variables, añade:

```
DATABASE_URL=postgresql://...
DIRECT_URL=postgresql://...

NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
SUPABASE_SERVICE_ROLE_KEY=...

STRIPE_SECRET_KEY=sk_live_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_...
STRIPE_WEBHOOK_SECRET=whsec_...

RESEND_API_KEY=re_...
EMAIL_FROM=pedidos@imprimirfotosonline.es
EMAIL_ADMIN=tu-email@gmail.com

TELEGRAM_BOT_TOKEN=...
TELEGRAM_CHAT_ID=...

NEXT_PUBLIC_URL=https://imprimirfotosonline.es
ADMIN_EMAILS=tu-email@gmail.com
```

## 4. Setup Supabase

1. Crear proyecto en [supabase.com](https://supabase.com)
2. Copiar `NEXT_PUBLIC_SUPABASE_URL` y `NEXT_PUBLIC_SUPABASE_ANON_KEY`
3. En Settings → Databases → Connection Pooling, obtener `DATABASE_URL` y `DIRECT_URL`
4. Crear bucket en Storage llamado `order-photos`

## 5. Setup Stripe

1. Crear cuenta en [stripe.com](https://stripe.com)
2. En Dashboard → API keys, copiar claves test
3. En Developers → Webhooks, crear endpoint:
   - URL: `https://tu-dominio.vercel.app/api/webhooks/stripe`
   - Eventos: `checkout.session.completed`

## 6. Ejecutar migraciones Prisma

Después de conectar BD:

```bash
npx prisma migrate dev --name init
```

O en Vercel, en el settings post-deploy, ejecutar el build command que automáticamente hará migrate.

## 7. Dominio personalizado

1. Comprar dominio en [godaddy.com](https://godaddy.com) o [namecheap.com](https://namecheap.com)
2. En Vercel → Project Settings → Domains, añadir dominio
3. Apuntar los DNS a Vercel

## 8. Test de pago

Con Stripe en test mode:
- Tarjeta: `4242 4242 4242 4242`
- Fecha: cualquier futura
- CVC: cualquier 3 dígitos

## Estado actual

✅ Frontend completo (editor, checkout, admin)
✅ Integración Stripe checkout
✅ Webhook listo (sin BD)
✅ Email templates creadas
✅ SEO setup

⏳ Pendiente: Conectar BD real en Vercel
⏳ Pendiente: Activar Resend emails
⏳ Pendiente: Activar Telegram alerts
⏳ Pendiente: Supabase Storage para fotos

Una vez conectes la BD y configures las env vars, todo debería funcionar.
