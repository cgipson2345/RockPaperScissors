function getComputerChoice () {
    
    let choice = ["rock", "paper", "scissors"];
    let ran = Math.floor(Math.random()*choice.length);
    return choice[ran];
   
}
compChoice = getComputerChoice();
console.log(compChoice);

function getPlayerChoice () {
    let x = false;
let t = "nothing"
while(x === false) {
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


function game(){
    let playScore = 0;
    let compScore = 0;
    let holder = "-1"
    while(playScore !== 3 &&  compScore !== 3){
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
}

game();