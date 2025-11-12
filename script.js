// Basic interactivity: nav toggle, smooth scroll, form handler, year, social placeholders
document.addEventListener('DOMContentLoaded', function () {
  // year
  document.getElementById('year').textContent = new Date().getFullYear();

  // nav toggle
  const nav = document.getElementById('nav');
  const toggle = document.getElementById('nav-toggle');
  toggle.addEventListener('click', () => {
    if (getComputedStyle(nav).display === 'flex') {
      nav.style.display = 'none';
    } else {
      nav.style.display = 'flex';
      nav.style.flexDirection = 'column';
    }
  });

  // smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // hide nav on mobile after click
        if (window.innerWidth <= 880) nav.style.display = 'none';
      }
    });
  });

  // simple contact form handler (mailto fallback)
  const form = document.getElementById('contactForm');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const data = new FormData(form);
    const name = encodeURIComponent(data.get('name') || '');
    const email = encodeURIComponent(data.get('email') || '');
    const message = encodeURIComponent(data.get('message') || '');
    const subject = encodeURIComponent('Website contact from ' + (name || 'Website Visitor'));
    const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;
    // Open default mail client
    window.location.href = `mailto:officialadarshrajput01@gmail.com?subject=${subject}&body=${body}`;
  });

  // Prevent placeholder social ghost links from navigating
  document.querySelectorAll('.social-btn.ghost').forEach(btn => {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      alert('Link not added yet. Send your LinkedIn/Instagram links to add them here.');
    });
  });
});
