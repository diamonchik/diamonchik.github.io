$('.open-popup').click(function(e) {
    e.preventDefault();
    $('.popup-bg').fadeIn(800);
    $('html').addClass('no-scroll');
});

$('.close-popup').click(function() {
    $('.popup-bg').fadeOut(800);
    $('html').removeClass('no-scroll');
});



$('.open-web_1').click(function(e) {
    e.preventDefault();
    $('.web_1-bg').fadeIn(800);
    $('html').addClass('no-scroll');
});

$('.close-web_1').click(function() {
    $('.web_1-bg').fadeOut(800);
    $('html').removeClass('no-scroll');
});