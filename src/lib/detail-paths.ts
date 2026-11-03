export type DetailKind = "car" | "blog" | "dealer" | "product";
export const detailBases: Record<DetailKind, string> = {
  car: "portfolio-details",
  blog: "blog-details",
  dealer: "car-dealer-details",
  product: "shop-details",
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
  return `/${kind === "car" && alternateCarLayout ? "portfolio-details-2" : detailBases[kind]}/${slug}`;
}
