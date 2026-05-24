/* ===================================
   navbar.js — Navigation Behavior
   =================================== */

(function initNavbar() {
  const navbar     = $('#navbar');
  const burger     = $('#burger');
  const mobileMenu = $('#mobileMenu');
  const mobileLinks = $$('.mobile-link');

  if (!navbar) return;

  /* --- Scroll: add/remove .scrolled class --- */
  const handleScroll = debounce(() => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  }, 50);

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Run on load

  /* --- Mobile Menu Toggle --- */
  function toggleMenu(open) {
    burger?.classList.toggle('active', open);
    mobileMenu?.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  }

  burger?.addEventListener('click', () => {
    const isOpen = mobileMenu?.classList.contains('open');
    toggleMenu(!isOpen);
  });

  // Close menu on link click
  mobileLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const href = link.getAttribute('href');
      toggleMenu(false);
      setTimeout(() => scrollTo(href), 300);
    });
  });

  // Close on backdrop click
  mobileMenu?.addEventListener('click', (e) => {
    if (e.target === mobileMenu) toggleMenu(false);
  });

  /* --- Smooth scroll for all in-page nav links --- */
  $$('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (href === '#') return;
      if (document.querySelector(href)) {
        e.preventDefault();
        scrollTo(href);
        toggleMenu(false);
      }
    });
  });
})();
