let gamesPlayed;
let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('.btn');
const result = document.querySelector('h2#result');
const playerScoreDisplay = document.querySelector("#player");
const computerScoreDisplay = document.querySelector('#computer');
const gameButton = document.querySelector('#gameStart button');
let gameStarted = false;

buttons.forEach(button => button.addEventListener("mouseenter", mouseEnter));
buttons.forEach(button => button.addEventListener("mouseleave", mouseLeave));
buttons.forEach(button => button.addEventListener("click", onClick));
gameButton.addEventListener('click', gameStarter);


/*Function Built for First Part of Exercise*/
function game() {
  gamesPlayed = 0;
  playerScore = 0;
  computerScore = 0;
  while((playerScore + computerScore) < 5) {
    let playerSelection = prompt("What do you choose?");
    playerSelection = caseChanger(playerSelection);
    let computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
    gamesPlayed ++;
  }
  if (playerScore > computerScore) {
    console.log("You won!");
  } else {
    console.log("You lost.");
  }
}

function playRound(playerSelection) {
  let computerSelection = computerPlay();
	if (playerSelection == computerSelection) {
    return "Tie!";
  } else if (playerSelection == "rock") {
    if (computerSelection == "scissors") {
      return resultEvaluator("win", playerSelection, computerSelection);
    } else {
      return resultEvaluator("lose", playerSelection, computerSelection);
    }
  } else if (playerSelection == "paper") {
    if (computerSelection == "rock") {
      return resultEvaluator("win", playerSelection, computerSelection);
    } else {
      return resultEvaluator("lose", playerSelection, computerSelection);
    }
  } else if (playerSelection == "scissors") {
    if (computerSelection == "paper") {
      return resultEvaluator("win", playerSelection, computerSelection);
    } else {
      return resultEvaluator("lose", playerSelection, computerSelection);
    }
  } else {
    return "something went wrong";
  }
}

function resultEvaluator(result, playerSelection, computerSelection) {
  if (result == "win") {
    playerScore++;
    return "You win! " + caseChanger(playerSelection) + " beats " + caseChanger(computerSelection);
  } else {
    computerScore++;
    return "You lose! " + caseChanger(computerSelection) + " beats " + caseChanger(playerSelection);
  }
}

function computerPlay() {
  let divider = Math.random();
  let computerSelection;
  if (divider < (1/3)) {
    computerSelection = "rock";
  } else if (divider < (2/3)) {
    computerSelection = "paper";
  } else {
    computerSelection = "scissors";
  }
  return computerSelection;
}

function caseChanger(word) {
  let wordLength = word.length;
  let wordArray = word.split("");
  for (let i = 0; i < wordLength; i++) {
    if (i == 0) {
      wordArray[i] = wordArray[i].toUpperCase();
    } else {
      wordArray[i] = wordArray[i].toLowerCase();
    }
  }
  return wordArray.join("");
}

/*Hovered Buttons*/
function mouseEnter(e) {
  if (gameStarted) {
    e.target.classList.add('hovered');
  }
}
/*Hovered Buttons*/
function mouseLeave(e) {
  e.target.classList.remove('hovered');
}
/*Gameplay*/
function onClick(e) {
  if (gameStarted) {
    let playerSelection;
    let buttonClicked;
    if (e.target.matches('.fas')) {
      buttonClicked = e.target.parentNode;
      playerSelection = e.target.parentNode.getAttribute('id');
    } else {
      buttonClicked = e.target;
      playerSelection = e.target.getAttribute('id');
    }
    buttonClicked.classList.toggle('active');
    result.textContent = playRound(playerSelection);
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
    buttonClicked.classList.toggle('active');
  }
  if ((playerScore == 5) || (computerScore == 5)) {
    if (playerScore > computerScore) {
      result.textContent = "You won this round!";
    } else {
      result.textContent = "You lost this round.";
    }
    gameButton.textContent = "Play Again!";
    gameButton.style.cssText = "display: inline";
    gameStarted = false;
  }
}

function gameStarter(e) {
  e.target.style.cssText = "display: none";
  playerScore = 0;
  computerScore = 0;
  playerScoreDisplay.textContent = playerScore;
  computerScoreDisplay.textContent = computerScore;
  result.textContent = "";
  gameStarted = true;
  document.querySelector('div#result').style.cssText = "display: block;";
  document.querySelector('div#scoreBoard').style.cssText = "display: flex;";
}
