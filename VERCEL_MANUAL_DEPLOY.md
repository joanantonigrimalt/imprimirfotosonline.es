# Deploy Manual a Vercel (sin CLI)

## Resumen de lo que hemos hecho:
- ✅ Repositorio GitHub creado: https://github.com/joanantonigrimalt/imprimirfotosonline.es
- ✅ Código pusheado a GitHub
- ✅ Proyecto Next.js 15 listo para deploy

## Pasos para desplegar en Vercel:

### 1. Ir a Vercel Dashboard

Abre en el navegador:
```
https://vercel.com/dashboard
```

### 2. Crear nuevo proyecto

- Click en "Add New..." → "Project"
- Selecciona "imprimirfotosonline.es" de tu lista de repos GitHub
- Click "Import"

### 3. Vercel detectará automáticamente:
- Framework: Next.js 15 ✓
- Build command: `npm run build` ✓
- Output directory: `.next` ✓

No cambies nada, solo click "Deploy"

### 4. Esperar a que termine (2-3 minutos)

Vercel hará:
```
✓ Clonando repo
✓ Instalando dependencias
✓ Building Next.js
✓ Deployando a edge
```

### 5. Vercel te dará una URL como:
```
https://imprimirfotosonline-es.vercel.app
```

**COPIA ESTA URL** y comparte conmigo para el siguiente paso.

---

## Después del Deploy (lo haremos juntos):

Una vez tengas la URL de Vercel:

1. **Configurar variables de entorno en Vercel:**
   - Settings → Environment Variables
   - Añadir todas las variables del `.env`

2. **Conectar Supabase:**
   - Crear proyecto en supabase.com
   - Obtener DATABASE_URL
   - Ejecutar migraciones Prisma

3. **Configurar Stripe:**
   - Claves de Stripe live
   - Webhook pointing a tu URL Vercel

4. **Email y Telegram:**
   - Resend API key
   - Telegram bot token

---

## ¿Problemas comunes?

**"Build failed"**
- Vercel te mostrará el error exacto
- Copiar el error y enviarmelo

**"Environment variables not found"**
- Ir a Settings → Environment Variables
- Añadir todas las que falten

**"Stripe webhook not working"**
- URL debe ser: `https://tu-vercel-url.vercel.app/api/webhooks/stripe`

---

**Cuando tengas la URL, dímelo aquí y continuamos con la configuración de BD y APIs.**
