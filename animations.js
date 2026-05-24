/* ===================================
   animations.js — Scroll Reveal (IntersectionObserver)
   =================================== */

(function initReveal() {
  const targets = $$('.reveal, .reveal-up');

  if (!targets.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // trigger once only
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: '0px 0px -60px 0px',
    }
  );

  targets.forEach(el => observer.observe(el));
})();
