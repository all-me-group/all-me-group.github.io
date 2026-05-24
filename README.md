# NEXUS DIGITAL — Company Homepage

เว็บไซต์หน้า Homepage สำหรับบริษัทพัฒนาซอฟต์แวร์ สร้างด้วย HTML, CSS, JavaScript ล้วนๆ (Vanilla)

---

## โครงสร้างไฟล์ (File Structure)

```
company-website/
│
├── index.html              ← หน้าหลัก (โครงสร้าง HTML ทั้งหมด)
│
├── css/
│   ├── reset.css           ← Normalize / CSS Reset
│   ├── variables.css       ← Design Tokens (สี, ฟอนต์, ขนาด)
│   ├── layout.css          ← โครงสร้าง Grid / Flex / Container
│   ├── components.css      ← UI Components (ปุ่ม, การ์ด, ฟอร์ม)
│   ├── animations.css      ← Keyframes & Scroll Reveal Classes
│   └── responsive.css      ← Mobile / Tablet Breakpoints
│
├── js/
│   ├── utils.js            ← Utility Functions (debounce, lerp, $)
│   ├── cursor.js           ← Custom Cursor Behavior
│   ├── navbar.js           ← Navigation (scroll, mobile menu)
│   ├── animations.js       ← IntersectionObserver Scroll Reveal
│   ├── counter.js          ← Animated Number Counter (stats)
│   ├── form.js             ← Form Validation & Submit
│   └── main.js             ← App Entry Point & Init
│
└── README.md               ← เอกสารนี้
```

---

## ส่วนประกอบของหน้าเว็บ (Sections)

| Section | รายละเอียด |
|---------|-----------|
| **Nav** | Sticky navbar, smooth scroll, mobile hamburger menu |
| **Hero** | Hero section พร้อม floating cards, orb background |
| **Stats** | ตัวเลขสถิติแบบ animated counter |
| **About** | เกี่ยวกับบริษัท + เทคโนโลยีที่ใช้ |
| **Products** | 4 ผลิตภัณฑ์หลัก (Job Board, Accounting, Portfolio, Custom) |
| **Services** | 6 บริการที่ให้ |
| **CTA** | Call-to-Action section |
| **Contact** | ฟอร์มติดต่อพร้อม validation |
| **Footer** | ลิงก์ + social media |

---

## การแก้ไข (Maintenance Guide)

### เปลี่ยนสีหลัก
แก้ไขที่ `css/variables.css` → ตัวแปร `--accent`

### เพิ่ม/แก้ไขผลิตภัณฑ์
แก้ไข `index.html` ในส่วน `<section class="products">`

### แก้ไขข้อมูลติดต่อ
แก้ไข `index.html` ในส่วน `<section class="contact">` → `.contact__details`

### เพิ่ม Animation
เพิ่ม class `reveal` หรือ `reveal-up` ลงบน element ใน `index.html`
แล้วเพิ่ม delay ด้วย class `delay-1`, `delay-2`, `delay-3`

### เชื่อมต่อ Form กับ Backend
แก้ไข `js/form.js` → ในฟังก์ชัน `form.addEventListener('submit', ...)` 
แทนที่ `await new Promise(...)` ด้วย `fetch('/api/contact', { method: 'POST', ... })`

### Breakpoints
- Desktop: > 1024px
- Tablet:  769px – 1024px
- Mobile:  ≤ 768px
- Small:   ≤ 480px

---

## เทคโนโลยีที่ใช้ (Tech Stack)

- **HTML5** — Semantic markup
- **CSS3** — Custom Properties, Grid, Flexbox, Animations
- **JavaScript (ES6+)** — Vanilla JS, IntersectionObserver, requestAnimationFrame
- **Google Fonts** — Syne (display) + Sarabun (body, Thai)

ไม่มี dependency ภายนอก ไม่ต้องติดตั้ง npm หรือ build tool ใดๆ
