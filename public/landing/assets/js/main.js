document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
      const hash = anchor.getAttribute("href");
      event.preventDefault();
      // Purchase links remain placeholders until a purchase URL is supplied.
      if (!hash || hash === "#") return;
      const target = document.getElementById(hash.slice(1));
      if (target) {
        target.scrollIntoView({
          behavior: window.matchMedia("(prefers-reduced-motion: reduce)")
            .matches
            ? "instant"
            : "smooth",
        });
      }
    });
  });
});
