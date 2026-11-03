import { test, expect } from "@playwright/test";
import catalog from "../src/data/detail-catalog.json";
import defaults from "../src/data/detail-defaults.json";
import { detailPath, type DetailKind } from "../src/lib/detail-paths";

const families: {
  kind: DetailKind;
  base: string;
  legacy: string;
  list: string;
  card: string;
  heading: string;
  image: string;
}[] = [
  {
    kind: "car",
    base: "car",
    legacy: "portfolio-details",
    list: "/portfolio",
    card: ".project-wrapper2",
    heading: "h1",
    image: ".rts-portfolio-area .swiper-slide img",
  },
  {
    kind: "blog",
    base: "blog",
    legacy: "blog-details",
    list: "/blog",
    card: ".blog-wrapper",
    heading: "h1",
    image: ".rts-portfolio-area .image.mb--40 img",
  },
  {
    kind: "dealer",
    base: "dealer",
    legacy: "car-dealer-details",
    list: "/car-dealer",
    card: ".dealer-wrapper",
    heading: "h1",
    image: ".rts-breadcrumb-area .brand-image-area img",
  },
  {
    kind: "product",
    base: "product",
    legacy: "shop-details",
    list: "/shop",
    card: ".project-wrapper4",
    heading: ".ms-single-product_title",
    image: ".portfolio-slider-area2 .swiper-slide img",
  },
];

test("every catalog slug renders its record and unknown slugs return HTTP 404", async ({
  request,
}) => {
  for (const { kind, base, legacy: legacyBase } of [
    ...families,
    { ...families[0], base: "car-two", legacy: "portfolio-details-2" },
  ]) {
    for (const record of Object.values(catalog[kind])) {
      const url = `/${base}/${record.slug}`;
      const response = await request.get(url);
      expect(response.status(), url).toBe(200);
      const html = await response.text();
      expect(html, url).toContain(`data-detail-slug="${record.slug}"`);
      expect(html, url).toContain(`data-detail-kind="${kind}"`);
      const alias = await request.get(`/${legacyBase}/${record.slug}`, {
        maxRedirects: 0,
      });
      expect(alias.status()).toBe(308);
      expect(alias.headers().location).toBe(url);
    }
    for (const slug of ["this-item-does-not-exist", "constructor", "__proto__"])
      expect(
        (await request.get(`/${base}/${slug}`)).status(),
        `${base}/${slug}`,
      ).toBe(404);
    const legacy = await request.get(`/${legacyBase}`, { maxRedirects: 0 });
    expect(legacy.status()).toBe(308);
    expect(legacy.headers().location).toBe(`/${base}/${defaults[kind]}`);
  }
});

test("different detail records have their own headings, images, prices and canonical metadata", async ({
  page,
}) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  for (const { kind, base, heading, image } of families) {
    for (const record of Object.values(catalog[kind]).slice(0, 2)) {
      const url = `/${base}/${record.slug}`;
      await page.goto(url);
      const root = page.locator("[data-autovault-page]:visible");
      await expect(root.locator("[data-detail-slug]")).toHaveAttribute(
        "data-detail-slug",
        record.slug,
      );
      await expect(root.locator(heading).first()).toHaveText(record.title);
      await expect(root.locator(image).first()).toHaveAttribute(
        "src",
        record.image,
      );
      await expect(page).toHaveTitle(`${record.title} | AutoVault`);
      await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
        "href",
        new RegExp(`${url}$`),
      );
      if (kind === "car")
        await expect(root.locator(".rts-portfolio-area")).toContainText(
          record.priceLabel,
        );
      if (kind === "product")
        await expect(
          root.locator(".woocommerce-Price-amount").first(),
        ).toContainText(record.price.toLocaleString("en-US"));
      await page.reload();
      await expect(root.locator("[data-detail-slug]")).toHaveAttribute(
        "data-detail-slug",
        record.slug,
      );
    }
  }
  expect(errors).toEqual([]);
});

test("listing card images, titles and buttons point to the matching record slug", async ({
  page,
}) => {
  for (const { kind, base, list, card } of families) {
    await page.goto(list);
    await expect(page.locator('a[href*="-details/"]')).toHaveCount(0);
    const first = page.locator(card).first();
    const titleLink = first
      .locator(`h1 a, h2 a, h3 a, h4 a, h5 a, h6 a`)
      .first();
    const title = (await titleLink.textContent())!.trim();
    const record = Object.values(catalog[kind]).find(
      (record) => record.title === title,
    )!;
    expect(record, title).toBeTruthy();
    const url = `/${base}/${record.slug}`;
    const links = await first
      .locator(`a[href^="/${base}/"]`)
      .evaluateAll((links) => links.map((link) => link.getAttribute("href")));
    expect(links.length).toBeGreaterThan(0);
    expect(links.every((href) => href === url)).toBe(true);
    await titleLink.click();
    await expect(page).toHaveURL(url);
    await expect(
      page.locator("[data-autovault-page]:visible [data-detail-slug]"),
    ).toHaveAttribute("data-detail-slug", record.slug);
  }
});

test("details breadcrumbs and related cards use clean record links", async ({
  page,
  request,
}) => {
  for (const family of families.filter(({ kind }) => kind !== "product")) {
    const record = Object.values(catalog[family.kind])[0];
    await page.goto(`/${family.base}/${record.slug}`);
    const root = page.locator("[data-autovault-page]:visible");
    await expect(root.locator('a[href*="-details/"]')).toHaveCount(0);
    if (family.kind === "car" || family.kind === "dealer") {
      await expect(
        root.locator(".nav-bread-crumb a.current").first(),
      ).toHaveAttribute(
        "href",
        family.kind === "car" ? "/portfolio" : "/car-dealer",
      );
    }
    const related = await root
      .locator(
        '.rts-portfolio-area a[href^="/car/"], .rts-portfolio-area a[href^="/blog/"]',
      )
      .evaluateAll((links) => links.map((link) => link.getAttribute("href")!));
    const unique = [...new Set(related)];
    expect(unique.length).toBeGreaterThanOrEqual(2);
    for (const url of unique)
      expect((await request.get(url)).status(), url).toBe(200);
  }
});

test("saved-car and cart links open their matching dynamic details", async ({
  page,
}) => {
  await page.goto("/portfolio");
  await page.locator("a.wishlist").first().click();
  await page.goto("/wishlist");
  await expect(page.locator(".saved-car a")).toHaveAttribute(
    "href",
    detailPath("car", "thunderbolt-car"),
  );
  await page.locator(".saved-car a").click();
  await expect(page).toHaveURL(detailPath("car", "thunderbolt-car"));
  await page.goto("/cart");
  await page.locator(".cart_item .product-name a").first().click();
  await expect(page).toHaveURL(detailPath("product", "run-max-88"));
  await expect(page.locator(".ms-single-product_title")).toHaveText(
    "Run Max 88",
  );
});
