/* ===================================
   counter.js — Animated Number Counter
   =================================== */

(function initCounter() {
  const counters = $$('.stat-num[data-target]');

  if (!counters.length) return;

  /**
   * animateCounter: เคลื่อนไหวตัวเลขจาก 0 ไปยัง target
   * @param {HTMLElement} el
   */
  function animateCounter(el) {
    const target   = parseInt(el.dataset.target, 10);
    const duration = 1800; // ms
    const start    = performance.now();

    function step(now) {
      const elapsed  = now - start;
      const progress = clamp(elapsed / duration, 0, 1);
      // easeOutExpo
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      el.textContent = Math.round(eased * target);
      if (progress < 1) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
  }

  // ใช้ IntersectionObserver เพื่อ trigger เมื่อเห็น
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach(el => observer.observe(el));
})();
