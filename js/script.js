const slide = new Swiper('.swiper',{
    direction: 'horizontal',
    autoplay: false,
    loop: false,
    navigation:{
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev',
    },
    breakpoints:{
        768:{
            slidesPerView:1,
            slidesPerGroup:1,
        },
        1024:{
            slidesPerView:2,
            slidesPerGroup:2,
        },
    }
})