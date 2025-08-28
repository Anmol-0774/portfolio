// Fade-up animation on scroll
const cards = document.querySelectorAll('.card');
const options = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if(!entry.isIntersecting) return;
    entry.target.classList.add('show');
    observer.unobserve(entry.target);
  });
}, options);

cards.forEach(card => observer.observe(card));
