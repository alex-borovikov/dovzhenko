window.addEventListener('load', () => {
    headerAnimation();
    sliderAnimation()
    adaptiveHeighForMobileBurgerMenu();
    swiperContentHeight();
    sliderPaginationIndent();
    smart()

})
window.addEventListener('resize', () => {
    adaptiveHeighForMobileBurgerMenu();
    swiperContentHeight();
    sliderPaginationIndent();
    smart();
})
document.querySelector('.burger__close').addEventListener('click', burgerFunctional)
window.addEventListener('load', () => {
    const userWidth = Math.max(document.documentElement.clientWidth || window.offsetWidth);
    const svg = document.querySelector('.footer-svg svg');
    const rect = document.querySelector('.footer-svg svg rect');
    const background = [svg, rect];

    if(userWidth > 1920){
        background.forEach(item => item.setAttribute('width', '2600'))
        background[1].style.transform = 'translateX(-340px)'
    }
})