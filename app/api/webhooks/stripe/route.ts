import { NextRequest, NextResponse } from 'next/server';
import stripe from '@/lib/stripe';

export async function POST(req: NextRequest) {
  const body = await req.text();
  const signature = req.headers.get('stripe-signature');

  if (!signature) {
    return NextResponse.json({ error: 'No signature' }, { status: 400 });
  }

  try {
    const event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );

    if (event.type === 'checkout.session.completed') {
      const session = event.data.object as any;

      console.log(
        JSON.stringify({
          event: 'checkout.session.completed',
          sessionId: session.id,
          customerId: session.customer_email,
          amount: session.amount_total,
        })
      );

      // TODO: Cuando BD esté conectada
      // - Crear Order en BD con status PAID
      // - Enviar email confirmación
      // - Enviar alert Telegram
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error(JSON.stringify({ error: 'Webhook signature verification failed' }));
    return NextResponse.json({ error: 'Webhook error' }, { status: 400 });
  }
}
