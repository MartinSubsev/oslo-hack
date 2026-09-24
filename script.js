(function () {
  "use strict";

  /* ---------- footer year ---------- */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- mobile nav ---------- */
  var burger = document.getElementById("navBurger");
  var mobileNav = document.getElementById("navMobile");

  if (burger && mobileNav) {
    burger.addEventListener("click", function () {
      var isOpen = mobileNav.classList.toggle("open");
      burger.classList.toggle("open", isOpen);
      burger.setAttribute("aria-expanded", String(isOpen));
    });

    mobileNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        mobileNav.classList.remove("open");
        burger.classList.remove("open");
        burger.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------- session plan show/hide ---------- */
  var planOutput = document.getElementById("planOutput");
  var planToggle = document.getElementById("planToggle");
  var planToggleTop = document.getElementById("planToggleTop");
  var planToggleLabel = document.getElementById("planToggleLabel");
  var planChevron = document.getElementById("planChevron");

  function setPlanState(open) {
    if (!planOutput) return;
    planOutput.hidden = !open;

    if (planToggle) planToggle.setAttribute("aria-expanded", String(open));
    if (planToggleTop) planToggleTop.setAttribute("aria-expanded", String(open));
    if (planToggleLabel) planToggleLabel.textContent = open ? "Hide session plan" : "Show session plan";
    if (planChevron) planChevron.style.transform = open ? "rotate(180deg)" : "rotate(0deg)";

    var topLabel = planToggleTop ? planToggleTop.querySelector("span") : null;
    if (topLabel) topLabel.textContent = open ? "Hide session plan" : "Show session plan";
  }

  function togglePlan() {
    var isOpen = planOutput && !planOutput.hidden;
    setPlanState(!isOpen);
    if (!isOpen && planOutput) {
      planOutput.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }

  if (planToggle) planToggle.addEventListener("click", togglePlan);
  if (planToggleTop) planToggleTop.addEventListener("click", function () {
    document.getElementById("session").scrollIntoView({ behavior: "smooth", block: "start" });
    setPlanState(true);
  });

  /* ---------- glow follows cursor (desktop only) ---------- */
  var glow = document.getElementById("glowCursor");
  var canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  if (glow && canHover) {
    document.addEventListener("mousemove", function (e) {
      glow.style.left = e.clientX + "px";
      glow.style.top = e.clientY + "px";
    });
  } else if (glow) {
    glow.style.display = "none";
  }

  /* ---------- reveal-on-scroll for cards and panels ---------- */
  var revealTargets = document.querySelectorAll(".card, .session-panel, .cta-inner, .photo-frame");

  if ("IntersectionObserver" in window) {
    revealTargets.forEach(function (el) {
      el.style.opacity = "0";
      el.style.transform = "translateY(16px)";
      el.style.transition = "opacity .6s ease, transform .6s ease";
    });

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    revealTargets.forEach(function (el) { observer.observe(el); });
  }
})();
