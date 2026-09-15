const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('#site-nav');
menuButton?.addEventListener('click', () => {
  const open = nav.classList.toggle('is-open');
  menuButton.setAttribute('aria-expanded', String(open));
});
nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('is-open');
  menuButton?.setAttribute('aria-expanded', 'false');
}));

const dialog = document.querySelector('.image-modal');
const dialogImage = dialog?.querySelector('img');
const closeDialog = () => dialog?.close();
document.querySelectorAll('.figure-button').forEach((figure) => {
  const open = () => {
    if (!dialog || !dialogImage) return;
    const image = figure.dataset.image;
    dialogImage.src = image;
    dialogImage.alt = figure.querySelector('img')?.alt || 'Expanded figure';
    dialog.showModal();
  };
  figure.addEventListener('click', open);
  figure.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); open(); }
  });
});
dialog?.querySelector('.modal-close')?.addEventListener('click', closeDialog);
dialog?.addEventListener('click', (event) => { if (event.target === dialog) closeDialog(); });
