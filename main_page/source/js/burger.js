function burgerFunctional(){
    document.querySelector('.burger__close').classList.toggle('_open');
    document.querySelector('.burger__window').classList.toggle('_open_window');
    document.querySelector('.wrapper-content').classList.toggle('_blur');
    document.body.classList.toggle('_unlock');
    document.body.classList.toggle('_lock');
}

function adaptiveHeighForMobileBurgerMenu(){
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}




