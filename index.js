const buttons = document.querySelectorAll('button');
const playerScoreDisplay = document.querySelector('#player-score');
const computerScoreDisplay = document.querySelector('#computer-score');
const resultDisplay = document.querySelector('#result');
const roundDisplay = document.querySelector('#round');
const gameDisplay = document.querySelector('#game');


let playerScore = 0;
let computerScore = 0;
let roundCount=1;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 'Tie!';
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        playerScore++;
        return `You win! ${playerChoice} beats ${computerChoice}.`;
    } else {
        computerScore++;
        return `You lose! ${computerChoice} beats ${playerChoice}.`;
    }
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    roundCount=1;
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
    resultDisplay.textContent = '';
    roundDisplay.textContent = roundCount;
}

function playAgain(){
    if(prompt('Would you like to play again? (yes/no)').toLowerCase()=='yes'){
        resetGame();
        }
        else{
            //resultDisplay.textContent='Game over! Refresh if you want to play again.';
            gameDisplay.textContent='';
            alert('Game over! Refresh if you want to play again.');
        }
}

function endGame() {
    let message;
    if (playerScore > computerScore) {
        message = 'You win the game!';
    } else if (playerScore < computerScore) {
        message = 'You lose the game.';
    } else {
        message = 'Tie game!';
    }
    resultDisplay.textContent = `${message} Final score: ${playerScore} - ${computerScore}.`;
    setTimeout(playAgain,1000);
    
}

function handleClick(event) {
    const playerChoice = event.target.id;
    const computerChoice = getComputerChoice();
    const roundResult = playRound(playerChoice, computerChoice);
    resultDisplay.textContent = roundResult;
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
    if (roundCount==5) {
        endGame();
    }
    else{
        
        roundDisplay.textContent=++roundCount;
    }
}

resetGame();
buttons.forEach(button => button.addEventListener('click', handleClick));
