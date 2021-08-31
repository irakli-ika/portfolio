// start header scrolling function
$(window).scroll(() => {
    let header = $('header'),
        scroll = $(window).scrollTop();

    if (scroll >= 50) header.addClass('bg');
    else header.removeClass('bg');
});

// start smooth animation
$("#click-here").on("click", (e) => {
    // 1
    e.preventDefault();
    // 2
    const href = $('#click-here').attr("href");
    // 3
    $("html, body").animate({ scrollTop: $(href).offset().top }, 800);
});

// mobile-nav open/close
// open modal
$('#mobile-Open').click(() => {
    $('.mobile-nav').css('display', 'block')
    $('#mobile-Close').css('display', 'inline-block')
    $('#mobile-Open').css('display', 'none')
    $('#logo-white').css('display', 'none')
    $('#logo-black').css('display', 'block')
})
// close modal
$('#mobile-Close').click(() => {
    $('.mobile-nav').css('display', 'none')
    $('#logo-white').css('display', 'block')
    $('#logo-black').css('display', 'none')
    $('#mobile-Close').css('display', 'none')
    $('#mobile-Open').css('display', 'inline-block')
})
// mobile-nav under-nav open/close
$(document).ready(function(){
    
    $('.mobile__nav-item > span').click(function() {

        $('.mobile__modal-lists').slideUp()

        if ( $(this).parent().hasClass('active-sub-nav') ) {
            
            $('.mobile__nav-item').removeClass('active-sub-nav')
            
            $(this).parent().removeClass('active-sub-nav')

            $('.mobile__modal-lists').slideUp()

        } else {
            $('.mobile__nav-item').removeClass('active-sub-nav')

            $(this).next('.mobile__modal-lists').slideDown()

            $(this).parent().addClass('active-sub-nav')

        }

    })
})

// section navigation open/close
$('.sec-mobile-nav-btn').click(() => {
    $('.sec-mobile-nav-lists').slideToggle()
})