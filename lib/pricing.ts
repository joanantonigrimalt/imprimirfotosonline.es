export interface Format {
  id: string;
  name: string;
  basePrice: number; // céntimos
  width: number;
  height: number;
}

export const FORMATS: Record<string, Format> = {
  '10x15': {
    id: '10x15',
    name: 'Foto 10x15 cm',
    basePrice: 9, // 0,09 €
    width: 10,
    height: 15,
  },
  cuadrada: {
    id: 'cuadrada',
    name: 'Foto cuadrada (Instagram)',
    basePrice: 15,
    width: 15,
    height: 15,
  },
  polaroid: {
    id: 'polaroid',
    name: 'Foto Polaroid',
    basePrice: 25,
    width: 8.8,
    height: 10.8,
  },
  '15x20': {
    id: '15x20',
    name: 'Foto 15x20 cm',
    basePrice: 35,
    width: 15,
    height: 20,
  },
  poster: {
    id: 'poster',
    name: 'Póster personalizado',
    basePrice: 99,
    width: 50,
    height: 70,
  },
};

export const FINISHES = {
  brillo: 'Papel fotográfico (brillo)',
  mate: 'Papel fotográfico (mate)',
};

export const SHIPPING_COST = 399; // 3,99 € (céntimos)
export const TAX_RATE = 0.21; // IVA 21%

export function calculatePrice(formatId: string, quantity: number) {
  const format = FORMATS[formatId];
  if (!format) throw new Error('Invalid format');

  const subtotal = format.basePrice * quantity;
  const tax = Math.round(subtotal * TAX_RATE);
  const shipping = SHIPPING_COST;
  const total = subtotal + tax + shipping;

  return { subtotal, tax, shipping, total };
}
