import { test, expect } from "@playwright/test";

test("AOS reveals move-right headings on scroll and survives cached navigation", async ({
  page,
}) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("/home-two");
  const root = page.locator("[data-autovault-page]:visible");
  await expect(root).toHaveAttribute("data-aos-ready", "true");
  await expect(
    root.locator(".wow, [data-wow-delay], [data-wow-duration], [data-sal]"),
  ).toHaveCount(0);
  const title = root.locator('.move-right[data-aos="move-right"]').last();
  await expect(title).toHaveClass(/aos-init/);
  await expect(title).not.toHaveClass(/aos-animate/);
  await expect(title).toHaveCSS("opacity", "0");
  await title.scrollIntoViewIfNeeded();
  await expect(title).toHaveClass(/aos-animate/);
  await expect(title).toHaveCSS("clip-path", "inset(0px)");
  await expect(title).toHaveCSS("opacity", "1");
  await expect(title).toHaveCSS("animation-name", "none");
  await expect(title).toHaveCSS("transition-property", "clip-path, opacity");
  await page.evaluate(() => window.scrollTo(0, 0));
  await expect(title).toHaveClass(/aos-animate/);
  await root.locator('header a[href="/about"]').first().click();
  await expect(page).toHaveURL("/about");
  await expect(root).toHaveAttribute("data-aos-ready", "true");
  const subtitle = root
    .locator('.about-content-area .sub-title[data-aos="fade-up"]')
    .first();
  await expect(subtitle).toHaveAttribute("data-aos-delay", "100");
  await expect(subtitle).toHaveAttribute("data-aos-duration", "1000");
  await page.goBack();
  await expect(page).toHaveURL("/home-two");
  await expect(root).toHaveAttribute("data-aos-ready", "true");
  await root
    .locator('.move-right[data-aos="move-right"]')
    .last()
    .scrollIntoViewIfNeeded();
  await expect(
    root.locator('.move-right[data-aos="move-right"]').last(),
  ).toHaveClass(/aos-animate/);
  expect(errors).toEqual([]);
});

test("reduced motion keeps every AOS element readable without movement", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/home-two");
  const root = page.locator("[data-autovault-page]:visible");
  await expect(root).toHaveAttribute("data-aos-ready", "true");
  for (const selector of [
    '.move-right[data-aos="move-right"]',
    '[data-aos="fade-up"]',
  ]) {
    const element = root.locator(selector).last();
    await expect(element).toHaveCSS("opacity", "1");
    await expect(element).toHaveCSS("transform", "none");
    await expect(element).toHaveCSS("clip-path", "none");
    await expect(element).toHaveCSS("transition-duration", "0s");
  }
});
