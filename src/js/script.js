//Попап

$('.hamburger').click(function(e) {
    e.preventDefault();
    $('.hamburger').toggleClass('hamburger__active');
    $('.menu').toggleClass('menu__active');
    $('.main-page').toggleClass('main-page__black');
});

//Сброс стилей при открытом попапе и увеличении разрешения

function screenCheck(){
    if ($(window).width() >= 320) { 
       $('.main-page').removeClass('main-page__black');
       $('.menu').removeClass('menu__active');
       $('.hamburger').removeClass('hamburger__active');
    }
}

// Плавное появление элементов списка + замена img

$('.advantages-list__btn').click(function() {
    $(".advantages-list__btn").siblings('.advantages-list__text').slideUp(300);
    $(this).removeClass('active-btn');
    if ($(this).siblings('.advantages-list__text').is(':hidden')) {
        $(this).siblings('.advantages-list__text').slideDown(300);
        $(this).addClass('active-btn');
        $('.advantages-list__btn').not(this).removeClass('active-btn');
    }
});

$('.advantages-list__btn').click(function() {
    if ($(this).hasClass('active-btn')) {
        $(this).parent('.advantages-list__item').css('flex-wrap', 'wrap');
        // $('.advantages-list__btn').parent('.advantages-list__item').not(this).css('flex-wrap', 'nowrap');
    }
});

// Плавное отображение скрытых элементов галереи

$(document).ready(function() {
  $("#show-gallery").click(function() {
    if ($("#invisible-gallery").css('display') === 'none') {
        $("#invisible-gallery").slideDown({
            start: function() {
              $(this).css('display', 'grid');
            }
        });
    }
    else {
        $("#invisible-gallery").slideUp(600);
    }
    $('html, body').animate({
        scrollTop: $(this).offset().top
        }, 600);
    });
});

//Плавное появление стоимости проектов

$(document).ready(function() {
    $(".pricelist__more").click(function() {
      if ($(".pricelist__rates-item_hide").css('display') === 'none') {
          $(".pricelist__rates-item_hide").slideDown({
              start: function() {
                $(this).css('display', 'block');
              }
          });
          $(".pricelist__rates-item_cost").css('border-bottom', '1px solid #D5D5D5');
          $(this).text('Свернуть');
      }
      else {
        $(this).text('Развернуть');
        $(".pricelist__rates-item_cost").css('border-bottom', 'none');
        $(".pricelist__rates-item_hide").slideUp(600);
      }
    });
});

//Изменение надписи на кнопке 

  $(".pricelist__more").click(function(e){
    e.preventDefault();
    $(this).toggleClass('services__active-btn');
 });

 //Слайдер

 $('.realized__slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 3,
    arrows: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});