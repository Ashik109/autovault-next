"use client";
import { useSyncExternalStore } from "react";
export type SavedCar = { id: string; title: string; image: string };
const empty: SavedCar[] = [];
const key = "autovault-saved-cars-v1";
let saved: SavedCar[] | undefined;
const listeners = new Set<() => void>();
function get() {
  if (!saved) {
    try {
      const data = JSON.parse(localStorage.getItem(key) || "[]");
      saved = Array.isArray(data)
        ? data.filter(
            (item) =>
              item &&
              typeof item.id === "string" &&
              typeof item.title === "string" &&
              typeof item.image === "string",
          )
        : [];
    } catch {
      saved = [];
    }
  }
  return saved;
}
function subscribe(listener: () => void) {
  listeners.add(listener);
  const storage = (event: StorageEvent) => {
    if (event.key === key) {
      saved = undefined;
      listeners.forEach((fn) => fn());
    }
  };
  window.addEventListener("storage", storage);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", storage);
  };
}
export function useSavedCars() {
  return useSyncExternalStore(subscribe, get, () => empty);
}
export function toggleSavedCar(car: SavedCar) {
  const current = get();
  const exists = current.some((item) => item.id === car.id);
  saved = exists
    ? current.filter((item) => item.id !== car.id)
    : [...current, car];
  try {
    localStorage.setItem(key, JSON.stringify(saved));
  } catch {
    /* Keep the current in-memory selection. */
  }
  listeners.forEach((listener) => listener());
  return !exists;
}
