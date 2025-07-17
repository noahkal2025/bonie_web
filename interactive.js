// interactive.js
// All interactive features for Bonnie Martial Arts Fitness Hub

// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

// Smooth scroll for nav links
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').slice(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  });
});

// Navbar shadow on scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('shadow');
  } else {
    navbar.classList.remove('shadow');
  }
});

// Gallery enlarge on click
const galleryImages = document.querySelectorAll('.gallery-list img');
const galleryOverlay = document.getElementById('galleryOverlay');
let enlargedImg = null;
galleryImages.forEach(img => {
  img.style.cursor = 'pointer';
  img.addEventListener('click', () => {
    galleryOverlay.innerHTML = '';
    galleryOverlay.style.display = 'flex';
    enlargedImg = document.createElement('img');
    enlargedImg.src = img.src;
    enlargedImg.alt = img.alt;
    enlargedImg.className = 'enlarged-img';
    galleryOverlay.appendChild(enlargedImg);
  });
});
galleryOverlay.addEventListener('click', () => {
  galleryOverlay.style.display = 'none';
  galleryOverlay.innerHTML = '';
});

// Contact form WhatsApp handler
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
    const whatsappNumber = '2348033777744'; // Bonnie's WhatsApp
    const whatsappMsg = `Name: ${name}%0AEmail: ${email}%0APhone: ${phone}%0AMessage: ${message}`;
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`, '_blank');
  });
}

// Button ripple effect
const joinBtn = document.querySelector('.join-btn');
if (joinBtn) {
  joinBtn.addEventListener('click', function(e) {
    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    ripple.style.left = `${e.offsetX}px`;
    ripple.style.top = `${e.offsetY}px`;
    this.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  });
}

// Section reveal on scroll
const revealSections = document.querySelectorAll('.reveal');
function revealOnScroll() {
  const windowHeight = window.innerHeight;
  revealSections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < windowHeight - 100) {
      section.classList.add('active');
    }
  });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Toast notification (example usage)
function showToast(msg) {
  let toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = msg;
  document.body.appendChild(toast);
  setTimeout(() => toast.classList.add('show'), 100);
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400);
  }, 2500);
}
// Example: showToast('Welcome to Bonnie Martial Arts Fitness Hub!');
