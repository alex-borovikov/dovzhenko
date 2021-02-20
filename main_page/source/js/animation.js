function headerAnimation(){
    const header = document.querySelector('.header-wrapper');
    setTimeout(() => {
        header.style.transform = `translateY(0)`;
    }, 1600)
}
function sliderAnimation(){
    const date = document.querySelectorAll('.content-text__date span');
    const title = document.querySelectorAll('.content-text__title h2')
    const desc = document.querySelectorAll('.content-text__discription p');
    const button = document.querySelectorAll('.content-text__redirect-button a');
    const nav = document.querySelectorAll('.slider__nav');


    async function startAnim(){
        await setTimeout(() => {
            date.forEach( item => item.style.transform = `translateY(0)`)
        }, 300)
        await setTimeout(() => {
            title.forEach( item => item.style.transform = `translateY(0)`)
        }, 600);
        await setTimeout(() => {
            desc.forEach( item => item.style.transform = `translateY(0)`)
        }, 1000);
        await setTimeout(() => {
            button.forEach( item => item.style.opacity = `1`)
            nav.forEach( item => item.style.opacity = `1`)
        }, 1350);

    }
    startAnim();
}


function pageAnimation(){
    const title = document.querySelector('.events_header_title ');
    const line = document.querySelector('.events_line');

    const titleRect = title.getBoundingClientRect().top;
    const clientHeight = Math.max(document.documentElement.clientHeight || window.innerHeight);
    const clientWidth = Math.max(document.documentElement.clientWidth || window.clientWidth);
    if(titleRect <= (clientHeight / 1.3)){
        title.style.transform = `translateX(0)`;
        setTimeout(() => {
            line.style.transform = `translateX(0)`;
        },100)
    }

    //Events
    const wrapper = document.querySelector('.events__content');
    const events = document.querySelectorAll('.events__item');
    const wrapperRect = wrapper.getBoundingClientRect().top;
    const loopValues = {
        desktop: {
            firstLine: {
                from: 0,
                to: 3
            },
            secondLine: {
                from: 3,
                to: 6
            },
            thirdLine: {
                from: 6,
                to: 9
            }
        }
    }
    function eventsAnimateLikeEqualizerDesktop(itemsArray, value, valueSec, valueThird, defineLine){

        function setStyleLoop(array,from, to){
            for(let i = from; i < to; i++){
                if(array[i]){
                    array[i].style.transform = `translateY(0)`;
                    array[i].style.opacity = `1`;
                }
            }
        }
        //Контрольные точки
        if(wrapperRect <= (clientHeight / value)){
            setStyleLoop(itemsArray, defineLine.firstLine.from, defineLine.firstLine.to);
        }
        if(wrapperRect <= valueSec){
            setStyleLoop(itemsArray, defineLine.secondLine.from, defineLine.secondLine.to);
        }
        if(wrapperRect <= valueThird){
            setStyleLoop(itemsArray, defineLine.thirdLine.from, defineLine.thirdLine.to)
        }
    }


    // Studios
    const wrapperStudios = document.querySelector('.children');
    const wrapperStudiosRect = wrapperStudios.getBoundingClientRect().top;
    const titleStudios = document.querySelectorAll('.children_info-title h2');
    const titleStudiosMob = document.querySelectorAll('.children_title h2');
    const childrenBlockLinesStudios = document.querySelectorAll('.children_info-line');
    const descriptionStudios = document.querySelectorAll('.children_info-discription p');
    const contactsStudios = document.querySelectorAll('.children_info-more__item');
    const imageStudios = document.querySelectorAll('.children_image img');
    const imageStudiosMob = document.querySelectorAll('.children_image-mob img');
    const headerStudios = document.querySelectorAll('.children_title h2');

    // About
    const wrapperAbout = document.querySelector('.about');
    const wrapperAboutRect = wrapperAbout.getBoundingClientRect().top;
    const titleAbout = document.querySelectorAll('.about .about-header h2');
    const titleSecAbout = document.querySelectorAll('.about-header_abb');
    const titleSecAboutMob = document.querySelectorAll('.about-info-mobile_header p');
    const descAbout = document.querySelectorAll('.about-content__info-title h2');
    const descAboutMob = document.querySelectorAll('.about-info-mobile-title h2');
    const descSecAbout = document.querySelectorAll('.about-content__info-disc p');
    const sliderImgAboutContainer = document.querySelector('.about-content__slider-img')
    const sliderImgAboutContainerRect = sliderImgAboutContainer.getBoundingClientRect().top;
    const sliderImgAbout = document.querySelectorAll('.about-content__slider-img img')
    const sliderNameAbout = document.querySelectorAll('.slider-info__main');
    const sliderInfoDesc = document.querySelectorAll('.slider-info__discription p')
    const center_main = document.querySelectorAll('.about-content__info_img');
    const footerWrapper = document.querySelector('.footer-wrapper');
    const footerWrapperRect = footerWrapper.getBoundingClientRect().top;
    const footerTitles = document.querySelectorAll('.footer-contacts_item h3');
    const footerParagraphs = document.querySelectorAll('.footer-contacts_item p');

    center_main.forEach((item, index )=> {
        item.classList.add('center_main_' + index)
    })


    //Events Mobile

    function animateStudiosDesktop(){
        if(wrapperStudiosRect < clientHeight / 1.3){
            const animateTitle = new Promise(resolve => {
                titleStudios.forEach(item => item.classList.add('transform_y-def'))
                headerStudios.forEach(item => item.classList.add('transform_x-def'))
                resolve();
            }).then(() => {
                setTimeout(() => {
                    childrenBlockLinesStudios.forEach(item => item.classList.add('show'))
                }, 500)
            }).then(() => {
                setTimeout(() => {
                    descriptionStudios.forEach(item => item.classList.add('transform_y-def'))
                }, 700)
            }).then(() => {
                setTimeout(() => {
                    contactsStudios.forEach((item,index) => {
                        setTimeout(() => {
                            item.classList.add('transform_y-def')
                        }, index * 200)
                    })
                }, 800)
                imageStudios.forEach(item => item.classList.add('transform_y-def'))
            })
        }
    }
    function animateStudiosMobile(){
        if(wrapperStudiosRect < clientHeight / 1.3){

            const animateStudiosMobile = new Promise(resolve => {
                titleStudiosMob.forEach(item => item.classList.add('transform_x-def'))
                resolve();
            }).then(() => {
                setTimeout(() => {
                    titleStudios.forEach(item => item.classList.add('transform_y-def'))
                    imageStudiosMob.forEach(item => item.classList.add('transform_y-def'))
                }, 200)
            }).then(() => {
                setTimeout(() => {
                    descriptionStudios.forEach(item => item.classList.add('transform_y-def'))
                }, 400)
            }).then(() => {
                setTimeout(() => {
                    contactsStudios.forEach((item,index) => {
                        setTimeout(() => {
                            item.classList.add('transform_y-def')
                        }, index * 200)
                    })
                }, 800)
            })
        }
    }
    function animateEventsMobile(){
        if(wrapperRect <= clientHeight / 1.3){
            events.forEach((event, index) => {
                setTimeout(() => {
                    event.classList.add('transform_y-def');
                }, index * 200)
            })
        }
    }
    function animateAboutDesktop(){
        if(wrapperAboutRect < clientHeight / 1.3){
            titleAbout.forEach(item => item.style.transform = 'translate(0,6px)')
            titleSecAbout.forEach(item => item.style.transform = 'translate(0,0)')
        }
        if(wrapperAboutRect < clientHeight / 1.7){
            descAbout.forEach(item => item.classList.add('transform_x-def'))
            titleSecAboutMob.forEach(item => item.classList.add('transform_x-def'))
            setTimeout(() => {
                descSecAbout.forEach(item =>  item.classList.add('transform_x-def'))
                descAboutMob.forEach(item =>  item.classList.add('transform_y-def'))

            }, 300)
            setTimeout(() => {
                sliderImgAbout.forEach(item =>  item.classList.add('transform_y-def'))
            }, 600)
            setTimeout(() => {
                sliderNameAbout.forEach(item =>  item.classList.add('transform_y-def'))
                setTimeout(() => {
                    sliderInfoDesc.forEach(item =>  item.classList.add('transform_y-def'))
                }, 200)
            }, 800)
        }
        if(document.querySelector('.center_main_1').getBoundingClientRect().top < clientHeight / 1.2){
            document.querySelector('.center_main_1').style.transform = `translateY(0)`;
            document.querySelector('.center_main_1').style.opacity = `1`;
        }
        if(footerWrapperRect < clientHeight / 1.4){
            footerTitles.forEach((item,index) => {
                setTimeout(() => {
                    item.classList.add('transform_y-def')
                    footerParagraphs.forEach((item,index) => {
                        setTimeout(() => {
                            item.classList.add('transform_y-def')
                        },index * 200)
                    })

                }, index * 200)
            })
        }
    }
    function animateAboutMobile(){
        if(wrapperAboutRect < clientHeight / 1.3){
            titleAbout.forEach(item => item.style.transform = 'translate(0,6px)')
            titleSecAbout.forEach(item => item.style.transform = 'translate(0,0)')
        }
        if(wrapperAboutRect < clientHeight / 1.7){
            descAbout.forEach(item => item.classList.add('transform_x-def'))
            titleSecAboutMob.forEach(item => item.classList.add('transform_x-def'))
            setTimeout(() => {
                descSecAbout.forEach(item =>  item.classList.add('transform_x-def'))
                descAboutMob.forEach(item =>  item.classList.add('transform_y-def'))

            }, 300)
        }
        if(sliderImgAboutContainerRect < clientHeight / 2){
            sliderImgAbout.forEach(item =>  item.classList.add('transform_y-def'))

            setTimeout(() => {
                sliderNameAbout.forEach(item =>  item.classList.add('transform_y-def'))
                setTimeout(() => {
                    sliderInfoDesc.forEach(item =>  item.classList.add('transform_y-def'))
                }, 200)
            }, 300)
        }
        center_main.forEach((item, index )=> {
            item.classList.add('center_main_' + index)
        })
        if(document.querySelector('.center_main_0').getBoundingClientRect().top < clientHeight / 1.2){
            document.querySelector('.center_main_0').style.transform = `translateY(0)`;
            document.querySelector('.center_main_0').style.opacity = `1`;
        }
        if(footerWrapperRect < clientHeight / 1.4){
            footerTitles.forEach((item,index) => {
                setTimeout(() => {
                    item.classList.add('transform_y-def')
                    footerParagraphs.forEach((item,index) => {
                        setTimeout(() => {
                            item.classList.add('transform_y-def')
                        },index * 200)
                    })

                }, index * 200)
            })
        }
    }
    animateEventsMobile()

   function pageAnimate(){
       if(clientWidth > 768 && clientWidth < 1600){
           eventsAnimateLikeEqualizerDesktop(events, 1.4, 100, -320, loopValues.desktop);
           animateStudiosDesktop()
           animateAboutDesktop()
       }
       if(clientWidth >= 1600){
           eventsAnimateLikeEqualizerDesktop(events, 1.4, 200, -150, loopValues.desktop);
           animateStudiosDesktop()
           animateAboutDesktop()
       }
       if(clientWidth <= 768){
           animateStudiosMobile()
           animateEventsMobile();
       }
       if(clientWidth > 580){
           animateAboutDesktop();
       }
       if(clientWidth < 580){
           animateAboutMobile()
       }
   }
    pageAnimate();


    // Studios

}

window.addEventListener('scroll', pageAnimation);