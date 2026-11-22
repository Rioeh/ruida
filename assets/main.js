const nav = document.getElementById('nav');
const menuBtn = document.getElementById('menuBtn');
if (menuBtn && nav) {
  menuBtn.addEventListener('click', () => nav.classList.toggle('open'));
  nav.querySelectorAll('.nav-links a').forEach(a => {
    a.addEventListener('click', () => nav.classList.remove('open'));
  });
}
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
  if (header) header.style.boxShadow = window.scrollY > 10 ? '0 6px 24px rgba(0,0,0,.35)' : 'none';
});
document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
