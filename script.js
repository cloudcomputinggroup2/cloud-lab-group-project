document.addEventListener("DOMContentLoaded", () => {
  const yearNode = document.getElementById("year");
  if (yearNode) {
    yearNode.textContent = new Date().getFullYear();
  }

  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".site-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  const form = document.querySelector(".contact-form");
  if (form) {
    form.addEventListener("submit", (event) => {
      // Only block submission and show the demo alert when the form is explicitly
      // marked as a demo via `data-demo="true"`. Real forms (like Formspree) will
      // submit normally.
      if (form.dataset.demo === "true") {
        event.preventDefault();
        window.alert(
          "This is a demo contact form. Replace it with your preferred contact method before submission."
        );
      }
    });
  }

  // Lightbox for clickable images
  const lightboxLinks = document.querySelectorAll('.lightbox-link');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = lightbox ? lightbox.querySelector('.lightbox-image') : null;
  const lightboxClose = lightbox ? lightbox.querySelector('.lightbox-close') : null;

  function openLightbox(href, alt) {
    if (!lightbox || !lightboxImg) return;
    lightboxImg.src = href;
    lightboxImg.alt = alt || '';
    lightbox.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    if (!lightbox || !lightboxImg) return;
    lightbox.setAttribute('aria-hidden', 'true');
    lightboxImg.src = '';
    document.body.style.overflow = '';
  }

  lightboxLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      openLightbox(link.href, link.querySelector('img')?.alt || '');
    });
  });

  if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
  }

  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeLightbox();
  });
});
