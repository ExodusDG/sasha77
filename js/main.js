$(document).ready(function() {
    $('.slider-carousel').slick({
        dots: true
    });
});

$('.card').click(function() {
    $(this).find('.collapse').toggleClass('show')
});

$('.tariff-card').click(function() {
    $('.tariff-card').removeClass('tariff-card-active')
    $('.tariff-card-mounth-count').removeClass('tariff-card-mounth-count-active')
    $('.tariff-card-mounth').removeClass('tariff-card-mounth-active')
    $('.tariff-card-adv').removeClass('tariff-card-adv-active')
    $('.tariff-card-discount').removeClass('card-gradient-discount-active')

    $(this).addClass('tariff-card-active')
    $(this).find('.tariff-card-mounth-count').addClass('tariff-card-mounth-count-active')
    $(this).find('.tariff-card-mounth').addClass('tariff-card-mounth-active')
    $(this).find('.tariff-card-adv').addClass('tariff-card-adv-active')
    $(this).find('.tariff-card-discount').addClass('card-gradient-discount-active')
})