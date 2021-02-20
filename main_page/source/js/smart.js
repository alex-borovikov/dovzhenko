function smart() {
    const tape = document.querySelector('.smart-tape');
    const slide = document.querySelectorAll('.smart-slide');
    const sliderLength = document.querySelectorAll('.smart-slide').length - 1;
    const prev = document.querySelectorAll('.smart-nav-prev');
    const next = document.querySelectorAll('.smart-nav-next');
    tape.firstElementChild.classList.add('smart-first', 'smart-active')

    let counter = 0;

    function adaptiveHeight(){
        const activeSlide = document.querySelectorAll('.smart-slide');
        let heightArray = [];
        activeSlide.forEach(slide => {
            heightArray.push(slide.offsetHeight)
        })
        tape.style.cssText =`height: ${Math.max.apply(this,heightArray)}px`
    }
    adaptiveHeight();

    function highlightArrows(){
        if(tape.firstElementChild.classList.contains('smart-active')){
            document.querySelectorAll('.smart-nav-prev svg path').forEach( arrow => arrow.style.fillOpacity = `.3`)
            document.querySelectorAll('.smart-nav-next svg path').forEach( arrow => arrow.style.fillOpacity = `.6`)
        }
        if(!tape.firstElementChild.classList.contains('smart-active')){
            document.querySelectorAll('.smart-nav-prev svg path').forEach( arrow => arrow.style.fillOpacity = `.6`)
        }
        if(tape.lastElementChild.classList.contains('smart-active')){
            document.querySelectorAll('.smart-nav-next svg path').forEach( arrow => arrow.style.fillOpacity = `.3`)
        }
    }

    function setActiveSlide(){
        // Ищем элемент и удаляем у него активный класс
        function removeClass(){
            for (let children of tape.children) {
                if(children.classList.contains('smart-active')) {
                    children.classList.remove('smart-active')
                }
            }
        }
        // Если это первый элемент
        if( counter <= 0) {
            removeClass()
            tape.children[counter].classList.add('smart-active')
        } else{
            removeClass()
            tape.children[counter].classList.add('smart-active')
        }

    }

    slide.forEach((slide,index) => {
        if(index !== 0){
            slide.style.transform = `translateX(${index * 105}%)`
        }
    })
    next.forEach(next => {
        next.addEventListener('click', () => {
            adaptiveHeight()
            counter++;


            if(counter >= sliderLength) counter = sliderLength;
            setActiveSlide();
            highlightArrows();

            if(counter === 0){
                tape.style.transform = `translate3d(-105%,0,0)`
            } else {
                tape.style.transform = `translate3d(-${counter * 105}%,0,0) `
            }
        })
    })

    prev.forEach(prev =>{
        prev.addEventListener('click', () => {
            adaptiveHeight();
            counter--;

            if(counter < 0 ) counter = 0;
            setActiveSlide();
            highlightArrows();

            if(counter === 1){
                tape.style.transform = `translate3d(-105%,0,0)`
            } else {
                tape.style.transform = `translate3d(-${counter * 105}%,0,0)`
            }
        })
    })

}
