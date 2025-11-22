// small micro-interactions
document.addEventListener('DOMContentLoaded', () => {
  // smooth scroll for sidebar links
  document.querySelectorAll('.sidebar-links a').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(a.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  // subtle entrance animations
 const cards = document.querySelectorAll('.card');
cards.forEach((card, i) => {
  setTimeout(() => {
    card.style.opacity = '1';
    card.style.transform = 'translateY(0)';
  }, 150 + i * 120);
});
});