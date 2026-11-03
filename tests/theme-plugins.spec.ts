import { test, expect } from "@playwright/test";

test("Nice Select preserves mouse, keyboard and native form values", async ({
  page,
}) => {
  await page.goto("/");
  const root = page.locator("[data-autovault-page]:visible");
  await expect(root).toHaveAttribute("data-nice-select-ready", "true");
  const select = root.locator(".select-area-down select").first();
  const dropdown = root.locator(".select-area-down .nice-select").first();
  await expect(dropdown).toBeVisible();
  await expect(select).toBeHidden();
  await dropdown.click();
  await expect(dropdown).toHaveAttribute("aria-expanded", "true");
  await dropdown.getByRole("option", { name: "Mazda", exact: true }).click();
  await expect(dropdown.locator(".current")).toHaveText("Mazda");
  expect(
    await select.evaluate(
      (select: HTMLSelectElement) => select.selectedOptions[0].text,
    ),
  ).toBe("Mazda");
  await dropdown.focus();
  await dropdown.press("ArrowDown");
  await dropdown.press("ArrowDown");
  await dropdown.press("Enter");
  await expect(dropdown.locator(".current")).toHaveText("Citroen");
  await root.locator('.select-area-down button[type="submit"]').first().click();
  await expect(page).toHaveURL(/\/portfolio\?q=Citroen/);
});

test("Nice Select updates calculator data and cleans up across cached navigation", async ({
  page,
}) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("/calculator");
  const root = page.locator("[data-autovault-page]:visible");
  await expect(root).toHaveAttribute("data-nice-select-ready", "true");
  const dropdown = root.getByRole("combobox", { name: "Loan Term (months)" });
  await dropdown.click();
  await dropdown
    .getByRole("option", { name: "24 months", exact: true })
    .click();
  await page.getByLabel("Vehicle Price ($)").fill("30000");
  await page.getByLabel("Down Payment ($)").fill("5000");
  await page.getByLabel("Annual Interest Rate (%)").fill("0");
  await page.getByRole("button", { name: "Calculate", exact: true }).click();
  await expect(page.locator(".loan-result")).toContainText("$1,041.67");
  await root.locator('header a[href="/about"]').first().click();
  await expect(page).toHaveURL("/about");
  await root.locator('header a[href="/"]').first().click();
  await expect(page).toHaveURL("/");
  await expect(root).toHaveAttribute("data-nice-select-ready", "true");
  expect(await root.locator(".nice-select").count()).toBe(
    await root.locator("select").count(),
  );
  await root.locator(".select-area-down .nice-select").first().click();
  await root.locator(".select-area-down .nice-select").first().press("Tab");
  await expect(
    root.locator(".select-area-down .nice-select").first(),
  ).not.toHaveClass(/open/);
  expect(errors).toEqual([]);
});

test("Jarallax moves desktop backgrounds and resets for mobile and reduced motion", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto("/");
  const root = page.locator("[data-autovault-page]:visible");
  await expect(root).toHaveAttribute("data-jarallax-ready", "true");
  const container = root.locator(
    '.rts-banner-area.jarallax [id^="jarallax-container-"]',
  );
  await expect(container).toHaveCount(1);
  const image = container.locator(":scope > *").first();
  const initial = await image.evaluate(
    (element) => getComputedStyle(element).transform,
  );
  await page.evaluate(() => window.scrollTo({ top: 300, behavior: "instant" }));
  await expect
    .poll(() =>
      image.evaluate((element) => getComputedStyle(element).transform),
    )
    .not.toBe(initial);
  await page.setViewportSize({ width: 390, height: 844 });
  await expect(container).toHaveCount(0);
  await expect(
    root.locator(".select-area-down .nice-select").first(),
  ).toBeVisible();
  await page.setViewportSize({ width: 1440, height: 1000 });
  await expect(container).toHaveCount(1);
  await page.emulateMedia({ reducedMotion: "reduce" });
  await expect(container).toHaveCount(0);
  await page.emulateMedia({ reducedMotion: "no-preference" });
  await expect(container).toHaveCount(1);
  await root.locator('header a[href="/about"]').first().click();
  await expect(page).toHaveURL("/about");
  await expect(
    root.locator('.rts-breadcrumb-area.jarallax [id^="jarallax-container-"]'),
  ).toHaveCount(1);
  await root.locator('header a[href="/"]').first().click();
  await expect(page).toHaveURL("/");
  await expect(container).toHaveCount(1);
});
