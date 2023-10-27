function getComputerChoice () {
    
    let choice = ["rock", "paper", "scissors"];
    let ran = Math.floor(Math.random()*choice.length);
    return ran;
   
}