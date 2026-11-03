import { test, expect } from "@playwright/test";
import fs from "node:fs";
import catalog from "../src/data/detail-catalog.json";

const insight =
  /Next\.js encountered (?:URL data outside of Suspense|runtime data)|instant-shell-url-data|blocking-prerender-runtime|InstantServer/;
const logFile = ".next/dev/logs/next-development.log";
const readLog = () =>
  fs.existsSync(logFile) ? fs.readFileSync(logFile, "utf8") : "";

test("details render and navigate in development without instant shell insights", async ({
  page,
}) => {
  const messages: string[] = [];
  page.on("console", (message) => {
    if (insight.test(message.text())) messages.push(message.text());
  });
  page.on("pageerror", (error) => messages.push(error.message));
  const start = readLog().length;
  const cases = [
    ["car", Object.values(catalog.car)[0]],
    ["car-two", Object.values(catalog.car)[0]],
    ["blog", Object.values(catalog.blog)[0]],
    ["dealer", Object.values(catalog.dealer)[0]],
    ["product", Object.values(catalog.product)[0]],
  ] as const;
  for (const [base, record] of cases) {
    await page.goto(`/${base}/${record.slug}`);
    const root = page.locator("[data-autovault-page]:visible");
    await expect(root.locator("header").first()).toBeVisible();
    await expect(root.locator("[data-detail-slug]")).toHaveAttribute(
      "data-detail-slug",
      record.slug,
    );
    await expect(page).toHaveTitle(record.title + " | AutoVault");
    // The dev-only instant insight validation completes asynchronously after render.
    await page.waitForTimeout(1000);
  }
  await page.goto("/portfolio");
  await page.locator(".project-wrapper2 h6 a").first().click();
  await expect(page).toHaveURL("/car/thunderbolt-car");
  await expect(
    page.locator("[data-autovault-page]:visible [data-detail-slug]"),
  ).toHaveAttribute("data-detail-slug", "thunderbolt-car");
  const related = page
    .locator(
      '[data-autovault-page]:visible .rts-portfolio-area a[href="/car/mercedes-benz-e-class"]',
    )
    .first();
  await related.click();
  await expect(page).toHaveURL("/car/mercedes-benz-e-class");
  await expect(
    page.locator("[data-autovault-page]:visible [data-detail-slug]"),
  ).toHaveAttribute("data-detail-slug", "mercedes-benz-e-class");
  await page.waitForTimeout(1000);
  expect(messages).toEqual([]);
  expect(readLog().slice(start)).not.toMatch(insight);
});
