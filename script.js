document.querySelectorAll('.lang-switch button').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.lang-switch button').forEach((btn) => btn.classList.remove('active'));
    button.classList.add('active');
  });
});
