var button = document.querySelectorAll('.advantages-list__btn');
var text = document.querySelectorAll('.advantages-list__text');

[].forEach.call(button, function(btn, i) {
    btn.addEventListener('click', function() {
        text[i].classList.toggle('show-text');
    });
});

// document.querySelector('.advantages-list__btn').onclick = function() {
//     var move = document.querySelector('advantages-list__text').classList.toggle("move");
// };

var $foo = $('.foo');

$foo
    .addClass('block')
    .outerWidth(); // Reflow

$foo
    .addClass('fade-in')
    .one(transitionEnd, function() {
        alert('Animated');
    });

// $(document).ready(function(){
//     $('.advantages-list__btn').click(function(){
//       $(".advantages-list__text").fadeOut(600);
//     });
//     $('.advantages-list__btn').click(function(){
//       $(".advantages-list__text").fadeIn(600);
//     });
// });

// const btn = document.querySelector('.advantages-list__btn');
// btn.addEventListener('click', _ => document.querySelector('.advantages-list__text').classList.toggle('move'));

//     if(advantagesListText.style.display === 'none') {
//         advantagesListText.style.display = 'block';
//         advantagesListBtn.style.background = '#000000';
//     } else {
//         advantagesListText.style.display = 'none';
//         advantagesListBtn.style.background = '#777777';
//     }
// }