let menu = document.querySelector('.header__menu');

menu.addEventListener('click', function f(event) {
    let appear1 = document.querySelector('.findAppear').classList;
    let appear2 = document.querySelector('.header__menu').classList;
    appear1.toggle('header__appearance_active')
    appear2.toggle('header__menu_active')
})
