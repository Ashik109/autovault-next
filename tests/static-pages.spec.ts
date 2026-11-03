import { expect, test } from "@playwright/test";

test("landing and documentation are served with their local assets", async ({
  page,
  request,
}) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));

  for (const path of ["/landing/index.html", "/documentation/index.html"]) {
    const response = await page.goto(path);
    expect(response?.status(), path).toBe(200);
    expect(response?.headers()["content-type"]).toContain("text/html");
    const assets = await page.evaluate(() => {
      return [
        ...new Set(
          Array.from(
            document.querySelectorAll<
              HTMLImageElement | HTMLScriptElement | HTMLLinkElement
            >("img[src], script[src], link[href]"),
          )
            .map((element) => {
              const url = new URL(
                element.getAttribute("src") || element.getAttribute("href")!,
                location.href,
              );
              return url.origin === location.origin ? url.href : null;
            })
            .filter((url): url is string => Boolean(url)),
        ),
      ];
    });
    for (const asset of assets)
      expect((await request.get(asset)).status(), asset).toBe(200);
  }

  await page.goto("/landing/index.html");
  await expect(page).toHaveTitle(/Next.js Template/);
  await page.getByRole("link", { name: "Buy Now" }).click();
  await expect(page).toHaveURL("/landing/index.html");
  await expect(
    page.getByRole("link", { name: "Documentation", exact: true }),
  ).toHaveAttribute("href", "../documentation/index.html");
  const popupPromise = page.waitForEvent("popup");
  await page.getByRole("link", { name: "Documentation", exact: true }).click();
  const documentation = await popupPromise;
  await documentation.waitForLoadState();
  await expect(documentation).toHaveURL(/\/documentation\/index\.html$/);
  await expect(documentation.locator(".brand img")).toHaveJSProperty(
    "complete",
    true,
  );
  expect(errors).toEqual([]);
});
