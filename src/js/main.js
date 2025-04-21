const swiper = new Swiper(".js_works-swiper", {
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    spaceBetween: 48,
    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        1080: {
            slidesPerView: 3,
        },
    },
});