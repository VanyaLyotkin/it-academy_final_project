// Плавное появление элементов списка

$(function() {
    $('.advantages-list__btn').on('click', function() {
        var block = $(this).closest('.advantages-list__item');
        block.find('.advantages-list__text').slideToggle(400).toggleClass('show-text');
    });
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

//Смена background у кнопок списка

$(".advantages-list__btn").click(function(e){
    e.preventDefault();
    $(this).toggleClass('active-btn');
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
      $('').animate({
        scrollTop: $(this).offset().top
        }, 300);
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