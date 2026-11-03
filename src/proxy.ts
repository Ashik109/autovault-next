import { NextResponse, type NextRequest } from "next/server";
import { getDetail } from "@/data/details";
import type { DetailKind } from "@/lib/detail-paths";
import { detailPath } from "@/lib/detail-paths";

const families: Record<string, DetailKind> = {
  car: "car",
  "car-two": "car",
  blog: "blog",
  dealer: "dealer",
  product: "product",
  "portfolio-details": "car",
  "portfolio-details-2": "car",
  "blog-details": "blog",
  "car-dealer-details": "dealer",
  "shop-details": "product",
};

export function proxy(request: NextRequest) {
  const [, family, encodedSlug, ...rest] = request.nextUrl.pathname.split("/");
  if (!encodedSlug || !Object.hasOwn(families, family))
    return NextResponse.next();
  let slug: string;
  try {
    slug = decodeURIComponent(encodedSlug);
  } catch {
    slug = "";
  }
  if (!rest.filter(Boolean).length && getDetail(families[family], slug)) {
    // Redirect compatibility URLs before a Suspense boundary can start streaming.
    if (
      [
        "portfolio-details",
        "portfolio-details-2",
        "blog-details",
        "car-dealer-details",
        "shop-details",
      ].includes(family)
    ) {
      return NextResponse.redirect(
        new URL(
          detailPath(families[family], slug, family === "portfolio-details-2"),
          request.url,
        ),
        308,
      );
    }
    return NextResponse.next();
  }
  // Reject missing records before streaming begins, retaining a real HTTP 404
  // while Cache Components remains enabled. The page also calls notFound().
  const target = request.nextUrl.clone();
  target.pathname = "/404";
  return NextResponse.rewrite(target, { status: 404 });
}

export const config = {
  matcher: [
    "/car/:path*",
    "/car-two/:path*",
    "/blog/:path*",
    "/dealer/:path*",
    "/product/:path*",
    "/portfolio-details/:path*",
    "/portfolio-details-2/:path*",
    "/blog-details/:path*",
    "/car-dealer-details/:path*",
    "/shop-details/:path*",
  ],
};
