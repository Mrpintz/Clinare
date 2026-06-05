/* ============================================================
   CLINARE — interactions
   ============================================================ */
(function () {
  "use strict";

  /* ---------- Language toggle (PT default, EN in data-en) ---------- */
  var STORE = "clinare_lang";
  function applyLang(lang) {
    document.documentElement.lang = lang === "en" ? "en" : "pt";
    document.querySelectorAll("[data-en]").forEach(function (el) {
      if (el.dataset.pt === undefined) el.dataset.pt = el.innerHTML;
      el.innerHTML = lang === "en" ? el.dataset.en : el.dataset.pt;
    });
    // placeholder attributes
    document.querySelectorAll("[data-en-ph]").forEach(function (el) {
      if (el.dataset.ptPh === undefined) el.dataset.ptPh = el.getAttribute("placeholder") || "";
      el.setAttribute("placeholder", lang === "en" ? el.dataset.enPh : el.dataset.ptPh);
    });
    document.querySelectorAll(".lang button").forEach(function (b) {
      b.classList.toggle("active", b.dataset.lang === lang);
    });
    try { localStorage.setItem(STORE, lang); } catch (e) {}
  }
  var saved = "pt";
  try { saved = localStorage.getItem(STORE) || "pt"; } catch (e) {}
  document.addEventListener("DOMContentLoaded", function () {
    applyLang(saved);
    document.querySelectorAll(".lang button").forEach(function (b) {
      b.addEventListener("click", function () { applyLang(b.dataset.lang); });
    });

    /* ---------- Header scrolled state ---------- */
    var header = document.querySelector(".header");
    function onScroll() {
      if (header) header.classList.toggle("scrolled", window.scrollY > 24);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    /* ---------- Mobile nav ---------- */
    var toggle = document.querySelector(".nav__toggle");
    var panel = document.querySelector(".mobile-panel");
    if (toggle && panel) {
      toggle.addEventListener("click", function () {
        panel.classList.toggle("open");
        document.body.style.overflow = panel.classList.contains("open") ? "hidden" : "";
      });
      panel.querySelectorAll("a").forEach(function (a) {
        a.addEventListener("click", function () {
          panel.classList.remove("open");
          document.body.style.overflow = "";
        });
      });
    }

    /* ---------- Reveal on scroll ---------- */
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add("in");
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    document.querySelectorAll(".reveal").forEach(function (el) { io.observe(el); });

    /* ---------- Contact form ---------- */
    var form = document.querySelector("#marcar-form");
    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        form.style.display = "none";
        var ok = document.querySelector(".form-success");
        if (ok) ok.classList.add("show");
      });
    }
  });
})();
