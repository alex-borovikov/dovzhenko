function admin_menu(){
    let select = document.querySelectorAll('.slider-select-title');

    select.forEach( item => {
        item.addEventListener('click', openCloseSelect)
    })

    function openCloseSelect(event){
        let target = event.target;
        let elemAttr = target.getAttribute('data-number');
        document.querySelector('.slider-select-options').classList.toggle('_open-select');
        document.querySelector('.slider-select-title img').classList.toggle('_svg_rotate')
    }

}
admin_menu();

if(document.querySelector('.slider-item-manage_load_second') != null){
    document.querySelector('.slider-item-manage_load_second').addEventListener('change',  ()=>{
        previewImage('.slider-item-manage_load_second', '.slider-item-prev-img p', '.slider-item-prev-img');
    });
}
// Функция получает информацию из базы в виде аргумента и и вставляет данные в нужные поля формы
function insertValuesIntoForm(data, type, selectOptions){
    const selectForm = document.querySelector('.form-change-slide-show');
    const changeForm = document.querySelector('.form');
    selectForm.style.display = 'none';
    changeForm.style.display = 'block';

    const selectTitle = document.querySelector('.slider-select-title p');
    const eventTitle = document.querySelector('.slider-item-change input');
    const eventTitleEn = document.querySelector('.slider-item-change-en input')
    const eventDesc = document.querySelector('.slider-item-change_desc input');
    const eventDescEn = document.querySelector('.slider-item-change_desc-en input');
    const eventDate = document.querySelector('.slider-item-change-date input');
    const eventTime = document.querySelector('.slider-item-change-time input');
    const eventLink = document.querySelector('.slider-item-change-link input');
    const eventId = document.querySelector('.slider-item-hidden-id input');
    const eventImg = document.querySelector('.slider-item-prev-img img');
    const eventImgHidden = document.querySelector('.slider-item-manage_load .img_name_hidden');
    const slider_src = 'https://www.dovzhenko-center.lviv.ua/wp-content/themes/dovzhenko/uploads/slider/';
    const event_src = 'https://www.dovzhenko-center.lviv.ua/wp-content/themes/dovzhenko/uploads/events/';
    let source = type === 'slider' ? slider_src : event_src;


    selectTitle.innerHTML = data.title;
    eventTitle.setAttribute('value', data.title);
    eventTitleEn.setAttribute('value', data['title_en']);
    eventDesc.setAttribute('value', data['description']);
    eventDescEn.setAttribute('value', data['description_en']);
    eventDate.setAttribute('value', data['date_select']);
    eventLink.setAttribute('value', data['link']);

    if(data.hasOwnProperty('date_select_time')){
        eventTime.setAttribute('value', data['date_select_time']);
    }
    if(data.hasOwnProperty('date_select_1')){
        eventDate.setAttribute('value', data['date_select_1']);
    }
    if (data.hasOwnProperty('date_select_2')){
        document.querySelector('.slider-item-change-date-s input').setAttribute('value', data['date_select_2']);
    }
    if(data.hasOwnProperty('date_select_3')){
        document.querySelector('.slider-item-change-date-display input').setAttribute('value', data['date_select_3']);
        document.querySelector('.slider-item-change-date_end-display input').setAttribute('value', data['date_select_4']);
    }
    eventId.setAttribute('value', data['id']);
    eventImgHidden.setAttribute('value', data['img']);
    eventImg.src = source + data.img;

    document.querySelectorAll(selectOptions).forEach(item =>{
        if(data['type'] === item.attributes[0].nodeValue || data['type_event'] === item.attributes[0].nodeValue){
            item.setAttribute('selected', '')
        }
    })

}
// Фунцкия узнает айди эвента и отправляет на сервер для фильтрации
async function getEvent (handler, type, selectOptions){
    let select = document.querySelector('.select_items');
    let selectedId = select.value;
    let response = await fetch(handler, {
        method: 'post',
        body: JSON.stringify({id: selectedId}),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
    if(response.ok){
        let data = await response.json();
        insertValuesIntoForm(data[0], type, selectOptions);
    } else{
        console.error('Сервер не відповідає');
    }
}
//Функция собирает данные из формы и отправляет на сервер
async function setNewValuesForEvent(handler){
    const form = document.querySelector('.form-rewrite-slide');

    let response = await fetch(handler, {
        method: 'post',
        body: new FormData(form),
    })
    if(response.ok){
        let data = await response.text();
        document.querySelector('.form_succes').classList.toggle('form_succes_show');
        document.querySelector('.form').style.display = 'none';
        setTimeout(() => {
            location.reload();
        }, 2000)
    } else{
        console.error('Сервер не відповідає');
    }
}

//Если клик по кнопке изменить эвент то отправляем форму с помощью функции
if(document.querySelector('.submit_change_slide') != null){
    document.querySelector('.submit_change_slide').addEventListener('click', (e) => {
        e.preventDefault();
        getEvent('change_slide.php', 'slider', '.slider-select-change select option');
    });
}
//Если клик по кнопке изменить эвент то отправляем форму с помощью функции
if(document.querySelector('.submit_change_event') != null){
    document.querySelector('.submit_change_event').addEventListener('click', (e) => {
        e.preventDefault();
        getEvent('change_event.php', 'event', '.event-select-change select option');
    });
}
//Если клик по кнопке "отправить изменения" для слайда то отправляем данные
if(document.querySelector('.rewrite_slide_submit') != null){
    document.querySelector('.rewrite_slide_submit').addEventListener('click', (e) => {
        e.preventDefault();
        setNewValuesForEvent('rewrite_slide.php');
    })
}
//Если клик по кнопке "отправить изменения" для эвента то отправляем данные
if(document.querySelector('.rewrite_event_submit') != null){
    document.querySelector('.rewrite_event_submit').addEventListener('click', (e) => {
        e.preventDefault();
        setNewValuesForEvent('rewrite_event.php');
    })
}
// Проверяем есть ли отметка что эвент бесплатный, и присваеваем соответствующий атрибут
if(document.querySelector('.form-meta-type') != null){
    const elem = document.querySelectorAll('.form-meta-type');
    elem.forEach(item => {
        item.addEventListener('click', () => {
            if(item.getAttribute('value') === 'free'){
                item.setAttribute('value', 'nofree')
            } else{
                item.setAttribute('value', 'free')
            }
        })
    })
} else{
    console.warn('i cant found input')
}

