import { NextRequest, NextResponse } from 'next/server';
import stripe from '@/lib/stripe';

export async function POST(req: NextRequest) {
  try {
    const { items, customer, shipping } = await req.json();

    if (!items || items.length === 0) {
      return NextResponse.json({ error: 'No items' }, { status: 400 });
    }

    const lineItems = items.map((item: any) => ({
      price_data: {
        currency: 'eur',
        product_data: {
          name: `Foto ${item.format} (${item.finish})`,
        },
        unit_amount: Math.round(10000 / 100), // Placeholder price
      },
      quantity: item.quantity,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      locale: 'es',
      customer_email: customer.email,
      line_items: lineItems,
      shipping_address_collection: {
        allowed_countries: ['ES'],
      },
      success_url: `${process.env.NEXT_PUBLIC_URL}/pedido/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_URL}/pagar`,
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error(JSON.stringify({ error: 'Checkout error', details: error }));
    return NextResponse.json({ error: 'Checkout failed' }, { status: 500 });
  }
}
