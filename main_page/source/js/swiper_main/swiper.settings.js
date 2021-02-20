const mainSlider = new Swiper('.slider',{
    autoplay: {
        delay: 5000,
    },
    navigation: {
        nextEl: '.swiper__next',
        prevEl: '.swiper__prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="pagination__line + ' + className + '"></span>';
        },
    },
    touchRatio: 0,
    simulateTouch: false

})

const aboutSlider = new Swiper('.slider-about', {
    navigation: {
        nextEl: '.about-nav-next',
        prevEl: '.about-nav-prev'
    },
    spaceBetween: 150,
    autoHeight: true
})




