$('.slider-principal').slick({
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplayspeed: 2000

});

const menuitems = document.querySelectorAll('.menu a[href^="#"]');
