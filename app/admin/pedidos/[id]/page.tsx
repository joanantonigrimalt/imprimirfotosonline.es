'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function AdminOrderDetailPage({ params }: { params: { id: string } }) {
  const [status, setStatus] = useState('PAID');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('admin_token');
    if (!token) {
      router.push('/admin/login');
    }
  }, [router]);

  const handleStatusUpdate = async () => {
    setLoading(true);
    // Placeholder - cuando BD esté conectada, API call real
    await new Promise(r => setTimeout(r, 500));
    alert('Estado actualizado');
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <Link href="/admin/pedidos" className="text-blue-600 hover:text-blue-700 mb-6 inline-block">
          ← Volver a pedidos
        </Link>

        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">IFO-2026-00001</h1>
            <p className="text-gray-600">Cliente: Juan García (juan@example.com)</p>
          </div>

          <div className="grid grid-cols-2 gap-8 mb-8">
            <div>
              <p className="text-sm text-gray-600 mb-1">Dirección de envío</p>
              <p className="font-medium">Calle Principal 123</p>
              <p className="text-gray-600">28001 Madrid, Madrid</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Total</p>
              <p className="text-2xl font-bold">25,99€</p>
            </div>
          </div>

          <div className="border-t pt-8 mb-8">
            <h2 className="text-xl font-bold mb-4">Items del pedido</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-semibold">Foto 10x15 (Brillo)</p>
                  <p className="text-sm text-gray-600">Cantidad: 10</p>
                </div>
                <a href="#" className="text-blue-600 hover:text-blue-700 font-semibold text-sm">
                  Descargar imagen
                </a>
              </div>
            </div>
          </div>

          <div className="border-t pt-8">
            <h2 className="text-xl font-bold mb-4">Actualizar estado</h2>
            <div className="space-y-4">
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              >
                <option value="PAID">Pagado</option>
                <option value="IN_PRODUCTION">En producción</option>
                <option value="SHIPPED">Enviado</option>
                <option value="DELIVERED">Entregado</option>
              </select>

              <input
                type="text"
                placeholder="Número de seguimiento (opcional)"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              />

              <button
                onClick={handleStatusUpdate}
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-semibold py-2 rounded-lg transition"
              >
                {loading ? 'Actualizando...' : 'Actualizar estado'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
