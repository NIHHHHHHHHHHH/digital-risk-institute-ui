'use strict';

const $  = (selector) => document.querySelector(selector);
const $$ = (selector, ctx = document) => [...ctx.querySelectorAll(selector)];



function initMobileNav() {
  const burger = $('#burger');
  const menu   = $('#mobileMenu');
  if (!burger || !menu) return;

  function toggleMenu(forceOpen) {
    const willOpen = forceOpen !== undefined
      ? forceOpen
      : !menu.classList.contains('open');
    menu.classList.toggle('open', willOpen);
    burger.classList.toggle('open', willOpen);
    burger.setAttribute('aria-expanded', String(willOpen));
    document.body.style.overflow = willOpen ? 'hidden' : '';
  }

  burger.addEventListener('click', () => toggleMenu());
  $$('a', menu).forEach(link => link.addEventListener('click', () => toggleMenu(false)));
  window.addEventListener('resize', () => {
    if (window.innerWidth > 860) toggleMenu(false);
  }, { passive: true });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu.classList.contains('open')) {
      toggleMenu(false);
      burger.focus();
    }
  });
}



function initNavScroll() {
  const navbar = $('#navbar');
  if (!navbar) return;
  const update = () => navbar.classList.toggle('scrolled', window.scrollY > 10);
  window.addEventListener('scroll', update, { passive: true });
  update();
}



function initActiveNav() {
  const sections = $$('section[id]');
  const links    = $$('.nav-links a');
  if (!sections.length || !links.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      links.forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === `#${entry.target.id}`);
      });
    });
  }, { rootMargin: '-40% 0px -55% 0px' });

  sections.forEach(s => observer.observe(s));
}



function initReveal() {
  const els = $$('[data-reveal]');
  if (!els.length) return;

  // Add base styles via JS so they degrade gracefully without JS
  els.forEach(el => {
    const delay = el.dataset.delay ? Number(el.dataset.delay) * 120 : 0;
    el.style.cssText += `opacity:0;transform:translateY(24px);transition:opacity 0.55s ease ${delay}ms,transform 0.55s ease ${delay}ms;`;
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.style.opacity    = '1';
      entry.target.style.transform  = 'translateY(0)';
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12 });

  els.forEach(el => observer.observe(el));
}


const FORMSPREE_URL = 'https://formspree.io/f/xvzwbwzo'; 

function initForm() {
  const form   = $('#contactForm');
  const msgEl  = $('#formMsg');
  const submit = form?.querySelector('[type="submit"]');
  if (!form) return;

  /* Field-level validation helpers */
  function isValid(f) {
    if (f.required && !f.value.trim()) return false;
    if (f.type === 'email') return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.value);
    return true;
  }

  function markField(f) {
    f.style.borderColor = isValid(f) ? '' : '#ef4444';
  }

  $$('input, textarea, select', form).forEach(f => {
    f.addEventListener('blur',  () => markField(f));
    f.addEventListener('input', () => { if (isValid(f)) f.style.borderColor = ''; });
  });

  /* submit */
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const requiredFields = $$('input[required], textarea[required]', form);
    const invalid = requiredFields.filter(f => !isValid(f));

    if (invalid.length) {
      invalid.forEach(markField);
      invalid[0].focus();
      showMsg('Please fill in all required fields correctly.', true);
      return;
    }

    setLoading(true);
    showMsg('');

    try {
      const res = await fetch(FORMSPREE_URL, {
        method:  'POST',
        headers: { 'Accept': 'application/json' },
        body:    new FormData(form),
      });

      if (!res.ok) throw new Error('Network response was not ok');

      // Success state
      submit.textContent      = '✓ Message Sent!';
      submit.style.background = 'linear-gradient(135deg,#16a34a,#22c55e)';
      submit.style.boxShadow  = '0 4px 16px rgba(22,163,74,0.3)';
      submit.disabled         = true;
      showMsg("Thanks! We'll be in touch within 2 working days.");
      form.reset();

      // resets button back after 5 seconds
      setTimeout(() => {
        submit.textContent      = 'Send Message';
        submit.style.background = '';
        submit.style.boxShadow  = '';
        submit.disabled         = false;
        showMsg('');
      }, 5000);
      

    } catch {
      showMsg('Something went wrong — please email us directly at hello@idr.institute', true);
      setLoading(false);
    }
  });

  function showMsg(text, err = false) {
    if (!msgEl) return;
    msgEl.textContent = text;
    msgEl.className   = err ? 'error' : '';
  }

  function setLoading(on) {
    if (!submit) return;
    submit.disabled    = on;
    submit.textContent = on ? 'Sending…' : 'Send Message';
  }
}


document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initNavScroll();
  initActiveNav();
  initReveal();
  initForm();
});