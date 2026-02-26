/*
 ** ---------------------------------------------------------------------
 **                        Oat Animate Library
 ** ---------------------------------------------------------------------
 ** Author: Dharmesh Gurnani
 ** This file contains the JavaScript code for the OT Animate library, which
 ** provides scroll-based animations for web elements. It uses the Intersection
 ** Observer API to detect when elements with the "ot-animate" attribute come
 ** into view and applies the specified animation classes to them.
 */
function observeOTAnimateView() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            const el = entry.target;
            el.setAttribute(
              "ot-animate",
              `${el.getAttribute("ot-animate").replace("view:", "")}`,
            );
            el.classList.add(`ot-animated`);
            observer.unobserve(el);
          }, 100);
        }
      });
    },
    { rootMargin: "-3px 0px -3px 0px", threshold: 0.3 },
  );

  document.querySelectorAll('[ot-animate*="view:"]').forEach((el) => {
    if (el.getAttribute("ot-animate").startsWith("view:")) {
      observer.observe(el);
    }
  });
}

// initialize on DOMContentLoaded
document.addEventListener("DOMContentLoaded", observeOTAnimateView);
