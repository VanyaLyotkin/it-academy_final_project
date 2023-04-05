// Плавное появление элементов списка

$(function() {
    $('.advantages-list__btn').on('click', function() {
        var block = $(this).closest('.advantages-list__item');
        block.find('.advantages-list__text').slideToggle(400).toggleClass('show-text');
    });
});

// Плавное отображение скрытых элементов галереи

$( document ).ready(function() {
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
    });
});

//Смена background у кнопок списка

$(".advantages-list__btn").click(function(e){
    e.preventDefault();
    $(this).toggleClass('active-btn');
 });
