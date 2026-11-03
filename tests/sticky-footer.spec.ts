import { test, expect } from "@playwright/test";

test("all footer designs switch between dim-fixed and dim-static like the HTML template", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  for (const route of [
    "/",
    "/home-two",
    "/home-three",
    "/home-four",
    "/home-five",
    "/home-six",
    "/shop-copy",
    "/about",
  ]) {
    await page.goto(route);
    const footer = page.locator("[data-autovault-page]:visible #rts-footer");
    await expect(footer, route).toHaveClass(/dim-fixed/);
    await expect(footer).toHaveCSS("position", "fixed");
    expect(
      await page.locator(".rts-wrapper").evaluate((wrapper) => {
        const footer = wrapper
          .closest("[data-autovault-page]")!
          .querySelector("#rts-footer")!;
        return Math.abs(
          parseFloat(getComputedStyle(wrapper).paddingBottom) -
            footer.getBoundingClientRect().height,
        );
      }),
      route,
    ).toBeLessThanOrEqual(1);

    await page.evaluate(() =>
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: "instant",
      }),
    );
    await expect(footer, route).toHaveClass(/dim-static/);
    await expect(footer).not.toHaveClass(/dim-fixed/);
    await expect(footer).toHaveCSS("bottom", "0px");
    await expect(footer.locator(".copyright-area")).toBeInViewport();
    if (route === "/") {
      await page
        .locator(".rts-cta-area img")
        .evaluateAll((images) =>
          Promise.all(
            (images as HTMLImageElement[]).map((image) =>
              image.decode().catch(() => {}),
            ),
          ),
        );
      await page.evaluate(
        () =>
          new Promise<void>((resolve) =>
            requestAnimationFrame(() => requestAnimationFrame(() => resolve())),
          ),
      );
      await page.screenshot({
        path: "artifacts/footer-next.png",
        animations: "disabled",
      });
    }

    await page.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
    await expect(footer, route).toHaveClass(/dim-fixed/);
    await expect(footer).not.toHaveClass(/dim-static/);
  }
});

test("footer resets on mobile and survives cached client navigation", async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto("/");
  const footer = page.locator("[data-autovault-page]:visible #rts-footer");
  const wrapper = page.locator("[data-autovault-page]:visible .rts-wrapper");
  await expect(footer).toHaveClass(/dim-fixed/);
  await page.setViewportSize({ width: 390, height: 844 });
  await expect(footer).not.toHaveClass(/dim-fixed|dim-static/);
  await expect(footer).toHaveCSS("position", "relative");
  await expect(wrapper).toHaveCSS("padding-bottom", "0px");
  await page.setViewportSize({ width: 1440, height: 1000 });
  await expect(footer).toHaveClass(/dim-fixed/);
  await page
    .locator('[data-autovault-page]:visible header a[href="/about"]')
    .first()
    .click();
  await expect(page).toHaveURL("/about");
  await expect(footer).toHaveClass(/dim-fixed/);
  await page
    .locator('[data-autovault-page]:visible header a[href="/"]')
    .first()
    .click();
  await expect(page).toHaveURL("/");
  await expect(footer).toHaveClass(/dim-fixed/);
  await page.evaluate(() =>
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "instant",
    }),
  );
  await expect(footer).toHaveClass(/dim-static/);
});
