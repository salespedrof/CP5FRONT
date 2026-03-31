const navbar = document.getElementById('navbar');
const menuButton = document.getElementById('menuButton');
const mobileMenu = document.getElementById('mobileMenu');
const mobileLinks = document.querySelectorAll('.mobile-link');
const leadForm = document.getElementById('leadForm');
const formMessage = document.getElementById('formMessage');

window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    navbar.classList.add('py-1');
  } else {
    navbar.classList.remove('py-1');
  }
});

menuButton.addEventListener('click', () => {
  const isOpen = !mobileMenu.classList.contains('hidden');
  mobileMenu.classList.toggle('hidden');
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  menuButton.innerHTML = isOpen
    ? '<i class="fa-solid fa-bars"></i>'
    : '<i class="fa-solid fa-xmark"></i>';
});

mobileLinks.forEach((link) => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.innerHTML = '<i class="fa-solid fa-bars"></i>';
  });
});

leadForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const interest = document.getElementById('interest').value;

  formMessage.textContent = `Obrigado, ${name}! Seu e-mail (${email}) foi cadastrado com interesse em ${interest}.`;
  formMessage.classList.remove('hidden');
  leadForm.reset();
});