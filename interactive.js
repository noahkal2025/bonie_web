// interactive.js
// Adds beautiful and interactive features to Bonnie Martial Arts Fitness Hub

document.addEventListener('DOMContentLoaded', function () {
  // 1. Smooth scroll for navigation links
  document.querySelectorAll('.navbar-menu a').forEach((link) => {
    link.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // 2. Navbar shadow on scroll
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', function () {
    if (window.scrollY > 30) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // 3. Button ripple effect
  document.querySelectorAll('button, .cta-btn').forEach((btn) => {
    btn.addEventListener('click', function (e) {
      const ripple = document.createElement('span');
      ripple.className = 'ripple';
      ripple.style.left = e.offsetX + 'px';
      ripple.style.top = e.offsetY + 'px';
      this.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    });
  });

  // 4. Gallery hover effect (subtle zoom)
  document.querySelectorAll('.gallery-list img').forEach((img) => {
    img.addEventListener('mouseenter', function () {
      this.classList.add('hover-zoom');
    });
    img.addEventListener('mouseleave', function () {
      this.classList.remove('hover-zoom');
    });
  });

  // 5. Animated reveal for sections
  const revealSections = document.querySelectorAll('section');
  const revealOnScroll = () => {
    revealSections.forEach((sec) => {
      const rect = sec.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        sec.classList.add('revealed');
      }
    });
  };
  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll();

  // 6. Toast notification on contact form submit
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function () {
      showToast('Thank you! We will contact you soon via WhatsApp.');
    });
  }

  function showToast(message) {
    let toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(() => {
      toast.classList.add('show');
      setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 400);
      }, 2200);
    }, 100);
  }
});
