
var computerChoice = Math.random();

if (computerChoice < 0.34) {
    computerChoice = "rock";
} else if(computerChoice <= 0.67) {
    computerChoice =  "paper";
} else {
    computerChoice =  "scissors";
} 

console.log("Computer: " + computerChoice);
document.getElementById("computer").innerHTML = "Computer: " + computerChoice;
document.getElementById("computer").innerHTML = "the game is a tie:";
document.getElementById("computer").innerHTML = "computer picked " + computerChoice;

var compare = function(choice1, choice2){

    if(choice1 === choice2) {
        document.getElementById("winner").innerHTML = "The Game is a Tie: "; 
        document.getElementById("computer").innerHTML = "Computer: " + computerChoice;
        document.getElementById("computer").innerHTML = "computer picked " + computerChoice;
        return "The result is a tie!";
    } else if (choice1 ===  "rock") {
        
        if(choice2 ===  "scissors"){
             document.getElementById("computer").innerHTML = "computer:" + computerChoice;
             document.getElementById("winner").innerHTML = "The Game is a Tie: "; 
             document.getElementById("computer").innerHTML =  "computer picked " + computerChoice; 
            return  "rock wins";
        }else{
            return  "paper wins";   
        }
    }
    else if(choice1 ===  "paper") {

        if(choice2 ===  "rock") {
            return "paper wins";
        } else {
            return "scissors wins";    
        }
    }
}

