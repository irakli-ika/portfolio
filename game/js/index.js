let clickCounter = 0
const itemsArr = [
    {
        item : '../img/ka-boom-icon.png',
        status : 'boom'
    },
    {
        item : '../img/ka-boom-icon.png',
        status : 'boom'
    },
    {
        item : '../img/ka-boom-icon.png',
        status : 'boom'
    },
    {
        item : '../img/grapes-icon.png',
        status : 'grapes'
    },
    {
        item : '../img/lemon-icon.png',
        status : 'lemon'
    },
    {
        item : '../img/mango-icon.png',
        status : 'mango'
    },
    {
        item : '../img/pear-icon.png',
        status : 'pear'
    },
    {
        item : '../img/pineapple-icon.png',
        status : 'pineapple'
    },
    {
        item : '../img/pomegranate-icon.png',
        status : 'pomegranate'
    },
    {
        item : '../img/watermelon-icon.png',
        status : 'watermelon'
    }
]

let randomNum = []

while (randomNum.length < itemsArr.length) {
    let rn = Math.floor(Math.random() * itemsArr.length)
        if(randomNum.indexOf(rn) == - 1) randomNum.push(rn)
}
document.querySelector('.addItems').innerHTML = randomNum.map((item) => {
   return  `<div class="col-md-5 text-center items" data-status="${itemsArr[item].status}">
                <div class="mb-4" style="pointer-events: none"><img src="img/${itemsArr[item].item}" alt=""></div>
            </div>`
           
}).join('')
function startGame() {
    document.querySelectorAll('.items').forEach((item) => {
        item.addEventListener("click", (e) => {
            if (e.target.getAttribute('data-status') !== 'boom') {
                clickCounter++ 
                e.target.classList.add('show')        
                if (clickCounter == (itemsArr.length - 3)) {
                    setTimeout((e) => {
                        alert('You Win')
                        if(confirm('Try Again?')) window.location.reload()
                        else window.location.reload()}, 200)
                }
            }
            else {
                e.target.classList.add('show')
                setTimeout((e) => {
                    alert('Game Over!')
                    if(confirm('Try Again?')) window.location.reload()
                    else window.location.reload()}, 200)
            }
        })
    })
}