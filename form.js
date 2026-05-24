/* ===================================
   form.js — Contact Form Validation & Submit
   =================================== */

(function initForm() {
  const form    = $('#contactForm');
  const formMsg = $('#formMsg');

  if (!form) return;

  /* --- Validation Rules --- */
  const validators = {
    name:    (v) => v.trim().length >= 2,
    email:   (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()),
    message: (v) => v.trim().length >= 10,
  };

  const errorMessages = {
    name:    'กรุณากรอกชื่อ-นามสกุล (อย่างน้อย 2 ตัวอักษร)',
    email:   'กรุณากรอกอีเมลที่ถูกต้อง',
    message: 'กรุณากรอกรายละเอียด (อย่างน้อย 10 ตัวอักษร)',
  };

  /* --- Show/Hide Field Error --- */
  function setFieldError(input, hasError) {
    const fg = input.closest('.form-group');
    if (!fg) return;

    fg.classList.toggle('has-error', hasError);

    let errEl = fg.querySelector('.field-error');
    if (hasError) {
      if (!errEl) {
        errEl = document.createElement('p');
        errEl.className = 'field-error';
        errEl.style.cssText = 'color:#f87171;font-size:.78rem;margin-top:.3rem;';
        fg.appendChild(errEl);
      }
      errEl.textContent = errorMessages[input.id] || 'กรุณากรอกข้อมูลให้ถูกต้อง';
    } else {
      errEl?.remove();
    }
  }

  /* --- Live Validation on Blur --- */
  Object.keys(validators).forEach(id => {
    const input = $(`#${id}`, form);
    if (!input) return;

    input.addEventListener('blur', () => {
      const valid = validators[id](input.value);
      setFieldError(input, !valid);
    });

    input.addEventListener('input', () => {
      const errEl = input.closest('.form-group')?.querySelector('.field-error');
      if (errEl && validators[id](input.value)) {
        setFieldError(input, false);
      }
    });
  });

  /* --- Form Submit --- */
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    let isValid = true;

    Object.keys(validators).forEach(id => {
      const input = $(`#${id}`, form);
      if (!input) return;
      const valid = validators[id](input.value);
      setFieldError(input, !valid);
      if (!valid) isValid = false;
    });

    if (!isValid) {
      showMsg('กรุณากรอกข้อมูลให้ครบถ้วนและถูกต้อง', 'error');
      return;
    }

    const submitBtn = form.querySelector('[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.textContent = 'กำลังส่ง...';

    // Simulate API call (replace with actual endpoint)
    await new Promise(resolve => setTimeout(resolve, 1500));

    showMsg('✓ ส่งข้อความสำเร็จ! เราจะติดต่อกลับโดยเร็ว', 'success');
    form.reset();
    submitBtn.disabled = false;
    submitBtn.textContent = 'ส่งข้อความ →';
  });

  function showMsg(text, type) {
    formMsg.textContent = text;
    formMsg.className   = `form-msg ${type}`;
    setTimeout(() => {
      formMsg.textContent = '';
      formMsg.className   = 'form-msg';
    }, 5000);
  }
})();
