"use client";

import { useSyncExternalStore } from "react";
import defaults from "@/data/cart.json";

export type CartItem = {
  id: string;
  title: string;
  image: string;
  price: number;
  quantity: number;
};
const key = "autovault-cart-v1";
const initial: CartItem[] = defaults;
let items: CartItem[] | undefined;
const listeners = new Set<() => void>();
function snapshot() {
  if (!items) {
    try {
      const raw = localStorage.getItem(key);
      const data: unknown = raw ? JSON.parse(raw) : initial;
      items = Array.isArray(data)
        ? data.filter((item): item is CartItem =>
            Boolean(
              item &&
              typeof item.id === "string" &&
              typeof item.title === "string" &&
              typeof item.image === "string" &&
              Number.isFinite(item.price) &&
              item.price >= 0 &&
              Number.isInteger(item.quantity) &&
              item.quantity > 0,
            ),
          )
        : initial;
    } catch {
      items = initial;
    }
  }
  return items;
}
function subscribe(listener: () => void) {
  listeners.add(listener);
  const storage = (event: StorageEvent) => {
    if (event.key === key) {
      items = undefined;
      listeners.forEach((fn) => fn());
    }
  };
  window.addEventListener("storage", storage);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", storage);
  };
}
function update(next: CartItem[]) {
  items = next;
  try {
    localStorage.setItem(key, JSON.stringify(items));
  } catch {
    /* In-memory shopping remains available. */
  }
  listeners.forEach((listener) => listener());
}
export function useCart() {
  return useSyncExternalStore(subscribe, snapshot, () => initial);
}
export function setQuantity(id: string, quantity: number) {
  update(
    snapshot().map((item) =>
      item.id === id
        ? {
            ...item,
            quantity: Math.max(1, Math.min(99, Math.floor(quantity) || 1)),
          }
        : item,
    ),
  );
}
export function removeCartItem(id: string) {
  update(snapshot().filter((item) => item.id !== id));
}
export function addCartItem(item: CartItem) {
  const current = snapshot();
  const existing = current.find((entry) => entry.id === item.id);
  update(
    existing
      ? current.map((entry) =>
          entry.id === item.id
            ? {
                ...entry,
                quantity: Math.min(99, entry.quantity + item.quantity),
              }
            : entry,
        )
      : [...current, item],
  );
}
export const formatMoney = (value: number) =>
  value.toLocaleString("en-US", { style: "currency", currency: "USD" });
