function getComputerChoice () {
    
    let choice = ["rock", "paper", "scissors"];
    let ran = Math.floor(Math.random()*choice.length);
    return choice[ran];
   
}

console.log(getComputerChoice());

let x = false;
let t = "nothing"
while(x === false) {
     t  = prompt("welcome to rock paper scissors! enter rock, paper, or scissors to play!") 
     t = t.toLowerCase();
     if(t === "rock" || t === "scissors" || t === "paper") {
        x = true;
     }
  

}
console.log(t);

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