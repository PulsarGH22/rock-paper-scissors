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

    let playerLowerCase = playerSelection.toLowerCase();
    let computerLowerCase = computerSelection.toLowerCase();

    console.log('You chose: ' + playerLowerCase);
    console.log('Computer chose: ' + computerLowerCase);

    if((playerLowerCase=='rock' && computerLowerCase=='scissors') || 
    (playerLowerCase=='scissors' && computerLowerCase=='paper') ||
    (playerLowerCase=='paper' && computerLowerCase=='rock')){
        return 1;
    }
    else if (playerLowerCase==computerLowerCase)
    {
        return 2;
    }
    else{
        return 0;
    }

}

function game(){

    let input='';
    let playerPoints=0;
    let computerPoints=0;
    let result=0;
    let resultString='';
    let computerChoice='';
    for(let i=1;i<=5;i++){
        input = prompt(`Round ${i}. Please choose Rock, Paper or Scissors...`);
        computerChoice=getComputerChoice();
        result =roundResult(input, computerChoice);
        if(result==0)
        {
            resultString=`You Lose! ${computerChoice.toLowerCase()} beats ${input}`;
            computerPoints++;
        }
        else if(result==1){
            resultString=`You Win! ${input} beats ${computerChoice.toLowerCase()}`;
            playerPoints++;
        }
        else{
            resultString=`It's a tie!`;
        }
        console.log(`Round ${i} result: ` + resultString);
        console.log(`Score: ${playerPoints} - ${computerPoints}`);
        
    }

    if(playerPoints>computerPoints)
    {
        console.log(`You win the game!`);
    }
    else if (playerPoints<computerPoints)
    {
        console.log(`You lose the game!`);
    }
    else{
        console.log(`It's a tie game!`);

    }
}

game();


