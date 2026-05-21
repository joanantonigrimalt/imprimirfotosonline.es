interface OrderWithItems {
  id: string;
  orderNumber: string;
  amountTotal: number;
  customerName: string;
  customerEmail: string;
  shippingCity: string;
  shippingProvince: string;
  items: { id: string; format: string }[];
}

export async function sendTelegramAlert(order: OrderWithItems) {
  const message = `
🔔 *Nuevo pedido* #${order.orderNumber}

💰 Total: ${(order.amountTotal / 100).toFixed(2)} €
👤 ${order.customerName} (${order.customerEmail})
📦 ${order.items.length} foto(s)
📍 ${order.shippingCity}, ${order.shippingProvince}

[Ver en panel](${process.env.NEXT_PUBLIC_URL}/admin/pedidos/${order.id})
  `.trim();

  try {
    await fetch(
      `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: process.env.TELEGRAM_CHAT_ID,
          text: message,
          parse_mode: 'Markdown',
        }),
      }
    );
  } catch (error) {
    console.error(JSON.stringify({ error: 'Telegram alert failed', details: error }));
  }
}
