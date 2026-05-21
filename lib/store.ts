'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface CartItem {
  id: string;
  file: File;
  preview: string;
  format: string;
  finish: string;
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  addPhoto: (item: CartItem) => void;
  removePhoto: (id: string) => void;
  updatePhoto: (id: string, updates: Partial<CartItem>) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set) => ({
      items: [],
      addPhoto: (item) =>
        set((state) => ({
          items: [...state.items, item],
        })),
      removePhoto: (id) =>
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        })),
      updatePhoto: (id, updates) =>
        set((state) => ({
          items: state.items.map((item) =>
            item.id === id ? { ...item, ...updates } : item
          ),
        })),
      clearCart: () => set({ items: [] }),
    }),
    {
      name: 'cart-storage',
    }
  )
);
