/* ===================================
   utils.js — Shared Utility Functions
   =================================== */

/**
 * Debounce: ชะลอการเรียกฟังก์ชันซ้ำๆ
 * @param {Function} fn
 * @param {number} wait
 */
function debounce(fn, wait = 150) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), wait);
  };
}

/**
 * Clamp: จำกัดค่าให้อยู่ในช่วง min-max
 */
function clamp(val, min, max) {
  return Math.min(Math.max(val, min), max);
}

/**
 * lerp: Linear interpolation ระหว่างค่า a กับ b
 */
function lerp(a, b, t) {
  return a + (b - a) * t;
}

/**
 * isMobile: ตรวจสอบว่าเป็น mobile หรือไม่
 */
function isMobile() {
  return window.innerWidth <= 768;
}

/**
 * scrollTo: เลื่อนหน้าไปยัง element แบบ smooth
 * @param {string} selector
 */
function scrollTo(selector) {
  const el = document.querySelector(selector);
  if (!el) return;
  const navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h'), 10) || 72;
  const top = el.getBoundingClientRect().top + window.scrollY - navH;
  window.scrollTo({ top, behavior: 'smooth' });
}

/**
 * $(selector) — shorthand querySelector
 */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];
