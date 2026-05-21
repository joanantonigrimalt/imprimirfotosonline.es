'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function OrderPage({ params }: { params: { id: string } }) {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
        <div className="text-6xl mb-4">✅</div>
        <h1 className="text-3xl font-bold mb-4">¡Pedido confirmado!</h1>
        <p className="text-gray-600 mb-2">Tu pedido ha sido recibido correctamente.</p>
        <p className="text-sm text-gray-500 mb-8">
          Te enviaremos un email de confirmación con los detalles.
        </p>

        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <p className="text-sm text-gray-600 mb-2">Número de pedido</p>
          <p className="font-mono text-lg font-bold">IFO-2026-{Math.random().toString().slice(2, 8)}</p>
        </div>

        <div className="space-y-3 text-left mb-8">
          <div>
            <p className="text-sm text-gray-600">Tiempo estimado</p>
            <p className="font-semibold">4-6 días hábiles</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Producción</p>
            <p className="font-semibold">24-48h</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Envío</p>
            <p className="font-semibold">2-4 días</p>
          </div>
        </div>

        <Link
          href="/"
          className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition mb-2"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}
