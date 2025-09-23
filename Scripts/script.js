// ====== NAVBAR TOGGLE ======
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('nav ul');

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });
}

// ====== GALLERY LIGHTBOX ======
const galleryImages = document.querySelectorAll('.gallery img');
const lightbox = document.createElement('div');
lightbox.classList.add('lightbox');
document.body.appendChild(lightbox);

const img = document.createElement('img');
const closeBtn = document.createElement('span');
const prevBtn = document.createElement('span');
const nextBtn = document.createElement('span');

closeBtn.textContent = '×';
closeBtn.classList.add('close');
prevBtn.textContent = '❮';
prevBtn.classList.add('prev');
nextBtn.textContent = '❯';
nextBtn.classList.add('next');

lightbox.appendChild(img);
lightbox.appendChild(closeBtn);
lightbox.appendChild(prevBtn);
lightbox.appendChild(nextBtn);

let currentIndex = 0;

function showImage(index) {
  img.src = galleryImages[index].src;
  lightbox.style.display = 'flex';
  currentIndex = index;
}

galleryImages.forEach((image, index) => {
  image.addEventListener('click', () => {
    showImage(index);
  });
});

closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
  showImage(currentIndex);
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % galleryImages.length;
  showImage(currentIndex);
});

// ====== CONTACT FORM (Placeholder) ======
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message! (This is a placeholder — form backend to be added later)');
    contactForm.reset();
  });
}

// ====== SCROLL ANIMATIONS ======
const revealElements = document.querySelectorAll('section, .project-card, .gallery img');

function revealOnScroll() {
  const windowHeight = window.innerHeight;
  revealElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 50) {
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
    }
  });
}

revealElements.forEach(el => {
  el.style.opacity = 0;
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
});

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
// ====== HAMBURGER MENU ======
function toggleMenu() {
  document.getElementById("nav-links").classList.toggle("show");
}
