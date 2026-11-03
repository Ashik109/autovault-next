export async function mountParallax(root: HTMLElement, signal: AbortSignal) {
  const { jarallax } = await import("jarallax");
  if (signal.aborted) return () => {};
  const elements = Array.from(root.querySelectorAll<HTMLElement>(".jarallax"));
  const desktop = window.matchMedia("(min-width: 992px)");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let mounted: HTMLElement[] = [];
  let disposed = false;

  function destroy() {
    if (mounted.length) jarallax(mounted, "destroy");
    mounted = [];
  }
  function synchronize() {
    destroy();
    if (desktop.matches && !reducedMotion.matches) {
      jarallax(elements, {
        speed: 0.5,
        disableParallax: /iPad|iPhone|iPod|Android/,
      });
      mounted = elements;
    }
    root.dataset.jarallaxReady = "true";
  }
  function cleanup() {
    if (disposed) return;
    disposed = true;
    desktop.removeEventListener("change", synchronize);
    reducedMotion.removeEventListener("change", synchronize);
    signal.removeEventListener("abort", cleanup);
    destroy();
    delete root.dataset.jarallaxReady;
  }
  desktop.addEventListener("change", synchronize);
  reducedMotion.addEventListener("change", synchronize);
  signal.addEventListener("abort", cleanup, { once: true });
  synchronize();
  return cleanup;
}
