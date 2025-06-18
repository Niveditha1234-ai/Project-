const menuBtn = document.getElementById('menuBtn');
menuBtn.addEventListener('click', () => {
  const nav = document.querySelector('nav ul') || document.querySelector('nav');
  nav.classList.toggle('hidden');
});

// Toggle Light/Dark Mode
const toggleBtn = document.getElementById('themeToggle');
toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('light');
  const icon = toggleBtn.querySelector('i');
  icon.classList.toggle('fa-moon');
  icon.classList.toggle('fa-sun');
});
