

'use strict';

const $  = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];


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

  $$('a', menu).forEach(link =>
    link.addEventListener('click', () => toggleMenu(false))
  );

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


function initNavbarScroll() {
  const navbar = $('#navbar');
  if (!navbar) return;

  function updateScrollState() {
    navbar.classList.toggle('scrolled', window.scrollY > 10);
  }

  // passive = better performance
  window.addEventListener('scroll', updateScrollState, { passive: true });

  // run once in case page loads mid-scroll
  updateScrollState();
}

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initNavbarScroll();
});