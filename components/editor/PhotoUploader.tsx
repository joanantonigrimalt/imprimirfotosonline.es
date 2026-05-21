'use client';

import { useRef, useState } from 'react';
import { useCartStore } from '@/lib/store';

const VALID_FORMATS = ['image/jpeg', 'image/png', 'image/heic'];
const MAX_FILE_SIZE = 25 * 1024 * 1024; // 25MB
const MIN_PIXELS = 1000;

export function PhotoUploader() {
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { addPhoto } = useCartStore();

  const validateAndAddPhoto = async (file: File) => {
    setError('');

    // Validar tipo
    if (!VALID_FORMATS.includes(file.type)) {
      setError('Formato no válido. Usa JPG, PNG o HEIC.');
      return;
    }

    // Validar tamaño
    if (file.size > MAX_FILE_SIZE) {
      setError('Archivo muy grande. Máximo 25MB.');
      return;
    }

    // Validar dimensiones
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        if (img.width < MIN_PIXELS || img.height < MIN_PIXELS) {
          setError(`Resolución muy baja. Mínimo ${MIN_PIXELS}px.`);
          return;
        }
        // Crear preview
        const preview = e.target?.result as string;
        addPhoto({
          id: Math.random().toString(),
          file,
          preview,
          format: '10x15',
          finish: 'brillo',
          quantity: 1,
        });
      };
      img.src = e.target?.result as string;
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const files = Array.from(e.dataTransfer.files);
    files.forEach(validateAndAddPhoto);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.currentTarget.files || []);
    files.forEach(validateAndAddPhoto);
  };

  return (
    <div className="w-full">
      <div
        className={`border-2 border-dashed rounded-lg p-12 text-center transition ${
          isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
        }`}
        onDragOver={(e) => {
          e.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={handleDrop}
      >
        <div className="text-4xl mb-4">📷</div>
        <h3 className="text-xl font-semibold mb-2">Arrastra tus fotos aquí</h3>
        <p className="text-gray-600 mb-4">o</p>
        <button
          onClick={() => fileInputRef.current?.click()}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition"
        >
          Seleccionar fotos
        </button>
        <p className="text-sm text-gray-500 mt-4">JPG, PNG, HEIC. Máx 25MB. Mín {MIN_PIXELS}px.</p>
        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept={VALID_FORMATS.join(',')}
          onChange={handleChange}
          className="hidden"
        />
      </div>
      {error && <p className="text-red-600 mt-4">{error}</p>}
    </div>
  );
}
