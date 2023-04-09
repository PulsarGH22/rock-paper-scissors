function getComputerChoice(){

    let randomChoice = Math.floor(Math.random() * 2);
    let RPS = '';

    if(randomChoice==1){
        RPS = 'Rock';
    }
    else if (randomChoice==2){
        RPS='Paper';
    }
    else{
        RPS='Scissors';
    }

    return RPS;

}

function roundResult(playerSelection,computerSelection){

    //rock beats scissors
    //scissors beats paper
    //paper beats rock

    let playerLowerCase = playerSelection.toLowerCase();
    let computerLowerCase = computerSelection.toLowerCase();



    if((playerLowerCase=='rock' && computerLowerCase=='scissors') || 
    (playerLowerCase=='scissors' && computerLowerCase=='paper') ||
    (playerLowerCase=='paper' && computerLowerCase=='rock')){
        return `You Win! ${playerLowerCase} beats ${computerLowerCase}`;
    }
    else if (playerLowerCase==computerLowerCase)
    {
        return `It's a tie!`;
    }
    else{
        return `You Lose! ${computerLowerCase} beats ${playerLowerCase}`;
    }

}

let computer = getComputerChoice();

console.log(computer);

let input = prompt('Please choose Rock, Paper or Scissors');

console.log(roundResult(input, computer));