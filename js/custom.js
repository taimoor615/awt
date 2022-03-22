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

/*========================
        Gallery
 ========================*/
jQuery('a.gallery').featherlightGallery({
    previousIcon: '',     /* Code that is used as previous icon */
    nextIcon: '',         /* Code that is used as next icon */
    galleryFadeIn: 100,          /* fadeIn speed when slide is loaded */
    galleryFadeOut: 300          /* fadeOut speed before slide is loaded */
});