export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-screen">
      {children}
      <footer className="bg-gray-900 text-white py-12 px-4 mt-auto">
        <div className="max-w-4xl mx-auto text-center text-sm text-gray-400">
          <p>&copy; 2026 imprimirfotosonline.es. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
