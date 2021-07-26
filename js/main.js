$(document).ready(function() {
    $('.slider-carousel').slick({
        dots: true
    });
});

$('.card').click(function() {
    $(this).find('.collapse').toggleClass('show')
});