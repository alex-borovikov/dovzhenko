function orderHall(){

    //Show more block
    const details = document.querySelectorAll('.hall-info__details');
    const additionalInfo = document.querySelectorAll('.rent-content__hall-additional')
    const close = document.querySelectorAll('.additional__title-close_button')

    details.forEach((item,index) => item.setAttribute('data-serial', `hall-number-${index}`));
    additionalInfo.forEach((item,index) => item.setAttribute('data-serial', `hall-number-${index}`));
    close.forEach((item,index) => item.setAttribute('data-serial', `hall-number-${index}`));


    function showMoreDetailsAboutHall(event){
        const serialNumber = event.target.parentElement.getAttribute('data-serial') || event.target.getAttribute('data-serial');
        additionalInfo.forEach(item => {
            if(item.getAttribute('data-serial') === serialNumber){
                item.classList.toggle('show_details');
            }
        })
    }

    details.forEach(item => item.addEventListener('click', showMoreDetailsAboutHall))
    close.forEach(item => item.addEventListener('click', showMoreDetailsAboutHall))
    // END Show more block

    //Order hall
    const button = document.querySelectorAll('.hall-info__lease span')
    button.forEach((item,index) => item.setAttribute('data-number',  `hall-number-${index}`));

    async function hallBlockAnimations(event){
        const halls = document.querySelectorAll('.rent-content__hall');

        document.querySelectorAll('.rent-img').forEach(item => {


            // Если номер кнопки совпадает с номером изображения в этом блоке, то берем изображение оттуда
            if(event.target.getAttribute('data-number') === item.getAttribute('data-number')){
                //Вставляем изображение
                document.querySelector('.form-hall-img img').src = item.firstElementChild.src;
                debugger;
                //Вставлем заголовок
                document.querySelectorAll('.hall-info__main-title').forEach(parentSpan => {
                    if(parentSpan.getAttribute('data-number') === item.getAttribute('data-number')){
                        document.querySelector('.form-hall-name span').innerHTML = parentSpan.firstElementChild.innerHTML;
                    }
                })
            }
        })

        await new Promise(resolve => {
            document.querySelector('.cooperation-header_title').classList.toggle('nodisplay');
            document.querySelector('.cooperation-header').style.cssText = `padding: 0 0 0 0;height: 0;`;
            // document.querySelector('.cooperation-wrapper').style.maxHeight = '100vh'


            halls.forEach((item , index)=> {
                setTimeout( () => {
                    resolve(item.style.opacity = '0')
                }, index * 300)
            })
        })
            .then( () => {
                setTimeout( () => {
                    halls.forEach(item  => {
                        item.style.display = 'none';
                    })
                    checkAdminBarDisplay();

                }, 1300)
            })
            .then( () => {
                setTimeout( () => {
                    document.querySelector('.rent-form').classList.toggle('display');
                }, 1350)
            })
            .then(() => {
                setTimeout( () => {
                    document.querySelector('.rent-form').classList.toggle('rent-form-transform');
                }, 1400)
            })

    }
    button.forEach(item => item.addEventListener('click', hallBlockAnimations))
    //END Order hall

    document.querySelector('.rent-form__submit-button').addEventListener('click', (e) => {
        e.preventDefault();
        const validate = formValidate();
        if(validate){
            sendEmail();
        }
    })

}
async function sendEmail(){
    let form = document.querySelector('.form_send-email');
    let response = await fetch('/wp-content/themes/dovzhenko/mail.php', {
        method: 'post',
        body: new FormData(form)
    })
    if(response.ok){
        let data = await response.text();

        document.querySelector('.rent-form').classList.toggle('rent-form-transform');
        setTimeout( () => {
            document.querySelector('.rent-form').style.cssText = 'display: none'
        }, 600)
        setTimeout(() => {
            document.querySelector('.rent-message').classList.remove('nodisplay')
        }, 650)
        setTimeout(() => {
            document.querySelector('.rent-message').classList.toggle('rent-message-transform');
        }, 700)
    } else{
        console.log('Something went wrong! ')
    }

}
function checkAdminBarDisplay(){
    const wrapper = document.querySelector('.header-wrapper');
    if(document.querySelector('#wpadminbar') && wrapper.classList.contains('fixed')){
        wrapper.style.top = `32px`;
    }
}

orderHall();

function formValidate(){
    const tel = document.querySelector('.rent-form__item-tel input').value;
    const telelement = document.querySelector('.rent-form__item-tel input');
    const name = document.querySelector('.rent-form__item-name input');
    const nameValue = document.querySelector('.rent-form__item-name input').value;
    //Tel define errors
    const defineCurrectPrefix = tel.match(/\+3[0-9][0-9]/g);
    const defineLettersInTel = /[a-zA-Z]/.test(tel);
    const defineRusLettersInTel = /[а-яА-ЯЁё]/.test(tel);
    let flag = true;

    // Name define errors
    const defineNumbersInName = /[0-9]/.test(nameValue);

    if(defineNumbersInName || nameValue.length > 50 || nameValue === ''){
        name.classList.add('input_error')
        console.log('net')
        flag = false;
    }else{
        name.classList.remove('input_error')
        console.log('da')
        flag = true;
    }

    if(defineRusLettersInTel || defineCurrectPrefix === null || defineLettersInTel){
        telelement.classList.add('input_error')
        name.setAttribute('title', 'Номер телефону може містити тільки цифри, + або ().')
        flag = false;
    }else{
        telelement.classList.remove('input_error')
        flag = true;
    }
    return flag;
}