/* ==========================================================================
   Universe — main.js
   Shared interactions: navigation, page transitions, reveals, starfield
   ========================================================================== */

(() => {
  "use strict";

  const root = document.documentElement;
  const body = document.body;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  root.classList.add("js");

  /* ------------------------------------------------------------------------
     Header scroll state
     ---------------------------------------------------------------------- */
  const header = document.querySelector("[data-header]");
  let scrollTicking = false;

  const updateHeader = () => {
    if (!header) return;
    header.classList.toggle("is-scrolled", window.scrollY > 12);
    scrollTicking = false;
  };

  if (header) {
    updateHeader();
    window.addEventListener(
      "scroll",
      () => {
        if (scrollTicking) return;
        scrollTicking = true;
        window.requestAnimationFrame(updateHeader);
      },
      { passive: true }
    );
  }

  /* ------------------------------------------------------------------------
     Mobile navigation
     ---------------------------------------------------------------------- */
  const nav = document.getElementById("site-nav");
  const navToggle = document.querySelector(".nav-toggle");

  if (nav && navToggle) {
    const navLinks = nav.querySelectorAll("a");
    const desktopQuery = window.matchMedia("(min-width: 961px)");

    const setNav = (open, restoreFocus = true) => {
      body.classList.toggle("nav-open", open);
      navToggle.setAttribute("aria-expanded", String(open));
      navToggle.setAttribute("aria-label", open ? "Đóng menu" : "Mở menu");

      if (open) {
        window.setTimeout(() => {
          const firstLink = nav.querySelector(".nav__link");
          if (firstLink) firstLink.focus({ preventScroll: true });
        }, 80);
      } else if (restoreFocus) {
        navToggle.focus({ preventScroll: true });
      }
    };

    navToggle.addEventListener("click", () => {
      setNav(navToggle.getAttribute("aria-expanded") !== "true");
    });

    navLinks.forEach((link) => {
      link.addEventListener("click", () => setNav(false, false));
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && body.classList.contains("nav-open")) {
        setNav(false);
      }
    });

    const handleDesktop = (event) => {
      if (event.matches) setNav(false, false);
    };

    if (desktopQuery.addEventListener) {
      desktopQuery.addEventListener("change", handleDesktop);
    } else {
      desktopQuery.addListener(handleDesktop);
    }
  }

  /* ------------------------------------------------------------------------
     Active nav link
     ---------------------------------------------------------------------- */
  const currentPage = body.dataset.page;

  if (currentPage) {
    document.querySelectorAll("[data-nav]").forEach((link) => {
      if (link.dataset.nav === currentPage) {
        link.classList.add("is-active");
        link.setAttribute("aria-current", "page");
      }
    });
  }

  /* ------------------------------------------------------------------------
     Open <details> elements targeted by the URL hash
     (e.g. services.html#ux-ui)
     ---------------------------------------------------------------------- */
  const openTargetedDetails = () => {
    const hash = window.location.hash.slice(1);
    if (!hash) return;

    let target = null;

    try {
      target = document.getElementById(decodeURIComponent(hash));
    } catch {
      target = document.getElementById(hash);
    }

    if (target && target.tagName === "DETAILS") {
      target.open = true;
    }
  };

  openTargetedDetails();
  window.addEventListener("hashchange", openTargetedDetails);

  /* ------------------------------------------------------------------------
     Footer year & back to top
     ---------------------------------------------------------------------- */
  document.querySelectorAll("[data-year]").forEach((node) => {
    node.textContent = String(new Date().getFullYear());
  });

  const toTop = document.querySelector("[data-to-top]");

  if (toTop) {
    toTop.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: reduceMotion.matches ? "auto" : "smooth",
      });
    });
  }

  /* ------------------------------------------------------------------------
     Scroll reveals
     ---------------------------------------------------------------------- */
  const revealElements = Array.from(document.querySelectorAll(".reveal"));

  if (revealElements.length) {
    if ("IntersectionObserver" in window && !reduceMotion.matches) {
      const revealObserver = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          });
        },
        {
          rootMargin: "0px 0px -7% 0px",
          threshold: 0.08,
        }
      );

      revealElements.forEach((element) => revealObserver.observe(element));
    } else {
      revealElements.forEach((element) => element.classList.add("is-visible"));
    }
  }

  /* ------------------------------------------------------------------------
     Animated counters
     ---------------------------------------------------------------------- */
  const counters = Array.from(document.querySelectorAll("[data-count]"));

  const setCounter = (element, value) => {
    const pad = Number.parseInt(element.dataset.pad || "0", 10);
    element.textContent = String(value).padStart(pad, "0");
  };

  const runCounter = (element) => {
    const target = Number.parseInt(element.dataset.count, 10);
    if (Number.isNaN(target)) return;

    if (reduceMotion.matches) {
      setCounter(element, target);
      return;
    }

    const duration = 1400;
    const startedAt = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - startedAt) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCounter(element, Math.round(target * eased));

      if (progress < 1) window.requestAnimationFrame(tick);
    };

    window.requestAnimationFrame(tick);
  };

  if (counters.length) {
    if ("IntersectionObserver" in window) {
      const counterObserver = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            runCounter(entry.target);
            observer.unobserve(entry.target);
          });
        },
        { threshold: 0.6 }
      );

      counters.forEach((counter) => counterObserver.observe(counter));
    } else {
      counters.forEach((counter) => {
        setCounter(counter, Number.parseInt(counter.dataset.count, 10));
      });
    }
  }

  /* ------------------------------------------------------------------------
     Starfield canvas
     ---------------------------------------------------------------------- */
  const canvas = document.getElementById("starfield");

  if (canvas && canvas.getContext) {
    const context = canvas.getContext("2d");
    const palette = ["255, 255, 255", "196, 181, 253", "103, 232, 249"];
    const TAU = Math.PI * 2;

    let stars = [];
    let width = 0;
    let height = 0;
    let frame = null;

    const createStars = () => {
      const amount = Math.min(130, Math.max(36, Math.round((width * height) / 17000)));

      stars = Array.from({ length: amount }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.15 + 0.25,
        alpha: Math.random() * 0.45 + 0.12,
        drift: Math.random() * 0.004 + 0.0015,
        phase: Math.random() * TAU,
        color: palette[Math.floor(Math.random() * palette.length)],
      }));
    };

    const drawFrame = (time = 0) => {
      context.clearRect(0, 0, width, height);

      stars.forEach((star) => {
        const y = star.y + Math.sin(time * star.drift + star.phase) * 7;
        const twinkle = 0.55 + 0.45 * Math.sin(time * 0.0007 + star.phase);
        context.globalAlpha = star.alpha * twinkle;
        context.fillStyle = `rgb(${star.color})`;
        context.beginPath();
        context.arc(star.x, y, star.radius, 0, TAU);
        context.fill();
      });

      context.globalAlpha = 1;
    };

    const loop = (time) => {
      drawFrame(time);
      frame = window.requestAnimationFrame(loop);
    };

    const start = () => {
      if (reduceMotion.matches || frame) return;
      frame = window.requestAnimationFrame(loop);
    };

    const stop = () => {
      if (!frame) return;
      window.cancelAnimationFrame(frame);
      frame = null;
    };

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * ratio);
      canvas.height = Math.floor(height * ratio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      createStars();
      drawFrame();
    };

    resize();
    start();

    let resizeTimer = null;
    window.addEventListener("resize", () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(() => {
        stop();
        resize();
        start();
      }, 180);
    });

    document.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        stop();
      } else {
        start();
      }
    });

    if (reduceMotion.addEventListener) {
      reduceMotion.addEventListener("change", (event) => {
        if (event.matches) {
          stop();
          drawFrame();
        } else {
          start();
        }
      });
    }
  }

  /* ------------------------------------------------------------------------
     Hero parallax (pointer only)
     ---------------------------------------------------------------------- */
  const parallaxTarget = document.querySelector("[data-parallax]");
  const orb = parallaxTarget ? parallaxTarget.querySelector(".orb") : null;
  const canHover = window.matchMedia("(hover: hover) and (pointer: fine)");

  if (parallaxTarget && orb && canHover.matches && !reduceMotion.matches) {
    let parallaxFrame = null;
    let pointerX = 0;
    let pointerY = 0;

    const applyParallax = () => {
      orb.style.transform = `translate3d(${pointerX}px, ${pointerY}px, 0)`;
      parallaxFrame = null;
    };

    window.addEventListener(
      "pointermove",
      (event) => {
        pointerX = (event.clientX / window.innerWidth - 0.5) * 16;
        pointerY = (event.clientY / window.innerHeight - 0.5) * 16;

        if (!parallaxFrame) {
          parallaxFrame = window.requestAnimationFrame(applyParallax);
        }
      },
      { passive: true }
    );

    document.addEventListener("pointerleave", () => {
      pointerX = 0;
      pointerY = 0;
      if (!parallaxFrame) {
        parallaxFrame = window.requestAnimationFrame(applyParallax);
      }
    });
  }

  /* ------------------------------------------------------------------------
     Page transition on internal navigation
     ---------------------------------------------------------------------- */
  const isModifiedClick = (event) =>
    event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0;

  document.addEventListener("click", (event) => {
    const link = event.target.closest("a");

    if (!link || event.defaultPrevented || isModifiedClick(event)) return;
    if (link.target && link.target !== "_self") return;
    if (link.hasAttribute("download")) return;

    const href = link.getAttribute("href");

    if (!href || href.startsWith("#")) return;
    if (/^(mailto:|tel:|javascript:)/i.test(href)) return;

    let url;
    try {
      url = new URL(link.href, window.location.href);
    } catch {
      return;
    }

    if (url.origin !== window.location.origin) return;

    const samePage =
      url.pathname === window.location.pathname &&
      url.search === window.location.search &&
      !url.hash;

    if (samePage) return;

    if (reduceMotion.matches) return;

    event.preventDefault();

    if (root.classList.contains("is-leaving")) return;

    root.classList.add("is-leaving");

    window.setTimeout(() => {
      window.location.href = url.href;
    }, 380);
  });

  window.addEventListener("pageshow", () => {
    root.classList.remove("is-leaving");
    if (header) updateHeader();
  });

  // Keep the browser from restoring a locked scroll state when going back.
  window.addEventListener("pagehide", () => {
    body.classList.remove("nav-open", "modal-open");
  });
})();
