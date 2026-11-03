"use client";

import Lenis from "lenis";
import { useEffect } from "react";
import { setSmoothScroll } from "@/lib/smooth-scroll";

export default function SmoothScroll() {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let lenis: Lenis | null = null;

    const configure = () => {
      lenis?.destroy();
      lenis = reducedMotion.matches
        ? null
        : new Lenis({
            duration: 1.1,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
            touchMultiplier: 1.4,
            autoRaf: true,
            stopInertiaOnNavigate: true,
            prevent: (node) =>
              Boolean(
                node.closest(
                  ".nice-select .list, .side-bar, dialog, textarea, .SlideThumb, .SlideThumb2, [data-lenis-prevent]",
                ),
              ),
          });
      setSmoothScroll(lenis);
    };

    const onAnchorClick = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      )
        return;
      const link = (event.target as Element).closest<HTMLAnchorElement>(
        'a[href^="#"]',
      );
      if (
        !link ||
        link.hasAttribute("download") ||
        (link.target && link.target !== "_self") ||
        link.matches('[data-bs-toggle], [data-bs-target], [role="tab"]')
      )
        return;
      const hash = link.getAttribute("href");
      if (!hash || hash === "#") return;
      let id: string;
      try {
        id = decodeURIComponent(hash.slice(1));
      } catch {
        return;
      }
      // Cached routes may contain the same IDs, so find the current page's target.
      const root = link.closest("[data-autovault-page]") || document;
      const target = root.querySelector<HTMLElement>(`#${CSS.escape(id)}`);
      if (!target) return;
      event.preventDefault();
      const header = root.querySelector<HTMLElement>(".header--sticky");
      const offset = header ? -header.offsetHeight - 12 : 0;
      if (window.location.hash !== hash)
        window.history.pushState(window.history.state, "", hash);
      if (lenis) {
        lenis.resize();
        lenis.scrollTo(target, {
          offset,
          duration: 1.1,
          onComplete: (instance) => {
            // Some headers shrink once sticky; align with their final height.
            const finalOffset = header ? -header.offsetHeight - 12 : 0;
            if (Math.abs(target.getBoundingClientRect().top + finalOffset) > 1)
              instance.scrollTo(target, { offset: finalOffset, duration: 0.2 });
          },
        });
      } else {
        window.scrollTo({
          top: target.getBoundingClientRect().top + window.scrollY + offset,
          behavior: "instant",
        });
      }
    };

    configure();
    reducedMotion.addEventListener("change", configure);
    document.addEventListener("click", onAnchorClick, true);
    return () => {
      reducedMotion.removeEventListener("change", configure);
      document.removeEventListener("click", onAnchorClick, true);
      lenis?.destroy();
      setSmoothScroll(null);
    };
  }, []);

  return null;
}
