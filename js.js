let openMenu = document.querySelector('.menu-toggler');
let menu = document.querySelector('nav .nav-list');

    openMenu.addEventListener('click', function () {
        menu.classList.toggle('active');
    });
