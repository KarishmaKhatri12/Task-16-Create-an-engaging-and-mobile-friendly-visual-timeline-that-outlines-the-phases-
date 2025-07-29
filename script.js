// Scroll reveal and highlight current step
const steps = document.querySelectorAll('.timeline-step');

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.3 });

steps.forEach(step => {
  revealObserver.observe(step);
});

const highlightObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const step = entry.target;
    if (entry.isIntersecting) {
      step.classList.add('active');
    } else {
      step.classList.remove('active');
    }
  });
}, { threshold: 0.6 });

steps.forEach(step => {
  highlightObserver.observe(step);
});

// Back to top
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopBtn.style.display = 'block';
  } else {
    backToTopBtn.style.display = 'none';
  }
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});
