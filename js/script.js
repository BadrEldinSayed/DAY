// LOADING 
$(document).ready(() => {
    $('#loading .spinner').fadeOut(500, function () {
        $('#loading').fadeOut(500, () => {
            $('body').css('overflow-y', 'auto');
        })
    });
})


//FIXED-BTN
let aboutOffset = $('#about').offset().top;
$(window).scroll(() => {
    let wScroll = $(window).scrollTop();
    if (wScroll >= aboutOffset - 100) {
        $('#btnUp').slideDown(500);
    }
    else {
        $('#btnUp').css('display', 'none');
    }
})

$('#btnUp').click(() => {
    $('html, body').animate({ scrollTop: '0px' }, 500);
})