import { generateMetadata } from '@/lib/seo';

export const metadata = generateMetadata(
  'Imprimir fotos 10x15 online desde 0,09€ | imprimirfotosonline.es',
  'Revela tus fotos 10x15 en papel Fujifilm profesional. Calidad laboratorio. Envío 2-4 días. Desde 0,09 €.',
  '/imprimir-fotos-10x15'
);

export default function Page10x15() {
  return (
    <main className="flex flex-col">
      {/* Hero */}
      <section className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center px-4 py-20">
        <div className="max-w-4xl w-full text-center">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6">
            Imprime fotos 10x15
          </h1>
          <p className="text-xl text-gray-600 mb-4">
            La medida clásica y versátil. Perfecta para álbumes, marcos y regalos.
          </p>
          <p className="text-2xl font-bold text-blue-600 mb-8">
            Desde 0,09 € + envío
          </p>
          <a
            href="/editor"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition text-lg"
          >
            Subir fotos ahora
          </a>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">¿Por qué elegir imprimirfotosonline.es?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex gap-4">
              <div className="text-3xl">📸</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Calidad Fujifilm</h3>
                <p className="text-gray-600">Papel fotográfico profesional de la marca líder mundial.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl">⚡</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Rápido</h3>
                <p className="text-gray-600">24-48h producción + 2-4 días envío. Total 4-6 días.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl">💳</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Pagos seguros</h3>
                <p className="text-gray-600">Stripe, tarjeta, Apple Pay, Google Pay, Bizum.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-3xl">📦</div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Envío incluido</h3>
                <p className="text-gray-600">Desde 3,99 € a toda España en 2-4 días.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Precios 10x15</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { qty: 10, unit: 0.09, total: 0.90 },
              { qty: 25, unit: 0.08, total: 2.00 },
              { qty: 50, unit: 0.07, total: 3.50 },
            ].map((tier) => (
              <div key={tier.qty} className="bg-white p-8 rounded-lg shadow-md text-center">
                <p className="text-sm text-gray-500 mb-2">{tier.qty} fotos</p>
                <p className="text-3xl font-bold text-blue-600 mb-4">{tier.unit.toFixed(2)}€/ud</p>
                <p className="text-gray-600 mb-4">Total: {tier.total.toFixed(2)}€</p>
                <p className="text-sm text-gray-500">+ 3,99€ envío</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Preguntas frecuentes</h2>
          <div className="space-y-6">
            {[
              {
                q: '¿Qué formatos de foto aceptáis?',
                a: 'JPG, PNG, HEIC. Mínimo 1000px. Máximo 25MB por foto.',
              },
              {
                q: '¿Cuál es el tiempo de entrega?',
                a: '24-48h producción + 2-4 días envío. Total 4-6 días hábiles.',
              },
              {
                q: '¿Se puede cambiar o cancelar un pedido?',
                a: 'Sí, antes de que empiece la producción (primeras 2 horas). Contacta a soporte.',
              },
            ].map((item, i) => (
              <div key={i} className="border-b pb-4">
                <h3 className="font-semibold text-lg mb-2">{item.q}</h3>
                <p className="text-gray-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">¿Listo para imprimir?</h2>
          <p className="text-lg mb-8 opacity-90">
            Sube tus fotos ahora y recíbelas en casa en 4-6 días.
          </p>
          <a
            href="/editor"
            className="inline-block bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition"
          >
            Empezar
          </a>
        </div>
      </section>
    </main>
  );
}
