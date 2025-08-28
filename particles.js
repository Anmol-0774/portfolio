const canvas = document.createElement('canvas');
document.querySelector('.hero').appendChild(canvas);
canvas.style.position = 'absolute';
canvas.style.top = 0;
canvas.style.left = 0;
canvas.style.width = '100%';
canvas.style.height = '100%';
canvas.style.zIndex = 0; // behind content
canvas.style.pointerEvents = 'none';

const ctx = canvas.getContext('2d');
let particlesArray = [];

function initCanvas() {
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
  particlesArray = [];
  for (let i = 0; i < 80; i++) {
    particlesArray.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 3 + 1,
      speedX: (Math.random() - 0.5) * 1,
      speedY: (Math.random() - 0.5) * 1,
      color: `rgba(212,179,255,${Math.random()})`
    });
  }
}
initCanvas();

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particlesArray.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI*2);
    ctx.fillStyle = p.color;
    ctx.fill();
    p.x += p.speedX;
    p.y += p.speedY;

    // wrap particles
    if(p.x < 0) p.x = canvas.width;
    if(p.x > canvas.width) p.x = 0;
    if(p.y < 0) p.y = canvas.height;
    if(p.y > canvas.height) p.y = 0;
  });
  requestAnimationFrame(animateParticles);
}
animateParticles();

// resize
window.addEventListener('resize', () => initCanvas());
