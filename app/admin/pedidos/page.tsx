'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface MockOrder {
  id: string;
  orderNumber: string;
  customerName: string;
  customerEmail: string;
  amountTotal: number;
  status: string;
  createdAt: string;
}

export default function AdminOrdersPage() {
  const [orders, setOrders] = useState<MockOrder[]>([]);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('admin_token');
    if (!token) {
      router.push('/admin/login');
      return;
    }

    // Mock data - cuando BD esté conectada, fetch real
    setOrders([
      {
        id: '1',
        orderNumber: 'IFO-2026-00001',
        customerName: 'Juan García',
        customerEmail: 'juan@example.com',
        amountTotal: 2599,
        status: 'PAID',
        createdAt: '2026-05-21',
      },
      {
        id: '2',
        orderNumber: 'IFO-2026-00002',
        customerName: 'María López',
        customerEmail: 'maria@example.com',
        amountTotal: 4299,
        status: 'IN_PRODUCTION',
        createdAt: '2026-05-20',
      },
    ]);
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('admin_token');
    router.push('/admin/login');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Pedidos</h1>
          <button
            onClick={handleLogout}
            className="text-red-600 hover:text-red-700 font-semibold"
          >
            Cerrar sesión
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-100 border-b">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold">Número</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Cliente</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Email</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Total</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Estado</th>
                <th className="px-6 py-4 text-left text-sm font-semibold">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-b hover:bg-gray-50">
                  <td className="px-6 py-4 font-mono font-semibold">{order.orderNumber}</td>
                  <td className="px-6 py-4">{order.customerName}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{order.customerEmail}</td>
                  <td className="px-6 py-4 font-semibold">{(order.amountTotal / 100).toFixed(2)}€</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      order.status === 'PAID' ? 'bg-yellow-100 text-yellow-800' :
                      order.status === 'IN_PRODUCTION' ? 'bg-blue-100 text-blue-800' :
                      'bg-green-100 text-green-800'
                    }`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <Link
                      href={`/admin/pedidos/${order.id}`}
                      className="text-blue-600 hover:text-blue-700 font-semibold"
                    >
                      Ver
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
