$(function () {

    /* Carousel marcas
    *****************************************************/
    $('#carousel-marcas').carousel();
    $('.marcas .next').click(function () {
        $('#carousel-marcas').carousel('next');
        toggleSliderControls($('#carousel-marcas'));
        return false;
    });
    $('.marcas .prev').click(function () {
        $('#carousel-marcas').carousel('prev');
        toggleSliderControls($('#carousel-marcas'));
        return false;
    });

    /* Carousel noticias 1
    *****************************************************/
    $('#carousel-noticias').carousel();
    $('.noticias-1 .next').click(function () {
        $('#carousel-noticias-1').carousel('next');
        toggleSliderControls($('#carousel-noticias-1'));
        return false;
    });
    $('.noticias-1 .prev').click(function () {
        $('#carousel-noticias-1').carousel('prev');
        toggleSliderControls($('#carousel-noticias-1'));
        return false;
    });

    /* Carousel noticias 2
    *****************************************************/
    $('#carousel-noticias').carousel();
    $('.noticias-2 .next').click(function () {
        $('#carousel-noticias-2').carousel('next');
        toggleSliderControls($('#carousel-noticias-2'));
        return false;
    });
    $('.noticias-2 .prev').click(function () {
        $('#carousel-noticias-2').carousel('prev');
        toggleSliderControls($('#carousel-noticias-2'));
        return false;
    });

    /* Page up button
    *****************************************************/
    $('.btn-up').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, '300');
    });

    /* Header Small / Tall  - ONLY DESKTOP
    *****************************************************/
    if (!isMobileDevice()) {
        $(window).scroll(function () {
            var $nav = $('.nav-principal');
            if ($(window).scrollTop() > 100) {
                $nav.addClass('small');
                $nav.find('.logo').addClass('small');
                $nav.find('.search-form').addClass('small');
                $nav.find('.navbar-nav').removeClass('mt-5').css('margin-top', '-15px');
                $('.nav-top').find('.search-form-top').addClass('small');
                $('#carousel-principal.carousel').addClass('small');
            } else {
                $nav.removeClass('small');
                $nav.find('.logo').removeClass('small');
                $nav.find('.search-form').removeClass('small');
                $nav.find('.navbar-nav').addClass('mt-5');
                $nav.find('.navbar-nav').removeAttr('style');
                $('#carousel-principal.carousel').removeClass('small');
                $('.nav-top').find('.search-form-top').removeClass('small');
                //reset search-top-nav
                $('.search-form-top').find('form').removeAttr('style');
                $('.search-form-top').find('img').attr('src', 'images/icons/icon-lupa-small.png');
                $('.search-form-top').find('.btn-nav-top-search').attr('data-action', 'open')
            }
        });
    } else {
        var $nav = $('.nav-principal');
        $nav.addClass('small');
        $nav.find('.logo').addClass('small');
        $nav.find('.search-form').addClass('small');
        $nav.find('.navbar-nav').removeClass('mt-5').css('margin-top', '-15px');
        $('.nav-top').find('.search-form-top').addClass('small');
        $('#carousel-principal.carousel').addClass('small');
    }

    /* Header top search small
    *****************************************************/
    $('.btn-nav-top-search').on('click', function (e) {
        e.preventDefault();
        if ($(this).attr('data-action') == 'open') {
            //change icon
            $(this).find('img').attr('src', 'images/icons/icon-lupa-small-close.png');
            //show input 
            var $item = $(this).parent().next();
            $item.css('top', '0');
            $item.find('input').focus();
            //change action state button
            $(this).attr('data-action', 'close')
        } else {
            //change icon
            $(this).find('img').attr('src', 'images/icons/icon-lupa-small.png');
            //hide input 
            var $item = $(this).parent().next();
            $item.removeAttr('style')
            //change action state button
            $(this).attr('data-action', 'open')
        }

    });


});


function toggleSliderControls($context) {
    setTimeout(function () {
        if ($context.find('.carousel-inner .carousel-item:first').hasClass('active')) {
            $context.find('.prev').removeClass('show');
            $context.find('.next').addClass('show');
        } else if ($context.find('.carousel-inner .carousel-item:last').hasClass('active')) {
            $context.find('.prev').addClass('show');
            $context.find('.next').removeClass('show');
        } else {
            $context.find('.prev').addClass('show');
            $context.find('.next').addClass('show');
        }
    }, 600);
}
function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
};
