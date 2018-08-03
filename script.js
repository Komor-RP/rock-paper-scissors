let gamesPlayed;
let playerScore;
let computerScore;
game();

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

function playRound(playerSelection, computerSelection) {
	if (playerSelection == computerSelection) {
    return "tie!";
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
    return "You win! " + playerSelection + " beats " + computerSelection;
  } else {
    computerScore++;
    return "You lose! " + computerSelection + " beats " + playerSelection;
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
  for (let i = 0; i<wordLength; i++) {
    wordArray[i] = wordArray[i].toLowerCase();
  }
  return wordArray.join("");
}
