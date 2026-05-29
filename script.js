document.querySelectorAll('.top-nav a, .side-tab').forEach((link) => {
  link.addEventListener('click', () => {
    document.querySelectorAll('.top-nav a, .side-tab').forEach((item) => item.classList.remove('active'));
    const href = link.getAttribute('href');
    document.querySelectorAll(`[href="${href}"]`).forEach((item) => item.classList.add('active'));
  });
});
