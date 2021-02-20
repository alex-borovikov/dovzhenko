window.addEventListener('click',(event) => {
    if(event.target.classList.contains('prev_def')){
        event.preventDefault();
        let target = event.target.getAttribute('data-type')
        if(target != null && !event.target.classList.contains('w-mobile')){
            document.querySelector(`#${target}`).scrollIntoView({block: "start", behavior: "smooth"});
        } else if(target != null && event.target.classList.contains('w-mobile')){
            burgerFunctional()
            document.querySelector(`#${target}`).scrollIntoView({block: "start", behavior: "smooth"});
        }
    }
})