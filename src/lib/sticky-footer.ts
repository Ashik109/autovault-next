// Keep the original template's footer reveal behavior scoped to the active route.
export function setupStickyFooter(root: HTMLElement) {
  const footer = root.querySelector<HTMLElement>("#rts-footer");
  const wrapper = root.querySelector<HTMLElement>(".rts-wrapper");
  if (!footer || !wrapper) return () => {};

  const sticky = root.querySelector<HTMLElement>(".footer-sticky");
  // The template CSS applies dim-fixed/dim-static from 992px upward.
  const desktop = window.matchMedia("(min-width: 992px)");
  const originalPadding = wrapper.style.paddingBottom;
  const originalBottom = footer.style.bottom;
  const originallyFixed = footer.classList.contains("dim-fixed");
  const originallyStatic = footer.classList.contains("dim-static");

  function reset() {
    footer!.classList.toggle("dim-fixed", originallyFixed);
    footer!.classList.toggle("dim-static", originallyStatic);
    footer!.style.bottom = originalBottom;
    wrapper!.style.paddingBottom = originalPadding;
  }

  function updatePosition() {
    if (!desktop.matches) return;
    // Browsers can report fractional scroll offsets; allow one pixel at the end.
    const atBottom =
      window.scrollY + window.innerHeight >=
      document.documentElement.scrollHeight - 1;
    footer!.classList.toggle("dim-static", atBottom);
    footer!.classList.toggle("dim-fixed", !atBottom);
    footer!.style.bottom = `${atBottom ? sticky?.getBoundingClientRect().height || 0 : 0}px`;
  }

  function updateLayout() {
    if (!desktop.matches) {
      reset();
      return;
    }
    // Take the footer out of normal flow before reserving its height, avoiding
    // the doubled footer space that the previous conversion introduced.
    if (!footer!.classList.contains("dim-static"))
      footer!.classList.add("dim-fixed");
    wrapper!.style.paddingBottom = `${footer!.getBoundingClientRect().height}px`;
    updatePosition();
  }

  const observer = new ResizeObserver(updateLayout);
  observer.observe(footer);
  const content = wrapper.querySelector(".rts-wrapper-inner");
  if (content) observer.observe(content);
  if (sticky) observer.observe(sticky);
  window.addEventListener("scroll", updatePosition, { passive: true });
  window.addEventListener("resize", updateLayout);
  desktop.addEventListener("change", updateLayout);
  updateLayout();

  return () => {
    observer.disconnect();
    window.removeEventListener("scroll", updatePosition);
    window.removeEventListener("resize", updateLayout);
    desktop.removeEventListener("change", updateLayout);
    reset();
  };
}
