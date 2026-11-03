import { expect, test } from "@playwright/test";

test("wheel scrolling eases and back-to-top uses the same controller", async ({
  page,
}) => {
  await page.goto("/");
  await expect(page.locator("html")).toHaveClass(/lenis/);
  await expect(page.locator("[data-autovault-page]:visible")).toHaveAttribute(
    "data-jarallax-ready",
    "true",
  );
  await page.mouse.move(700, 450);
  await page.mouse.wheel(0, 900);
  await expect
    .poll(() => page.evaluate(() => window.scrollY))
    .toBeGreaterThan(50);
  const during = await page.evaluate(() => window.scrollY);
  expect(during).toBeLessThan(900);
  await expect
    .poll(() => page.evaluate(() => window.scrollY))
    .toBeGreaterThan(880);
  await page.locator(".progress-wrap:visible").click();
  await expect.poll(() => page.evaluate(() => window.scrollY)).toBeLessThan(2);
});

test("one-page anchors respect the sticky header and retain browser navigation", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto("/home-five");
  await expect(page.locator("html")).toHaveClass(/lenis/);
  const root = page.locator("[data-autovault-page]:visible");
  await root.locator('header a[href="#about"]:visible').first().click();
  await expect(page).toHaveURL(/\/home-five#about$/);
  await expect
    .poll(async () => {
      return root.locator("#about").evaluate((node) => {
        const header = node
          .closest("[data-autovault-page]")
          ?.querySelector<HTMLElement>(".header--sticky");
        return Math.abs(
          node.getBoundingClientRect().top - (header?.offsetHeight || 0) - 12,
        );
      });
    })
    .toBeLessThan(3);
  await root.locator('#about a[href="/about"]').first().click();
  await expect(page).toHaveURL("/about");
  await page.goBack();
  await expect(page).toHaveURL(/\/home-five#about$/);
  await expect(page.locator("html")).toHaveClass(/lenis/);
});

test("reduced motion switches to native scrolling and back without duplicate instances", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await expect(page.locator("[data-autovault-page]:visible")).toHaveAttribute(
    "data-nice-select-ready",
    "true",
  );
  await expect(page.locator("html")).not.toHaveClass(/lenis/);
  await page.evaluate(() => window.scrollTo(0, 900));
  await page.locator(".progress-wrap:visible").click();
  await expect.poll(() => page.evaluate(() => window.scrollY)).toBe(0);
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await expect(page.locator("html")).toHaveClass(/lenis/);
  await page.emulateMedia({ reducedMotion: "reduce" });
  await expect(page.locator("html")).not.toHaveClass(/lenis/);
});
