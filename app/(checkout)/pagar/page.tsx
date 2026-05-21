'use client';

import { useState } from 'react';
import { useCartStore } from '@/lib/store';
import { calculatePrice } from '@/lib/pricing';
import Link from 'next/link';

export default function PayPage() {
  const { items } = useCartStore();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    phone: '',
    address: '',
    city: '',
    postal: '',
    province: '',
  });

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Carrito vacío</h1>
          <p className="text-gray-600 mb-8">Sube fotos para continuar</p>
          <Link href="/editor" className="text-blue-600 hover:underline font-semibold">
            Volver al editor
          </Link>
        </div>
      </div>
    );
  }

  const subtotal = items.reduce(
    (sum, item) => sum + calculatePrice(item.format, item.quantity).subtotal,
    0
  );
  const shipping = 399;
  const tax = Math.round(subtotal * 0.21);
  const total = subtotal + shipping + tax;

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items,
          customer: {
            email: formData.email,
            name: formData.name,
          },
          shipping: {
            address: formData.address,
            city: formData.city,
            postal: formData.postal,
            province: formData.province,
          },
        }),
      });

      const { url } = await res.json();
      if (url) window.location.href = url;
    } catch (error) {
      console.error(error);
      alert('Error al procesar pago');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Confirma tu pedido</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Formulario */}
          <div className="lg:col-span-2">
            <form onSubmit={handleCheckout} className="space-y-6">
              <fieldset className="bg-white p-6 rounded-lg shadow-sm">
                <legend className="text-lg font-semibold mb-4">Datos personales</legend>
                <div className="space-y-4">
                  <input
                    type="email"
                    required
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                  <input
                    type="text"
                    required
                    placeholder="Nombre completo"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                  <input
                    type="tel"
                    placeholder="Teléfono (opcional)"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>
              </fieldset>

              <fieldset className="bg-white p-6 rounded-lg shadow-sm">
                <legend className="text-lg font-semibold mb-4">Dirección de envío</legend>
                <div className="space-y-4">
                  <input
                    type="text"
                    required
                    placeholder="Calle, número, piso..."
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      required
                      placeholder="Ciudad"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                    <input
                      type="text"
                      required
                      placeholder="Código postal"
                      value={formData.postal}
                      onChange={(e) => setFormData({ ...formData, postal: e.target.value })}
                      className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                    />
                  </div>
                  <input
                    type="text"
                    required
                    placeholder="Provincia"
                    value={formData.province}
                    onChange={(e) => setFormData({ ...formData, province: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>
              </fieldset>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-semibold py-3 rounded-lg transition"
              >
                {loading ? 'Procesando...' : 'Pagar con Stripe'}
              </button>
            </form>
          </div>

          {/* Resumen */}
          <div className="bg-white p-6 rounded-lg shadow-sm h-fit">
            <h2 className="text-xl font-bold mb-4">Resumen</h2>
            <div className="space-y-3 mb-6 pb-6 border-b">
              {items.map((item, i) => (
                <div key={i} className="text-sm">
                  <p className="font-medium">{item.quantity}x {item.format}</p>
                </div>
              ))}
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Subtotal</span>
                <span>{(subtotal / 100).toFixed(2)}€</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">IVA (21%)</span>
                <span>{(tax / 100).toFixed(2)}€</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Envío</span>
                <span>{(shipping / 100).toFixed(2)}€</span>
              </div>
              <div className="flex justify-between font-bold text-lg pt-2 border-t">
                <span>Total</span>
                <span>{(total / 100).toFixed(2)}€</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
