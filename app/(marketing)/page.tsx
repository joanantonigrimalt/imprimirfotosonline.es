import { generateMetadata } from '@/lib/seo';

export const metadata = generateMetadata(
  'Imprime tus fotos online desde 0,09€ | imprimirfotosonline.es',
  'Revela e imprime tus fotos en papel Fujifilm profesional. 10x15, cuadradas, polaroid, 15x20 y pósters. Envío en 2-4 días.',
  '/'
);

export default function Home() {
  return (
    <main className="flex flex-col">
      <section className="min-h-screen bg-gradient-to-b from-slate-50 to-white flex items-center justify-center px-4">
        <div className="max-w-4xl w-full text-center">
          <h1 className="text-5xl font-bold tracking-tight text-gray-900 mb-6">
            Imprime tus fotos online
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Revela e imprime tus fotos en papel Fujifilm profesional. Desde 0,09 € + envío.
          </p>
          <a
            href="/editor"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition"
          >
            Empezar a imprimir
          </a>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Formatos disponibles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: '10x15 cm', price: '0,09 €' },
              { name: 'Cuadrada', price: '0,15 €' },
              { name: 'Polaroid', price: '0,25 €' },
              { name: '15x20 cm', price: '0,35 €' },
              { name: 'Póster', price: '0,99 €' },
            ].map((format) => (
              <div key={format.name} className="p-6 border rounded-lg text-center hover:shadow-lg transition">
                <h3 className="font-semibold text-lg mb-2">{format.name}</h3>
                <p className="text-blue-600 font-bold">{format.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
