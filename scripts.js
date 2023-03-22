const hamburgerIcon = document.querySelector('.hamburger-logo');
const mainMenuItems = document.querySelectorAll('.main-menu li');
const subMenuItems = document.querySelectorAll('.sub-menu li');
const menuContent = document.querySelector('.menu-content');

hamburgerIcon.addEventListener('click', () => {
  hamburgerIcon.classList.toggle('opened');
  menuContent.classList.toggle('show');
});

mainMenuItems.forEach((item) => {
  item.addEventListener('click', () => {
    item.classList.toggle('active');
    item.querySelector('.wrapper img').classList.toggle('move-up');
  });
});

subMenuItems.forEach((item) => {
  item.addEventListener('click', (e) => {
    item.classList.toggle('active-sub');
    e.stopPropagation();
  });
});
