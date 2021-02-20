function swiperContentHeight(){
    let logo = document.querySelector('.slide_main__type img').offsetHeight;
    let elem = document.querySelectorAll('.slide_main__content-text');
    elem.forEach(element => element.style.height = `${logo}px`)
}