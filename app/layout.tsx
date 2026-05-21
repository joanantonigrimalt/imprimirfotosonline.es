import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_URL || 'http://localhost:3000'),
  title: {
    default: 'imprimirfotosonline.es - Imprime tus fotos online',
    template: '%s | imprimirfotosonline.es',
  },
  description: 'Revela e imprime tus fotos en papel Fujifilm profesional. Envío en 2-4 días. desde 0,09 €',
  robots: {
    index: true,
    follow: true,
  },
  applicationName: 'imprimirfotosonline.es',
  generator: 'Next.js',
  keywords: ['fotos', 'imprimir fotos', 'revelado de fotos', 'impresión fotografía'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} h-full`}
    >
      <head>
        <Script
          defer
          data-domain="imprimirfotosonline.es"
          src="https://plausible.io/js/script.js"
        />
      </head>
      <body className="min-h-full flex flex-col bg-white">{children}</body>
    </html>
  );
}
