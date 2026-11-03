import { test, expect } from "@playwright/test";
import routes from "../src/data/routes.json";

test("all converted routes render without JS, asset, or internal-link errors", async ({
  page,
  request,
}) => {
  const errors: string[] = [];
  const missing: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  page.on("console", (message) => {
    if (
      message.type() === "error" &&
      /hydration|hydrating|invalid|cannot|uncaught/i.test(message.text())
    )
      errors.push(message.text());
  });
  page.on("response", (response) => {
    if (
      response.url().startsWith("http://127.0.0.1:3100/") &&
      response.status() >= 400
    )
      missing.push(`${response.status()} ${response.url()}`);
  });
  const localLinks = new Set<string>();
  for (const route of [
    ...routes.map((route) => route.route),
    "/home-one",
    "/wishlist",
  ]) {
    const response = await page.goto(route);
    expect(response?.status(), route).toBe(200);
    await expect(page.locator("body")).toHaveClass(/loaded/);
    await expect(page.locator("header").first()).toBeVisible();
    await expect(page.locator("body")).toContainText("Auto");
    await page.waitForTimeout(150);
    const links = await page
      .locator("a[href]")
      .evaluateAll((links) =>
        links
          .map((link) => link.getAttribute("href")!)
          .filter(
            (href) =>
              href.startsWith("/") &&
              !href.startsWith("//") &&
              !href.startsWith("/assets/"),
          ),
      );
    links.forEach((href) => localLinks.add(href));
    expect(await page.locator('a[href$=".html"]').count()).toBe(0);
    const brokenImages = await page
      .locator("img")
      .evaluateAll((images) =>
        (images as HTMLImageElement[])
          .filter((image) => image.complete && image.naturalWidth === 0)
          .map((image) => image.src),
      );
    expect(brokenImages, route).toEqual([]);
  }
  for (const href of localLinks)
    expect((await request.get(href)).status(), href).toBe(200);
  expect(missing).toEqual([]);
  expect(errors).toEqual([]);
});

test("Next navigation, tabs, accordion and slider survive revisiting pages", async ({
  page,
}) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("/");
  await expect(page.locator(".category-slider")).toHaveClass(
    /swiper-initialized/,
  );
  await page.locator("#used-tab").click();
  await expect(page.locator("#used-tab")).toHaveAttribute(
    "aria-selected",
    "true",
  );
  await expect(page.locator("#used")).toHaveClass(/active/);
  await page.evaluate(() => {
    (window as Window & { migrationMarker?: boolean }).migrationMarker = true;
  });
  await page
    .locator('[data-autovault-page]:visible header a[href="/about"]')
    .first()
    .click();
  await expect(page).toHaveURL("/about");
  expect(
    await page.evaluate(
      () => (window as Window & { migrationMarker?: boolean }).migrationMarker,
    ),
  ).toBe(true);
  await page
    .locator('[data-autovault-page]:visible header a[href="/"]')
    .first()
    .click();
  await expect(page).toHaveURL("/");
  await expect(page.locator(".category-slider")).toHaveClass(
    /swiper-initialized/,
  );
  await page.goto("/faq");
  const trigger = page.locator(".accordion-button").nth(1);
  await trigger.click();
  await expect(trigger).toHaveAttribute("aria-expanded", "true");
  const id = await trigger.getAttribute("aria-controls");
  await expect(page.locator(`[id="${id}"]`)).toHaveClass(/show/);
  expect(errors).toEqual([]);
});

test("calculator handles interest, zero-interest loans and invalid down payments", async ({
  page,
}) => {
  await page.goto("/calculator");
  await page.getByLabel("Vehicle Price ($)").fill("30000");
  await page.getByLabel("Down Payment ($)").fill("5000");
  await page.getByLabel("Annual Interest Rate (%)").fill("6");
  await page.getByRole("button", { name: "Calculate", exact: true }).click();
  await expect(page.locator(".loan-result")).toContainText("$483.32");
  await page.getByLabel("Annual Interest Rate (%)").fill("0");
  await page.getByRole("button", { name: "Calculate", exact: true }).click();
  await expect(page.locator(".loan-result")).toContainText("$416.67");
  await page.getByLabel("Down Payment ($)").fill("35000");
  await page.getByRole("button", { name: "Calculate", exact: true }).click();
  await expect(
    page.locator(".rts-calculator-area").getByRole("alert"),
  ).toContainText("cannot exceed");
});

test("cart changes totals, persists quantities and carries totals into checkout", async ({
  page,
}) => {
  await page.goto("/cart");
  const total = page.getByTestId("cart-total");
  await expect(total).toHaveText("$1,557.00");
  await page.getByRole("button", { name: "Increase quantity" }).first().click();
  await expect(total).toHaveText("$1,677.00");
  await page.reload();
  await expect(
    page.getByLabel("Quantity", { exact: true }).first(),
  ).toHaveValue("4");
  await page
    .getByRole("button", { name: "Remove Run Max 88", exact: true })
    .click();
  await expect(total).toHaveText("$1,197.00");
  await page.getByRole("link", { name: "Proceed to checkout" }).click();
  await expect(
    page.locator(".woocommerce-checkout-review-order-table tfoot"),
  ).toContainText("$1,197.00");
});

test("saving cars and opening gallery do not navigate to legacy pages", async ({
  page,
}) => {
  await page.goto("/portfolio");
  await page.locator("a.wishlist").first().click();
  await expect(page).toHaveURL("/portfolio");
  await expect(page.locator("a.wishlist").first()).toHaveClass(/is-saved/);
  await page.locator("a.gallery-image").first().click();
  await expect(page.locator("dialog[open] img")).toBeVisible();
  await page.getByRole("button", { name: "Close media" }).click();
  await page.goto("/wishlist");
  await expect(page.locator(".saved-car")).toHaveCount(1);
  await page.getByRole("button", { name: "Remove saved car" }).click();
  await expect(page.getByText("You have no saved cars yet.")).toBeVisible();
});

test("product details add the selected quantity and price to the cart", async ({
  page,
}) => {
  await page.goto("/shop-details");
  await page.getByLabel("Quantity", { exact: true }).fill("3");
  await page.getByRole("link", { name: "Add to cart", exact: true }).click();
  await expect(page).toHaveURL("/cart");
  const item = page
    .locator("[data-autovault-page]:visible tr.cart_item")
    .filter({ hasText: "Power Steering Pump" });
  await expect(item.getByLabel("Quantity", { exact: true })).toHaveValue("3");
  await expect(item.locator(".product-subtotal")).toHaveText("$1,797.00");
});

test("mobile menu, search and price range remain usable", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await page.locator("#menu-btn").click();
  await expect(
    page.locator("[data-autovault-page]:visible #side-bar"),
  ).toHaveClass(/show/);
  await page.locator(".mobile-menu-main .has-droupdown > a").first().click();
  await expect(page.locator(".mobile-menu-main .submenu").first()).toHaveClass(
    /mm-show/,
  );
  await page.locator('.mobile-menu-main a[href="/about"]').click();
  await expect(page).toHaveURL("/about");
  await expect(
    page.locator("[data-autovault-page]:visible #side-bar"),
  ).not.toHaveClass(/show/);
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto("/home-four");
  await page.locator("header .search").first().click();
  await page.locator(".search-input-area input").fill("Mercedes");
  await page.locator(".search-input-area input").press("Enter");
  await expect(page).toHaveURL(/\/portfolio\?q=Mercedes/);
  await expect(page.locator(".inventory-search-result")).toContainText(
    "Mercedes",
  );
  await page.goto("/shop-2");
  if (await page.locator("#minRange").count()) {
    await page.locator("#minRange").focus();
    await page.locator("#minRange").press("ArrowRight");
    await expect(page.locator("#minPrice")).toHaveText("$1445");
  }
});

test("contact validation does not claim delivery through a missing PHP endpoint", async ({
  page,
}) => {
  await page.goto("/contact");
  const form = page.locator("#contact-form");
  await form.locator('input[name="name"]').fill("Migration test");
  await form.locator('input[name="email"]').fill("test@example.com");
  for (const input of await form
    .locator('input[required]:not([name="name"]):not([name="email"])')
    .all())
    await input.fill("1234567890");
  await form.locator("textarea").fill("Please tell me about this vehicle.");
  await form.locator('button[type="submit"]').click();
  await expect(form.getByRole("status")).toContainText("not connected");
  await expect(page).toHaveURL("/contact");
});
