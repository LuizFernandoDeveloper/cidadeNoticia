export default  function headerMenuButton(){
    const nav = document.querySelector('.header__nav');
    const button = document.querySelector('#header__button-menu');

    button.addEventListener('click', function(){
        if( nav.classList.length == 1){
            nav.classList.add("header__nav__mobile--is-active");
            document.getElementById('header__button-menu').style.backgroundImage =  'url(./src/shared/images/menu/x.svg)';
        }
        else{
            nav.classList.remove("header__nav__mobile--is-active");
            document.getElementById('header__button-menu').style.backgroundImage=  'url(./src/shared/images/menu/Hamburger_icon_white.svg)';
        }
    })
}