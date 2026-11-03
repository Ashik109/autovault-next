"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Swiper from "swiper/bundle";
import { sliderOptions } from "@/lib/sliders";
import { addCartItem } from "@/lib/cart";
import { toggleSavedCar } from "@/lib/saved-cars";

export default function PageEffects({ bodyClass }: { bodyClass: string }) {
  return (
    <Suspense fallback={null}>
      <Effects bodyClass={bodyClass} />
    </Suspense>
  );
}

function Effects({ bodyClass }: { bodyClass: string }) {
  const pathname = usePathname();
  const queryString = useSearchParams().toString();
  const router = useRouter();
  const [popup, setPopup] = useState<{
    type: "image" | "video";
    src: string;
  } | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (popup) dialog.current?.showModal();
  }, [popup]);

  useEffect(() => {
    const pageElement = dialog.current?.closest<HTMLElement>(
      "[data-autovault-page]",
    );
    if (!pageElement) return;
    const root: HTMLElement = pageElement;
    document.body.className = `${bodyClass} loaded`;
    let cancelled = false;
    const instances: Swiper[] = [];
    const bySelector = new Map<string, Swiper>();
    const observers: IntersectionObserver[] = [];
    const animationFrames = new Set<number>();
    const disposers: (() => void)[] = [];
    const cleanupBootstrap: (() => void)[] = [];
    void import("bootstrap").then(({ Collapse, Tab }) => {
      if (cancelled) return;
      root.querySelectorAll<HTMLElement>(".collapse").forEach((node) => {
        const instance = Collapse.getOrCreateInstance(node, { toggle: false });
        cleanupBootstrap.push(() => instance.dispose());
      });
      document
        .querySelectorAll<HTMLElement>(
          '[data-bs-toggle="tab"], [data-bs-toggle="pill"]',
        )
        .forEach((node) => {
          const instance = Tab.getOrCreateInstance(node);
          cleanupBootstrap.push(() => instance.dispose());
        });
    });

    for (const [selector, sourceOptions] of Object.entries(sliderOptions)) {
      root.querySelectorAll<HTMLElement>(selector).forEach((element) => {
        const options = structuredClone(sourceOptions);
        // Bind controls to their own section, including controls outside the slider.
        const scope =
          element.closest('section, [class*="rts-"][class*="-area"]') ||
          element.parentElement ||
          element;
        if (
          options.pagination &&
          typeof options.pagination !== "boolean" &&
          typeof options.pagination.el === "string"
        )
          options.pagination.el = scope.querySelector<HTMLElement>(
            options.pagination.el,
          );
        if (options.navigation && typeof options.navigation !== "boolean") {
          if (typeof options.navigation.nextEl === "string")
            options.navigation.nextEl = scope.querySelector<HTMLElement>(
              options.navigation.nextEl,
            );
          if (typeof options.navigation.prevEl === "string")
            options.navigation.prevEl = scope.querySelector<HTMLElement>(
              options.navigation.prevEl,
            );
        }
        const count = element.querySelectorAll(".swiper-slide").length;
        // Loop needs enough slides for the largest responsive slide count.
        const maximum = Math.max(
          Number(options.slidesPerView) || 1,
          ...Object.values(options.breakpoints || {}).map(
            (point) => Number(point.slidesPerView) || 1,
          ),
        );
        options.loop = Boolean(options.loop && count >= Math.ceil(maximum) * 2);
        if (selector === ".SlideThumb2") {
          options.direction = "horizontal";
          options.slidesPerView = 4;
          options.breakpoints = {
            992: { direction: "vertical", slidesPerView: 6 },
          };
        }
        if (selector === ".rts-heroSlider" || selector === ".rts-heroSlider2") {
          const thumb = bySelector.get(
            selector.endsWith("2") ? ".SlideThumb2" : ".SlideThumb",
          );
          if (thumb) options.thumbs = { swiper: thumb };
        }
        const instance = new Swiper(element, options);
        instances.push(instance);
        bySelector.set(selector, instance);
      });
    }
    const testimonial = bySelector.get(".rts-testimonialSlider3");
    const testimonialImage = bySelector.get(".rts-imageSlider");
    if (testimonial && testimonialImage) {
      testimonial.controller.control = testimonialImage;
      testimonialImage.controller.control = testimonial;
    }
    const largeImage = bySelector.get(".rts-imgSliderBig");
    const smallImage = bySelector.get(".rts-imgSliderSmall");
    if (largeImage && smallImage) {
      largeImage.controller.control = smallImage;
      smallImage.controller.control = largeImage;
    }
    const linkThumbs = (mainSelector: string, thumbSelector: string) => {
      const main = bySelector.get(mainSelector),
        thumb = bySelector.get(thumbSelector);
      if (main && thumb) {
        main.params.thumbs = { swiper: thumb };
        main.thumbs.init();
        main.thumbs.update();
      }
    };
    linkThumbs(".rts-heroSlider", ".SlideThumb");
    linkThumbs(".rts-heroSlider2", ".SlideThumb2");

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const reveal = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ target, isIntersecting }) => {
          if (!isIntersecting) return;
          const element = target as HTMLElement;
          element.style.visibility = "visible";
          if (!reducedMotion) {
            element.classList.add("animated");
            element.style.animationDelay = element.dataset.wowDelay || "0s";
            element.style.animationDuration =
              element.dataset.wowDuration || "1s";
          }
          element.classList.add("sal-animate");
          reveal.unobserve(target);
        });
      },
      { threshold: 0.05 },
    );
    document
      .querySelectorAll<HTMLElement>(".wow, [data-sal]")
      .forEach((node) => reveal.observe(node));
    observers.push(reveal);

    const counter = new IntersectionObserver((entries) => {
      entries.forEach(({ target, isIntersecting }) => {
        if (!isIntersecting) return;
        counter.unobserve(target);
        const original = target.textContent || "";
        const end = Number(original.replaceAll(",", ""));
        if (!Number.isFinite(end) || reducedMotion) return;
        const start = performance.now();
        const tick = (now: number) => {
          if (cancelled) return;
          const progress = Math.min((now - start) / 1000, 1);
          target.textContent =
            progress === 1 ? original : String(Math.round(end * progress));
          if (progress < 1) animationFrames.add(requestAnimationFrame(tick));
        };
        animationFrames.add(requestAnimationFrame(tick));
        disposers.push(() => {
          target.textContent = original;
        });
      });
    });
    document
      .querySelectorAll(".counter")
      .forEach((node) => counter.observe(node));
    observers.push(counter);

    const closePanels = () => {
      root.querySelector("#side-bar")?.classList.remove("show");
      root.querySelector(".search-input-area")?.classList.remove("show");
      root.querySelector("#anywhere-home")?.classList.remove("bgshow");
    };
    function search() {
      const query = document
        .querySelector<HTMLInputElement>(".search-input-area input")
        ?.value.trim();
      if (query) {
        closePanels();
        router.push(`/portfolio?q=${encodeURIComponent(query)}`);
      }
    }
    function click(event: MouseEvent) {
      if (!(event.target instanceof Element)) return;
      const target = event.target;
      if (target.closest("#menu-btn")) {
        event.preventDefault();
        root.querySelector("#side-bar")?.classList.add("show");
        root.querySelector("#anywhere-home")?.classList.add("bgshow");
      }
      if (
        target.closest(".close-icon-menu, #anywhere-home, .search-close-icon")
      )
        closePanels();
      if (target.closest(".search") && !target.closest(".search-input-area")) {
        event.preventDefault();
        root.querySelector(".search-input-area")?.classList.add("show");
        root.querySelector("#anywhere-home")?.classList.add("bgshow");
        document
          .querySelector<HTMLInputElement>(".search-input-area input")
          ?.focus();
      }
      if (target.closest(".search-input-area button")) search();
      const submenu = target.closest<HTMLElement>(
        ".mobile-menu-main li.has-droupdown > a, .mobile-menu-main li.has-dropdown > a",
      );
      if (submenu) {
        event.preventDefault();
        const list = submenu.nextElementSibling;
        const open = list?.classList.toggle("mm-show");
        submenu.setAttribute("aria-expanded", String(Boolean(open)));
        submenu.parentElement?.classList.toggle("mm-active", Boolean(open));
      }
      const mobileLink = target.closest<HTMLAnchorElement>(
        ".mobile-menu-main a[href]",
      );
      if (mobileLink && !submenu && mobileLink.getAttribute("href") !== "#")
        closePanels();
      if (target.closest(".progress-wrap")) {
        event.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: reducedMotion ? "instant" : "smooth",
        });
      }
      const accordion = target.closest(".accordion-header");
      if (accordion) {
        const item = accordion.closest(".accordion-item");
        item?.parentElement
          ?.querySelectorAll(".accordion-item")
          .forEach((node) => node.classList.toggle("active", node === item));
      }
      const videoButton = target.closest("#myBtn");
      if (videoButton) {
        const video = root.querySelector<HTMLVideoElement>("#myVideo");
        if (video) {
          if (video.paused) void video.play().catch(() => {});
          else video.pause();
          video.classList.toggle("show", !video.paused);
        }
      }
      const popupLink = target.closest<HTMLAnchorElement>(
        ".popup-youtube, .popup-video, .gallery-image",
      );
      if (popupLink) {
        event.preventDefault();
        let src = popupLink.href;
        if (!popupLink.classList.contains("gallery-image")) {
          const url = new URL(src);
          const id =
            url.hostname === "youtu.be"
              ? url.pathname.slice(1)
              : url.searchParams.get("v");
          if (id)
            src = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(id)}?autoplay=1`;
        }
        setPopup({
          type: popupLink.classList.contains("gallery-image")
            ? "image"
            : "video",
          src,
        });
      }
      const searchButton = target.closest<HTMLButtonElement>(
        '.select-area-down button[type="submit"], .rts-select-area button[type="submit"]',
      );
      if (searchButton && !searchButton.closest("form")) {
        event.preventDefault();
        const container = searchButton.closest(
          ".select-area-down, .rts-select-area",
        );
        const terms = Array.from(container?.querySelectorAll("select") || [])
          .filter((select) => select.selectedIndex > 0)
          .map((select) => select.selectedOptions[0]?.textContent?.trim())
          .filter(Boolean);
        router.push(
          `/portfolio${terms.length ? `?q=${encodeURIComponent(terms.join(" "))}` : ""}`,
        );
      }
      const saved = target.closest<HTMLAnchorElement>("a.wishlist");
      if (saved) {
        event.preventDefault();
        const card =
          saved.closest<HTMLElement>(
            '.project-wrapper, .project-wrapper2, .single-portfolio-wrapper, .portfolio-wrapper, .single-portfolio, [class*="single-portfolio"], .swiper-slide',
          ) || saved.parentElement?.parentElement;
        if (card) {
          const title =
            card.querySelector("h3, h4, h5, h6, .title")?.textContent?.trim() ||
            "Saved car";
          const image =
            card.querySelector("img")?.getAttribute("src") ||
            "/assets/images/portfolio/01.webp";
          saved.classList.toggle(
            "is-saved",
            toggleSavedCar({ id: title, title, image }),
          );
          saved.setAttribute(
            "aria-label",
            saved.classList.contains("is-saved")
              ? "Remove saved car"
              : "Save car",
          );
        }
      }
      const add = target.closest<HTMLAnchorElement>('a[href="/cart"]');
      if (add && /add to cart/i.test(add.textContent || "")) {
        const scope =
          add.closest(".ms-single-product__content, .content") ||
          add.parentElement?.parentElement;
        const title =
          scope?.querySelector("h2, h3, .title")?.textContent?.trim() ||
          "AutoVault product";
        const priceText =
          scope?.querySelector(".price, .price-area, .woocommerce-Price-amount")
            ?.textContent || "0";
        const price = Number(priceText.replace(/[^\d.]/g, "")) || 0;
        const quantity =
          Number(
            scope?.querySelector<HTMLInputElement>(".quantity-edit input")
              ?.value,
          ) || 1;
        addCartItem({
          id: title,
          title,
          price,
          quantity,
          image:
            add
              .closest(".rts-portfolio-area")
              ?.querySelector("img")
              ?.getAttribute("src") || "/assets/images/portfolio/01.webp",
        });
      }
    }
    function keydown(event: KeyboardEvent) {
      if (event.key === "Escape") closePanels();
      if (
        event.key === "Enter" &&
        event.target instanceof Element &&
        event.target.matches(".search-input-area input")
      ) {
        event.preventDefault();
        search();
      }
      if (
        (event.key === "Enter" || event.key === " ") &&
        event.target instanceof HTMLElement &&
        event.target.matches('[role="button"]')
      ) {
        event.preventDefault();
        event.target.click();
      }
    }
    const interactive = root.querySelectorAll<HTMLElement>(
      "#menu-btn, .search, .search-close-icon, .progress-wrap",
    );
    interactive.forEach((node) => {
      if (!["BUTTON", "A"].includes(node.tagName)) {
        node.tabIndex = 0;
        node.setAttribute("role", "button");
      }
    });

    const updateScroll = () => {
      document
        .querySelectorAll(".header--sticky")
        .forEach((node) =>
          node.classList.toggle("sticky", window.scrollY > 150),
        );
      document
        .querySelector(".progress-wrap")
        ?.classList.toggle("active-progress", window.scrollY > 50);
      const progress = root.querySelector<SVGPathElement>(
        ".progress-wrap path",
      );
      if (progress) {
        const length = progress.getTotalLength();
        const maximum = document.documentElement.scrollHeight - innerHeight;
        progress.style.strokeDasharray = `${length}`;
        progress.style.strokeDashoffset = String(
          length * (1 - (maximum > 0 ? window.scrollY / maximum : 0)),
        );
      }
    };
    const updateFooter = () => {
      const footer = root.querySelector<HTMLElement>("#rts-footer");
      const wrapper = root.querySelector<HTMLElement>(".rts-wrapper");
      if (footer && wrapper)
        wrapper.style.paddingBottom =
          innerWidth >= 992 ? `${footer.offsetHeight}px` : "";
      instances.forEach((slider) => slider.update());
    };
    const min = root.querySelector<HTMLInputElement>("#minRange");
    const max = root.querySelector<HTMLInputElement>("#maxRange");
    const updateRange = (event?: Event) => {
      if (!min || !max) return;
      if (Number(min.value) > Number(max.value) - 10) {
        if (event?.target === min)
          min.value = String(Math.max(0, Number(max.value) - 10));
        else max.value = String(Math.min(100, Number(min.value) + 10));
      }
      const low = Number(min.value),
        high = Number(max.value);
      const range = root.querySelector<HTMLElement>("#range");
      if (range) {
        range.style.left = `${low}%`;
        range.style.right = `${100 - high}%`;
      }
      const lowLabel = root.querySelector("#minPrice"),
        highLabel = root.querySelector("#maxPrice");
      if (lowLabel) lowLabel.textContent = `$${Math.round(low * 45 + 500)}`;
      if (highLabel) highLabel.textContent = `$${Math.round(high * 45 + 500)}`;
      const bars = root.querySelectorAll(".histogram-bar");
      bars.forEach((bar, index) => {
        const value = (index / Math.max(bars.length - 1, 1)) * 100;
        bar.classList.toggle("active", value >= low && value <= high);
      });
    };
    min?.addEventListener("input", updateRange);
    max?.addEventListener("input", updateRange);
    updateRange();
    document
      .querySelectorAll<HTMLAnchorElement>("header a[href]")
      .forEach((link) => {
        if (link.pathname === pathname) link.classList.add("active");
      });
    const query = new URLSearchParams(queryString).get("q");
    if (
      query &&
      (pathname.startsWith("/portfolio") || pathname.startsWith("/shop"))
    ) {
      const cards = root.querySelectorAll<HTMLElement>(
        ".rts-portfolio-area .project-wrapper, .rts-portfolio-area .project-wrapper2, .rts-portfolio-area .single-portfolio-wrapper, .rts-portfolio-area .single-portfolio, .rts-shop-area .project-wrapper4",
      );
      let visible = 0;
      cards.forEach((card) => {
        const match = query
          .toLowerCase()
          .split(/\s+/)
          .some((term) => card.textContent?.toLowerCase().includes(term));
        card.hidden = !match;
        if (match) visible++;
        disposers.push(() => {
          card.hidden = false;
        });
      });
      const info = document.createElement("p");
      info.className = "inventory-search-result";
      info.textContent = cards.length
        ? `${visible} results for “${query}”`
        : `Browsing inventory for “${query}”`;
      root
        .querySelector(
          ".rts-portfolio-area .container, .rts-shop-area .container, .rts-shop-area .container-fluid",
        )
        ?.prepend(info);
      disposers.push(() => info.remove());
    }
    document.addEventListener("click", click, true);
    document.addEventListener("keydown", keydown);
    window.addEventListener("scroll", updateScroll, { passive: true });
    window.addEventListener("resize", updateFooter);
    document.addEventListener("shown.bs.tab", updateFooter);
    updateScroll();
    updateFooter();
    const resize = new ResizeObserver(updateFooter);
    const footer = root.querySelector("#rts-footer");
    if (footer) resize.observe(footer);
    return () => {
      cancelled = true;
      resize.disconnect();
      observers.forEach((observer) => observer.disconnect());
      animationFrames.forEach(cancelAnimationFrame);
      instances.reverse().forEach((instance) => {
        if (!instance.destroyed) instance.destroy(true, true);
      });
      cleanupBootstrap.forEach((dispose) => dispose());
      disposers.forEach((dispose) => dispose());
      document.removeEventListener("click", click, true);
      document.removeEventListener("keydown", keydown);
      document.removeEventListener("shown.bs.tab", updateFooter);
      window.removeEventListener("scroll", updateScroll);
      window.removeEventListener("resize", updateFooter);
      min?.removeEventListener("input", updateRange);
      max?.removeEventListener("input", updateRange);
      closePanels();
    };
  }, [pathname, queryString, bodyClass, router]);

  return (
    <dialog
      ref={dialog}
      className="media-dialog"
      onClose={() => setPopup(null)}
      onClick={(event) => {
        if (event.target === dialog.current) dialog.current?.close();
      }}
    >
      <button
        className="media-close"
        type="button"
        aria-label="Close media"
        onClick={() => dialog.current?.close()}
      >
        ×
      </button>
      {popup?.type === "image" && (
        <img src={popup.src} alt="Vehicle gallery image" />
      )}
      {popup?.type === "video" && (
        <iframe
          src={popup.src}
          title="AutoVault video"
          allow="autoplay; fullscreen"
          allowFullScreen
        />
      )}
    </dialog>
  );
}
