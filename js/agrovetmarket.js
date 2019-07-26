var cProducComparacion = 0;

$(function () {

  /* General Events
  *****************************************************/
  $(".megamenu").on("click", function (e) {
    e.stopPropagation();
  });
  $('.share-buttons').on('click', function (e) {
    e.preventDefault();
    var $elem = $(this).parent().find('.bubble');
    if ($elem.hasClass('show')) {
      $elem.removeClass('show');
      setTimeout(function () {
        $elem.hide()
      }, 500);
    } else {
      $elem.show();
      $elem.addClass('show');
    }
  });
  $('#video-modal').on('shown.bs.modal', function (e) {
    $("#video").attr('src', $("#video-btn").data("src") + "?rel=0&amp;showinfo=0&amp;modestbranding=1&amp;autoplay=1");
  })
  $('#video-modal').on('hide.bs.modal', function (e) {
    $("#video").attr('src', $("#video-btn").data("src"));
  })
  $('.toggle-icon').click(function () {
    $(this).toggleClass('open');
  });
  $(".customcheck input").click(function () {
    ($(this).prop('checked')) ? $(this).closest('.checkarea').find('.compareButton').addClass('show') : $(this).closest('.checkarea').find('.compareButton').removeClass('show');
  });
  $(".btn-close").click(function (e) {
    e.preventDefault();
    ($(this).closest('.popcheck').hasClass('show')) ? $(this).closest('.popcheck').removeClass('show') : $(this).closest('.popcheck').addClass('show');
  });

  /* Responsive
 *****************************************************/

  if (isMobileDevice()) {
    //Navs
    $('.nav-principal').find('.navbar-collapse').prepend($('.nav-top').find('.search-form-top'));
    $('.nav-principal').find('.navbar-collapse').append($(".nav-top").find('.navbar-nav'));
    //Carousels   
    var itemsHtml = "";
    $($('#carousel-marcas').find('.col-12')).each(function (i) {
      var active = (i < 1) ? "active" : "";
      itemsHtml += '<div class="carousel-item ' + active + ' row">' + $(this).html() + '</div>';
    });
    $('#carousel-marcas').find('.carousel-inner').empty().append(itemsHtml);

    var itemsHtml = "";
    $($('#carousel-noticias-1').find('.col-12')).each(function (i) {
      var active = (i < 1) ? "active" : "";
      itemsHtml += '<div class="carousel-item ' + active + ' row">' + $(this).html() + '</div>';
    });
    $('#carousel-noticias-1').find('.carousel-inner').empty().append(itemsHtml);

    var itemsHtml = "";
    $($('#carousel-noticias-2').find('.col-12')).each(function (i) {
      var active = (i < 1) ? "active" : "";
      itemsHtml += '<div class="carousel-item ' + active + ' row">' + $(this).html() + '</div>';
    });
    $('#carousel-noticias-2').find('.carousel-inner').empty().append(itemsHtml);
    $();

  }

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
  $('#carousel-noticias-1').carousel();
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
  $('#carousel-noticias-2').carousel();
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
  $(".item__hover__bubble").on("mouseover",function(){
    $(this).find(".bubble").addClass("show");
  }).on("mouseleave",function(){
    $(this).find(".bubble").removeClass("show");
  });

  /* MEGAMENU
-------------------------------------------------- */
  $(".nav-principal .navbar-nav").on("mouseover", ".nav-item", function () {
    $(this).parent().find(".dropdown-menu").removeClass("show");
    $(this).find(".dropdown-menu").addClass("show");
  }).on("mouseleave", ".dropdown-menu", function () {
    $(this).removeClass("show");
  });

  /* Header Small / Tall  - ONLY DESKTOP
  *****************************************************/
  if (!isMobileDevice()) {
    $(window).scroll(function () {
      var $nav = $('.nav-principal');
      if ($(window).scrollTop() > 30) {
        $nav.addClass('small');
        /*$nav.find('.navbar-nav').removeClass('mt-5').css('margin-top', '-15px');*/
        $('.nav-top').addClass('small');
        /*$('#carousel-principal.carousel').addClass('small');*/
      } else {
        $nav.removeClass('small');
        $('.nav-top').removeClass('small').removeClass('no-items');
        $nav.find('.navbar-nav').removeAttr('style');
        $('#carousel-principal.carousel').removeClass('small');
        //reset search-top-nav
        $('.search-form-top').find('form').removeAttr('style');
        $('.search-form-top').find('img').attr('src', 'images/icons/icon-lupa-small.png');
        //$('.search-form-top').find('.btn-nav-top-search').attr('data-action', 'open')
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
      $('.nav-top .form-inline').addClass('show');
      //hidden nav-items
      $(this).closest('.nav-top').addClass('no-items');
      //change icon
      //$(this).find('img').attr('src', 'images/icons/icon-lupa-small-close.png');
      //show input 
      var $item = $(this).parent().next();
      $item.css('top', '0');
      $item.find('input').focus();
      //change action state button
      //$(this).attr('data-action', 'close')
    } else {
      $('.nav-top .form-inline').removeClass('show');
      //hidden nav-items
      $(this).closest('.nav-top').removeClass('no-items')
      //change icon
      //$(this).find('img').attr('src', 'images/icons/icon-lupa-small.png');
      //hide input 
      var $item = $(this).parent().next();
      $item.removeAttr('style')
      //change action state button
      //$(this).attr('data-action', 'open')
    }

  });

  /* Verificar check min-2 / max-3 productos en lista de productos
  *****************************************************************/
  $('.lista-productos').find('.customcheck').on('click', 'input[type="checkbox"]', function () {
    createPopCheck(this, '.post');
  });

  /* Ripple effect
  *****************************************************/
  var $ripples = $('.ripples');
  $ripples.on('click.Ripples', function (e) {
    var $this = $(this);
    var $offset = $this.parent().offset();
    var $circle = $this.find('.ripplesCircle');
    var x = e.pageX - $offset.left;
    var y = e.pageY - $offset.top;
    $circle.css({
      top: y + 'px',
      left: x + 'px'
    });
    $this.addClass('is-active');
  });
  $ripples.on('animationend webkitAnimationEnd mozAnimationEnd oanimationend MSAnimationEnd', function (e) {
    $(this).removeClass('is-active');
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

