const coopSlider = new Swiper('.slider-rent', {
    loop: true,
    slidesPerView: 'auto',
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="pagination__line-row + ' + className + '"></span>';
        },
    },
})





















