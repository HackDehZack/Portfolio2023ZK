const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    document.body.style.backgroundColor = getRandomColor();
  });

const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();

    const targetSection = document.querySelector(link.getAttribute('href'));
    if (targetSection) {

      targetSection.scrollIntoView({
        behavior: 'smooth'

      });
    }
  });
});

  link.addEventListener('mouseout', 
  (event) => {
    const flashWarning = link.querySelector
    ('.flash-warning');

    if (flashWarning) {

      flashWarning.remove();
    }
  });
});

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}