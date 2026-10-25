const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#site-nav');

menuButton.addEventListener('click', () => {
  const open = navigation.classList.toggle('is-open');
  menuButton.setAttribute('aria-expanded', String(open));
});

navigation.addEventListener('click', (event) => {
  if (event.target.matches('a')) {
    navigation.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
  }
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.14 });

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
document.querySelector('#year').textContent = new Date().getFullYear();
