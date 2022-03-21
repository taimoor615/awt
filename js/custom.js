jQuery(document).ready(function (){
    var swiper = new Swiper(".home-banner-main", {
        slidesPerView: 1,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    var testimonail_swiper = new Swiper(".testi-main", {
        slidesPerView: 1,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
        },
    });
    jQuery(".Toggle-button").click(function (){
        jQuery(".menu").slideToggle();
    });
});