/* ===================================
   main.js — App Entry Point & Init
   =================================== */

document.addEventListener('DOMContentLoaded', () => {

  /* --- Active nav link highlight on scroll --- */
  const sections  = $$('section[id]');
  const navLinks  = $$('.nav__links a[href^="#"]');

  function updateActiveLink() {
    const scrollY = window.scrollY + 100;
    let current   = '';

    sections.forEach(sec => {
      if (sec.offsetTop <= scrollY) current = sec.id;
    });

    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
    });
  }

  window.addEventListener('scroll', debounce(updateActiveLink, 80), { passive: true });

  /* --- Active nav link style injection --- */
  const style = document.createElement('style');
  style.textContent = `
    .nav__links a.active {
      color: var(--text) !important;
      position: relative;
    }
    .nav__links a.active::after {
      content: '';
      position: absolute;
      bottom: -4px; left: 0; right: 0;
      height: 2px;
      background: var(--accent);
      border-radius: 2px;
    }
    .form-group.has-error input,
    .form-group.has-error textarea {
      border-color: #f87171 !important;
    }
  `;
  document.head.appendChild(style);

  /* --- Product card stagger on load --- */
  const cards = $$('.product-card');
  cards.forEach((card, i) => {
    card.style.transitionDelay = `${i * 0.08}s`;
  });

  /* --- Log version --- */
  console.info('%c NEXUS DIGITAL — v1.0.0 ', 'background:#f97316;color:#fff;padding:4px 8px;border-radius:4px;font-weight:bold;');
});
