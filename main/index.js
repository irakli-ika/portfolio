// start header scrolling function
$(window).scroll(() => {
    let header = $('header'),
        scroll = $(window).scrollTop();

    if (scroll >= 20) header.addClass('bg');
    else header.removeClass('bg');
});

// scroll down function
$('.banner button').click(function(){
    $('html, body').animate({scrollTop: 900},'50');
});

// start smooth animation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});