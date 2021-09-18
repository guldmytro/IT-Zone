$(document).ready(function() {

    // banner
    $('.main-banner__brands').on('init', function() {
        $(this).addClass('inited');
    });
    $('.main-banner__brands').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1
    });

    // product sliders
    $('.top-products__slider, .latest-products__slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1
    });

    // news slider
    $('.news-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1
    });

    // product slider
    $('.aside-gallery.gallery').slick({
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        prevArrow: false,
        centerMode: true,
        centerPadding: '0px',
        cssEase: 'ease',
        asNavFor: '.main-product-gallery',
        responsive: [
            {
            breakpoint: 576,
            settings: {
                vertical: false,
                slidesToShow: 3,
                slidesToScroll: 1
            }
            }
        ]
    });
    const nav = $('.aside-gallery.gallery').length ? '.aside-gallery.gallery' : false;
    $('.main-product-gallery').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        if (!$('.aside-gallery.static').length) {
            return;
        }
        $('.aside-gallery.static .slick-current').removeClass('slick-current');
        $(`.aside-gallery.static [data-slick-index="${nextSlide}"]`).addClass('slick-current');

    });
    $('.main-product-gallery').slick({
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: false,
        nextArrow: false,
        cssEase: 'ease',
        asNavFor: nav
    });

    $('.aside-gallery.gallery .aside-gallery__item').on('click', function() {
        const index = $(this).attr('data-slick-index');
        $('.aside-gallery').slick('slickGoTo', index);
    });

    $('.aside-gallery.static .aside-gallery__item').on('click', function() {
        const index = $(this).attr('data-slick-index');
        $('.main-product-gallery').slick('slickGoTo', index);
        $('.aside-gallery__item.slick-current').removeClass('slick-current');
        $(this).addClass('slick-current');
    });

    // range slider
    $(".js-range-slider").ionRangeSlider({
        type: 'double',
        min: 10,
        max: 70000,
        postfix: ' ₽'
    });

    // filters
    $('.sidebar-filters__header').click(function() {
        const $this = $(this);
        $this.toggleClass('active').next('.sidebar-filters__items').slideToggle(200);
    });

    // header-menu
    $('.header-menu_btn').click(function() {
        $(this).toggleClass('active');
        $('.header-menu-wrapper').slideToggle(300);
        if (!$('.main-menu__item.active').length) {
            $('.main-menu__item:first-child').addClass('active');
        }
    });
    $('.main-menu__item').hover(function() {
        const $this = $(this);
        if (!$this.hasClass('active')) {
            $('.main-menu__item.active').removeClass('active');
            $this.addClass('active');
        }
    });

}); // end ready

