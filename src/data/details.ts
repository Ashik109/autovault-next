import catalog from "./detail-catalog.json";
import defaults from "./detail-defaults.json";
import type { DetailKind } from "@/lib/detail-paths";

export type DetailRecord = {
  kind: DetailKind;
  slug: string;
  title: string;
  image: string;
  gallery: string[];
  price: number;
  priceLabel: string;
  description: string;
  make: string;
  mileage: string;
  fuel: string;
  transmission: string;
  seats: string;
  location: string;
  date: string;
  author: string;
};
export const details = catalog as Record<
  DetailKind,
  Record<string, DetailRecord>
>;
export const defaultSlugs = defaults as Record<DetailKind, string>;
export function getDetails(kind: DetailKind) {
  return Object.values(details[kind]);
}
export function getDetail(
  kind: DetailKind,
  slug: string,
): DetailRecord | undefined {
  return Object.hasOwn(details[kind], slug) ? details[kind][slug] : undefined;
}
