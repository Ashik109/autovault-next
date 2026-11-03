import type Lenis from "lenis";

let controller: Lenis | null = null;

export function setSmoothScroll(instance: Lenis | null) {
  controller = instance;
}

export function scrollToTop() {
  if (controller) controller.scrollTo(0, { duration: 1.1 });
  else window.scrollTo({ top: 0, behavior: "instant" });
}
