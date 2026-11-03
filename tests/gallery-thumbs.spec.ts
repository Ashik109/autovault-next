import { test, expect, type Locator } from "@playwright/test";

type GalleryElement = HTMLElement & {
  swiper: {
    animating: boolean;
    realIndex: number;
    slideToLoop(index: number, speed: number): void;
  };
};

async function expectSynchronized(
  main: Locator,
  thumbs: Locator,
  expected?: number,
) {
  if (expected !== undefined)
    await expect
      .poll(() =>
        main.evaluate(
          (element) => (element as GalleryElement).swiper.realIndex,
        ),
      )
      .toBe(expected);
  await expect(thumbs.locator(".swiper-slide-thumb-active")).toHaveCount(1);
  await expect
    .poll(async () => {
      const mainIndex = await main.evaluate(
        (element) => (element as GalleryElement).swiper.realIndex,
      );
      const thumbIndex = await thumbs.evaluate((element) => {
        const active = element.querySelector<HTMLElement>(
          ".swiper-slide-thumb-active",
        );
        if (!active) return -1;
        return active.hasAttribute("data-swiper-slide-index")
          ? Number(active.dataset.swiperSlideIndex)
          : Array.from(element.querySelectorAll(".swiper-slide")).indexOf(
              active,
            );
      });
      return thumbIndex === mainIndex;
    })
    .toBe(true);
  await expect(main.locator(".swiper-slide-active")).toHaveCount(1);
  await expect
    .poll(() =>
      main.evaluate((element) => (element as GalleryElement).swiper.animating),
    )
    .toBe(false);
}

for (const [name, path, mainSelector, thumbSelector] of [
  ["vertical", "/car/thunderbolt-car", ".rts-heroSlider2", ".SlideThumb2"],
  ["horizontal", "/car-two/thunderbolt-car", ".rts-heroSlider", ".SlideThumb"],
]) {
  test(`${name} gallery keeps active main slide and thumbnail synchronized`, async ({
    page,
  }) => {
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    for (const width of [1440, 390]) {
      await page.setViewportSize({ width, height: 1000 });
      await page.goto(path);
      const root = page.locator("[data-autovault-page]:visible");
      const main = root.locator(mainSelector);
      const thumbs = root.locator(thumbSelector);
      await expect(main).toHaveClass(/swiper-initialized/);
      await expect(thumbs).toHaveClass(/swiper-initialized/);
      await expectSynchronized(main, thumbs, 0);

      await root.locator(".thumb-next").click();
      await expectSynchronized(main, thumbs, 1);
      await root.locator(".thumb-prev").click();
      await expectSynchronized(main, thumbs, 0);

      await thumbs.locator(".swiper-slide").nth(2).click();
      await expectSynchronized(main, thumbs, 2);
      // Move to the last image and test both loop boundaries with real arrows.
      const lastIndex = (await thumbs.locator(".swiper-slide").count()) - 1;
      await main.evaluate(
        (element, index) =>
          (element as GalleryElement).swiper.slideToLoop(index, 0),
        lastIndex,
      );
      await expectSynchronized(main, thumbs, lastIndex);
      await root.locator(".thumb-next").click();
      await expectSynchronized(main, thumbs, 0);
      await root.locator(".thumb-prev").click();
      await expectSynchronized(main, thumbs, lastIndex);
      await page.setViewportSize({
        width: width === 390 ? 1440 : 390,
        height: 1000,
      });
      await expectSynchronized(main, thumbs);
      await page.setViewportSize({ width: 1440, height: 1000 });
      await root.locator('header a[href="/about"]').first().click();
      await expect(page).toHaveURL("/about");
      await page.goBack();
      await expect(page).toHaveURL(path);
      await expect(main).toHaveClass(/swiper-initialized/);
      await thumbs.locator(".swiper-slide").nth(1).click();
      await expectSynchronized(main, thumbs, 1);
    }
    expect(errors).toEqual([]);
  });
}
