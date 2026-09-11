const menuOpenButton = document.querySelector('#menu-open-button');
const menuCloseButton = document.querySelector('#menu-close-button');

menuOpenButton.addEventListener('click', () => {
    document.body.classList.toggle("show-mobile-menu"); // toggle menu
});

menuCloseButton.addEventListener('click', () => menuOpenButton.click()); // close menu when clicking the close button