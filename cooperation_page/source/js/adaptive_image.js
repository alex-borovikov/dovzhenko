function adaptiveImage(){
    let parents = document.querySelectorAll('.ibg');
    parents.forEach(item => {
        if(item.firstElementChild.tagName === 'IMG' && !item.firstElementChild.classList.contains('no-linear')){
            item.style.backgroundImage =
                `linear-gradient(90deg, #291666 0%, rgba(42, 21, 94, 0.5) 100%),
                 url( ${item.firstElementChild.getAttribute('src')} ) `
        } else{
            item.style.backgroundImage = `url( ${item.firstElementChild.getAttribute('src')} ) `
        }
        if(item.firstElementChild.tagName === 'IMG' && item.firstElementChild.classList.contains('event_linear')) {
            item.style.backgroundImage = `linear-gradient(180deg, #251447 0%, rgba(43, 29, 112, 0.4) 60%, rgba(37, 20, 71, 0.7) 72.4%, #251447 100%), url( ${item.firstElementChild.getAttribute('src')} ) `
        }
    })
}
adaptiveImage()