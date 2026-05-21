'use client';

import { FORMATS, FINISHES } from '@/lib/pricing';

interface Props {
  photoId: string;
  format: string;
  finish: string;
  quantity: number;
  onFormatChange: (format: string) => void;
  onFinishChange: (finish: string) => void;
  onQuantityChange: (quantity: number) => void;
}

export function FormatSelector({
  photoId,
  format,
  finish,
  quantity,
  onFormatChange,
  onFinishChange,
  onQuantityChange,
}: Props) {
  return (
    <div className="space-y-6 p-6 bg-gray-50 rounded-lg">
      <div>
        <label className="block text-sm font-medium mb-3">Formato</label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {Object.entries(FORMATS).map(([id, fmt]) => (
            <button
              key={id}
              onClick={() => onFormatChange(id)}
              className={`p-3 rounded-lg text-center transition ${
                format === id
                  ? 'bg-blue-600 text-white font-semibold'
                  : 'bg-white border border-gray-200 hover:border-blue-400'
              }`}
            >
              <div className="font-semibold text-sm">{fmt.name}</div>
              <div className="text-xs mt-1 opacity-70">{(fmt.basePrice / 100).toFixed(2)}€</div>
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-3">Acabado</label>
        <div className="grid grid-cols-2 gap-3">
          {Object.entries(FINISHES).map(([id, name]) => (
            <button
              key={id}
              onClick={() => onFinishChange(id)}
              className={`p-3 rounded-lg text-center transition ${
                finish === id
                  ? 'bg-blue-600 text-white font-semibold'
                  : 'bg-white border border-gray-200 hover:border-blue-400'
              }`}
            >
              {name}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-3">Cantidad</label>
        <div className="flex items-center gap-4">
          <button
            onClick={() => onQuantityChange(Math.max(1, quantity - 1))}
            className="bg-gray-200 hover:bg-gray-300 w-10 h-10 rounded-lg transition"
          >
            −
          </button>
          <input
            type="number"
            min="1"
            max="999"
            value={quantity}
            onChange={(e) => onQuantityChange(parseInt(e.target.value) || 1)}
            className="w-16 text-center border border-gray-300 rounded-lg py-2"
          />
          <button
            onClick={() => onQuantityChange(quantity + 1)}
            className="bg-gray-200 hover:bg-gray-300 w-10 h-10 rounded-lg transition"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
