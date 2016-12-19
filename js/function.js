
var workBoxWidthRe = $('.work .workbox').width();

$('.work .workbox , #traineetracker').css('height', workBoxWidthRe);


$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 1) {
        $(".header").addClass("scroll");
    } else {
        $(".header").removeClass("scroll");
    }
});

$(window).resize(function(event) {
  var workBoxWidthRe = $('.work .workbox').width();

  $('.work .workbox , #traineetracker').css('height', workBoxWidthRe);
  /*if( $(window).width() < 999 ) {
    $('.work .workbox').css('width', ($(window).width()/2)-20);
  }*/
});

$('#worklink').click(function() {
    $('html, body').animate({
        scrollTop: $('#work').offset().top
    }, 500);
});

$('#aboutlink').click(function() {
    $('html, body').animate({
        scrollTop: $('#about').offset().top
    }, 500);
});

$('#contactlink').click(function() {
    $('html, body').animate({
        scrollTop: $('#contact').offset().top
    }, 500);
});

$('.burgermenu').click (function(){
  $(this).toggleClass('open');
  $('.header').toggleClass('open');
});
