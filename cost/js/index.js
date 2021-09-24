$(document).ready(function() {
    $('nav > ul > li').hover(function() {
        $(this).children('.sub-nav').stop(false).slideToggle('slow')
    })
})