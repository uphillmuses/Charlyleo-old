/* Charly Leo & Studio · small site behaviour, exported from the Mockup 8 canvas (2 Nov 2026)
   1. start the banner videos (muted, looping)
   2. give the menu its background once the page scrolls
   3. smooth scroll for in-page links such as "See the readings" */
document.addEventListener("DOMContentLoaded", function () {
  try {
    document.querySelectorAll("video").forEach(function (v) {
      v.muted = true; var p = v.play && v.play(); if (p && p.catch) p.catch(function () {});
    });
  } catch (e) {}
  try {
    var hs = document.querySelectorAll("header.nav7");
    var on = function () {
      var y = window.scrollY || document.documentElement.scrollTop || 0;
      hs.forEach(function (h) { h.classList.toggle("scrolled", y > 8); });
    };
    window.addEventListener("scroll", on, { passive: true }); on();
    document.querySelectorAll("a[href^='#']").forEach(function (a) {
      var id = a.getAttribute("href").slice(1); var t = id && document.getElementById(id);
      if (!t) return;
      a.addEventListener("click", function (e) { e.preventDefault(); t.scrollIntoView({ behavior: "smooth", block: "start" }); });
    });
  } catch (e) {}
});
