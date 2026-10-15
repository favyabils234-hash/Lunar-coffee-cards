const cards = document.querySelectorAll('[data-card]');

cards.forEach((card) => {
  const button = card.querySelector('.flip-card');

  button.addEventListener('click', () => {
    const willFlip = !card.classList.contains('is-flipped');
    card.classList.toggle('is-flipped', willFlip);
    button.setAttribute('aria-pressed', String(willFlip));
  });
});
