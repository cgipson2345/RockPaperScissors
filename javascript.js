function getComputerChoice () {
    
    let choice = ["rock", "paper", "scissors"];
    let ran = Math.floor(Math.random()*choice.length);
    return choice[ran];
   
}
let compChoice = getComputerChoice();
console.log(compChoice);

function getPlayerChoice () {
    let x = false;
let t = "nothing"
while(x === false) {
     // @ts-ignore
     t  = prompt("welcome to rock paper scissors! enter rock, paper, or scissors to play!") 
     t = t.toLowerCase();
     if(t === "rock" || t === "scissors" || t === "paper") {
        x = true;
     }  
     
}
        return t;
}


function GameRound(ti, ran) {
    if (ti === ran) {
        return("tie!");
    }
    if(ti === "rock" && ran === "scissors") {
        return("You Win! Rock beats Scissors")
    }
    if(ti === "rock" && ran === "paper") {
        return("You Lose! Paper beats Rock")
    }
    if(ti === "scissors" && ran === "paper") {
        return("You Win! Scissors beats paper!")
    }
    if(ran === "rock" && ti === "scissors") {
        return("You Lose! Rock beats Scissors")
    }
    if(ran === "rock" && ti === "paper") {
        return("You Win! Paper beats Rock")
    }
    if(ran === "scissors" && ti === "paper") {
        return("You Lose! Scissors beats paper!")
    }

}

/*
function game(){
    let playScore = 0;
    let compScore = 0;
    let holder = "-1"
    while(playScore !== 3 &&  compScore !== 3){
        // @ts-ignore
        holder = GameRound(getPlayerChoice(), getComputerChoice());
        console.log(holder);
        if(holder.search("Tie") != -1) {

        }
        else if(holder.search("Lose") == -1){
            playScore = ++playScore;
        }
        else {
            compScore = ++compScore;
        }
    }
    if(playScore ===  3){
        console.log("YOU WON THE ENTIRE GAME");
    }
    else {
        console.log("You lost better luck next time!");
    }
}*/



//game();
const fullGame = document.querySelector('body');
const scoreCounter = document.createElement('div');
// @ts-ignore
let playerScore = 0;
let computerScore = 0;
scoreCounter.classList.add('scoreCounter');
scoreCounter.style.borderStyle = 'solid';
scoreCounter.style.borderColor = 'black';
scoreCounter.textContent = 'Player  Computer';

const linebreak = document.createElement("br");
scoreCounter.appendChild(linebreak);


const scores = document.createElement('div');
scores.style.whiteSpace = 'pre';
scores.textContent = playerScore + "               " + computerScore;
scoreCounter.appendChild(scores);
const additionalText = document.createElement('div');
additionalText.textContent = "";

// @ts-ignore
fullGame.appendChild(scoreCounter);

function getGameOutcome(string){
    if(string.search("Tie") != -1) {
        
    }
    else if(string.search("Lose") == -1){
        computerScore = computerScore + 1;
        scores.textContent = playerScore + "               " + computerScore;

    }
    else {
        playerScore = playerScore + 1;
        scores.textContent = playerScore + "               " + computerScore;
    }
    if(computerScore >= 5){
       // scoreCounter.appendChild(linebreak);
        additionalText.textContent = "Computer wins!";
        scoreCounter.appendChild(additionalText);
        playerScore = 0;
        computerScore = 0;
    }
    else if(playerScore >= 5) {
       // scores.appendChild(linebreak);
        additionalText.textContent = "Player wins!";
        scoreCounter.appendChild(additionalText);
        playerScore = 0;
        computerScore = 0;
    }

}




let Tracker = 0;
let Test = "";
const rock = document.querySelector('#rock');
// @ts-ignore
rock.addEventListener('click',() => 
{
    getGameOutcome(GameRound("rock", getComputerChoice()))
    
    
});
const paper = document.querySelector('#paper');
// @ts-ignore
paper.addEventListener('click',() => 
{
    
    getGameOutcome(GameRound("paper", getComputerChoice()));
});
const scissors = document.querySelector('#scissors');
// @ts-ignore
scissors.addEventListener('click',() => 
{
    
    getGameOutcome(GameRound("scissors", getComputerChoice()));
});



