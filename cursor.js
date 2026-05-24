/* ===================================
   cursor.js — Custom Cursor Behavior
   =================================== */

(function initCursor() {
  if (isMobile()) return;

  const cursor      = $('#cursor');
  const cursorTrail = $('#cursorTrail');

  if (!cursor || !cursorTrail) return;

  let mx = 0, my = 0;   // mouse position
  let tx = 0, ty = 0;   // trail position

  // Update cursor position immediately
  document.addEventListener('mousemove', (e) => {
    mx = e.clientX;
    my = e.clientY;
    cursor.style.left = mx + 'px';
    cursor.style.top  = my + 'px';
  });

  // Animate trail with lerp
  function animateTrail() {
    tx = lerp(tx, mx, 0.12);
    ty = lerp(ty, my, 0.12);
    cursorTrail.style.left = tx + 'px';
    cursorTrail.style.top  = ty + 'px';
    requestAnimationFrame(animateTrail);
  }
  animateTrail();

  // Scale up on interactive elements
  const interactives = 'a, button, input, select, textarea, [data-hover]';

  document.addEventListener('mouseover', (e) => {
    if (e.target.closest(interactives)) {
      cursor.style.transform      = 'translate(-50%, -50%) scale(2)';
      cursorTrail.style.transform = 'translate(-50%, -50%) scale(1.5)';
      cursorTrail.style.opacity   = '0.6';
    }
  });

  document.addEventListener('mouseout', (e) => {
    if (e.target.closest(interactives)) {
      cursor.style.transform      = 'translate(-50%, -50%) scale(1)';
      cursorTrail.style.transform = 'translate(-50%, -50%) scale(1)';
      cursorTrail.style.opacity   = '1';
    }
  });

  // Hide on leave
  document.addEventListener('mouseleave', () => {
    cursor.style.opacity      = '0';
    cursorTrail.style.opacity = '0';
  });
  document.addEventListener('mouseenter', () => {
    cursor.style.opacity      = '1';
    cursorTrail.style.opacity = '1';
  });

  // Click effect
  document.addEventListener('mousedown', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(0.7)';
  });
  document.addEventListener('mouseup', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(1)';
  });
})();
