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
});
document.querySelector('.burger__close').addEventListener('click', burgerFunctional)
window.addEventListener('load', () => {
    setTimeout( () => {
        document.querySelector('.cooperation-header .line').style.width = '100%';
    }, 1000)
})

document.querySelectorAll('.rent-form__item_onchange input').forEach( input => {
    input.addEventListener('change', formValidate)
})

window.addEventListener('load', () => {
    if(document.documentElement.clientWidth <= 768){
        document.querySelector('.cooperation-header .line').style.display = 'none';
    }
})