'use client';

import { PhotoUploader } from '@/components/editor/PhotoUploader';
import { FormatSelector } from '@/components/editor/FormatSelector';
import { useCartStore } from '@/lib/store';
import { calculatePrice } from '@/lib/pricing';
import Link from 'next/link';

export default function EditorPage() {
  const { items, updatePhoto } = useCartStore();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-2">Editor de fotos</h1>
        <p className="text-gray-600 mb-8">Sube tus fotos y personaliza tu pedido</p>

        {items.length === 0 ? (
          <PhotoUploader />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Photos */}
            <div className="lg:col-span-2 space-y-6">
              {items.map((item) => (
                <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="flex gap-6 p-6">
                    {/* Preview */}
                    <div className="flex-shrink-0">
                      <img
                        src={item.preview}
                        alt="Preview"
                        className="w-32 h-40 object-cover rounded-lg"
                      />
                    </div>

                    {/* Config */}
                    <div className="flex-1">
                      <FormatSelector
                        photoId={item.id}
                        format={item.format}
                        finish={item.finish}
                        quantity={item.quantity}
                        onFormatChange={(format) =>
                          updatePhoto(item.id, { format })
                        }
                        onFinishChange={(finish) =>
                          updatePhoto(item.id, { finish })
                        }
                        onQuantityChange={(quantity) =>
                          updatePhoto(item.id, { quantity })
                        }
                      />
                    </div>
                  </div>
                </div>
              ))}

              <button
                onClick={() => {
                  /* Clear for now */
                }}
                className="w-full py-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-400 transition text-gray-600"
              >
                + Añadir más fotos
              </button>
            </div>

            {/* Resumen */}
            <div className="bg-white rounded-lg shadow-md p-6 h-fit">
              <h2 className="text-2xl font-bold mb-6">Resumen del pedido</h2>
              <div className="space-y-4 mb-6">
                {items.map((item) => {
                  const price = calculatePrice(item.format, item.quantity);
                  return (
                    <div key={item.id} className="text-sm">
                      <p className="font-medium">
                        {item.quantity}x {item.format} ({item.finish})
                      </p>
                      <p className="text-gray-600">
                        {(price.subtotal / 100).toFixed(2)}€
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="border-t pt-4 space-y-2 mb-6">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>
                    {(
                      items.reduce(
                        (sum, item) =>
                          sum + calculatePrice(item.format, item.quantity).subtotal,
                        0
                      ) / 100
                    ).toFixed(2)}
                    €
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Envío</span>
                  <span>3,99€</span>
                </div>
                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span>
                    {(
                      (items.reduce(
                        (sum, item) =>
                          sum + calculatePrice(item.format, item.quantity).subtotal,
                        0
                      ) +
                        399) /
                      100
                    ).toFixed(2)}
                    €
                  </span>
                </div>
              </div>

              <Link
                href="/pagar"
                className="block w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg text-center transition"
              >
                Ir a pagar
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
