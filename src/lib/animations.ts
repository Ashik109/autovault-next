let initialized = false;

export async function mountAnimations(root: HTMLElement, signal: AbortSignal) {
  const { default: AOS } = await import("aos");
  if (signal.aborted) return;
  // AOS owns global scroll/resize listeners; initialize once for the app lifetime.
  if (!initialized) {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
      once: true,
      offset: 60,
    });
    initialized = true;
  } else AOS.refreshHard();
  root.dataset.aosReady = "true";

  // Image/font layout changes can move reveal targets after route hydration.
  const refresh = () => {
    if (!signal.aborted) AOS.refresh();
  };
  root.addEventListener("load", refresh, true);
  void document.fonts.ready.then(refresh);
  signal.addEventListener(
    "abort",
    () => {
      root.removeEventListener("load", refresh, true);
      delete root.dataset.aosReady;
    },
    { once: true },
  );
}
