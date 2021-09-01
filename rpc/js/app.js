let userCounter = 0
let computerCounter = 0
//? end import variables

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors']
  const randNum = Math.floor(Math.random() * 3)
  return choices[randNum]
}
//? end random numbers function 

function win() {
  userCounter++
  document.getElementById('user_score').innerHTML = userCounter
  if (userCounter === 10) {
    alert(`Total points -> ${userCounter} : ${computerCounter}, You win`)
    confirm('Try again?')
    if(confirm) window.location.reload()
  }
}
function lose() {
  computerCounter++
  document.getElementById('computer_score').innerHTML = computerCounter
  if (computerCounter === 10) {
    alert(`Total points -> ${userCounter} : ${computerCounter}, You lost`)
    confirm('Try again?')
    if(confirm) window.location.reload()
  }
}
function draw() {
  console.log('Draw')
}
//? end win, lose, draw function

function player(playerChoice) {
  const computerChoice = getComputerChoice()
  switch (playerChoice + computerChoice) {
    case "rockscissors":
    case "scissorspaper":
    case "paperrock":
      win()
      break;
  
    case "scissorsrock":
    case "paperscissors":
    case "rockpaper":
      lose()
      break;
    
    case "scissorsscissors":
    case "paperpaper":
    case "rockrock":
      draw()
      break;
  }
  
    document.querySelector('.score_icons').insertAdjacentHTML('afterbegin', `<div class="score_icons_content row">
                                                                              <div class="col choises">
                                                                                <img src="img/${playerChoice}.png" class="score_icon" alt="rock">
                                                                              </div>
                                                                              <div class="col choises">
                                                                                <img src="img/${computerChoice}.png" class="score_icon" alt="rock">
                                                                              </div>
                                                                            </div>`)
  
  //? end innerHtml 
}
//? end promise function 

function main() {
  document.getElementById("rock").addEventListener('click', ()=> {
    player('rock')
  })

  document.getElementById("paper").addEventListener('click', ()=> {
    player('paper')
  })

  document.getElementById("scissors").addEventListener('click', ()=> {
    player('scissors')
  })
}

main()
//? end click function 

document.querySelector('h1').addEventListener('click', (e) => {
  window.location.reload()
})
