$('.open-popup').click(function(e) {
    e.preventDefault();
    $('.popup-bg').fadeIn(800);
    $('html').addClass('no-scroll');
});

$('.close-popup').click(function() {
    $('.popup-bg').fadeOut(800);
    $('html').removeClass('no-scroll');
});



$('.open-tel').click(function(e) {
    e.preventDefault();
    $('.tel-bg').fadeIn(800);
    $('html').addClass('no-scroll');
});

$('.close-tel').click(function() {
    $('.tel-bg').fadeOut(800);
    $('html').removeClass('no-scroll');
});