export type DetailKind = "car" | "blog" | "dealer" | "product";
export const detailBases: Record<DetailKind, string> = {
  car: "car",
  blog: "blog",
  dealer: "dealer",
  product: "product",
};
export function slugFromTitle(title: string) {
  return title
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
export function detailPath(
  kind: DetailKind,
  slug: string,
  alternateCarLayout = false,
) {
  return `/${kind === "car" && alternateCarLayout ? "car-two" : detailBases[kind]}/${slug}`;
}
