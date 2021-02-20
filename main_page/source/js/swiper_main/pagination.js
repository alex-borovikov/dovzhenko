function sliderPaginationIndent(){
    const button = document.querySelector('.content-text__redirect-button');
    const pagination = document.querySelector('.slider__nav')
    const clientWidth = document.documentElement.clientWidth || window.innerWidth;
    const scrollTop = document.documentElement.scrollTop;
    const sliderHeight = document.querySelector('.slider').offsetHeight;
    const adminbar = document.querySelector('#wpadminbar');
    const adminbarHeight = adminbar == null ? 0 : adminbar.offsetHeight;

    function setPaginationIndent(value){
        // pagination.style.right = `${value.rightIndent}px`;
        // pagination.style.bottom = `${value.calc}px`;
        pagination.style.cssText = `
            bottom: ${value.calc}px;
            right: ${value.right}px;
            opacity: 1
            
        `
    }

    function desktopPagination(){
        let distanceToTop = button.getBoundingClientRect().top + scrollTop;
        let buttonHeight = button.offsetHeight;
        let headerNav = document.querySelector('.header__navigation').getBoundingClientRect().right;
        let rightIndent = clientWidth - headerNav;
        let calc = sliderHeight - (distanceToTop + buttonHeight) + adminbarHeight;
        return {calc: calc,right: rightIndent}
    }


    if(clientWidth > 1024){
        setPaginationIndent( desktopPagination() )
    }else{
        setPaginationIndent({calc: 100});
    }
    if(sliderHeight < 590){
        setPaginationIndent({calc:50});

    }
    if(sliderHeight < 490){
        setPaginationIndent({calc:30});

    }
}

