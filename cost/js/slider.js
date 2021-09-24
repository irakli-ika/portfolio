const slider = document.querySelectorAll('.slider__container > .slide-img')
const dotsParent = document.querySelector('.dots ul')
const dots = document.querySelectorAll('.dots ul li')
const chooseDot = document.querySelector('.choose-dot')

let counter = 1

//* marginLeft-ი ასრულებს smooth ეფექტს
let marginLeft = -6

//* ადგენს პირველი ელემენტის კოორდინატებს
let defLoc = dots[0].offsetLeft / dotsParent.offsetWidth * 100
chooseDot.style.left = defLoc + '%'
//* --- //


slide(counter, marginLeft)

//* ავტომატური გადართვის ტაიმერი
let timer = setInterval(autoSlide, 2000);
//* ავტომატური გადართვის ფუნქცია
function autoSlide() {
    counter += 1
    marginLeft += 45
    slide(counter, marginLeft)
}

//* მექანიკური გადართვა
function currentSlide(dot) {
    counter = dot
    marginLeft = (dot - 1) * 45 - 6
    slide(counter)
    resetTimer()
}

//* ავტომატური გადართვის გადატვირთვა
function resetTimer() {
    clearInterval(timer)
    timer = setInterval(autoSlide, 2000);
}

function slide(n) {
    for(let i = 0; i < slider.length; i++) {
        slider[i].style.opacity = "0"
    }
    for(let i = 0; i < slider.length; i++) {
        dots[i].style.color = '#2d3742'
    }
    if (n > slider.length) {
        counter = 1
        marginLeft = -6
    }
    if (n < 1) {
        counter = slider.length
        marginLeft = (dots.length - 1) * 45
    }

    dots[counter - 1].style.color = '#ffffffcf'
    slider[counter - 1].style.opacity = '1'
    chooseDot.style.marginLeft = marginLeft + 'px'
}
