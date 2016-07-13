
var computerChoice = Math.random();

if (computerChoice < 0.34) {
    computerChoice = "rock";
} else if(computerChoice <= 0.67) {
    computerChoice =  "paper";
} else {
    computerChoice =  "scissors";
} 

console.log("Computer: " + computerChoice);

var compare = function(choice1, choice2){

    if(choice1 === choice2) {
        document.getElementById("winner").innerHTML = "The Game is a Tie: "; 
        document.getElementById("computer").innerHTML = "Computer: " + choice2 + "Human: "+ choice1;
        document.getElementById("buttons").innerHTML = "";
        return
    } else if (choice1 ===  "rock") {
        
        if(choice2 === "paper") {
            document.getElementById("winner").innerHTML = "Computer Wins "; 
            document.getElementById("computer").innerHTML = "Computer: " + choice2 + "Human: "+ choice1;
            document.getElementById("buttons").innerHTML = "";
            return
        } else {
            document.getElementById("winner").innerHTML = "Human Wins "; 
            document.getElementById("computer").innerHTML = "Computer: " + choice2 + "Human: "+ choice1;
            document.getElementById("buttons").innerHTML = "";
            return
        }
    } else if ( choice1 === "scissors"){
        if (choice2 == "paper") {
            document.getElementById("winner").innerHTML = "Human Wins "; 
            document.getElementById("computer").innerHTML = "Computer: " + choice2 + "Human: "+ choice1;
            document.getElementById("buttons").innerHTML = "";
            return
        } else {
            document.getElementById("winner").innerHTML = "Computer Wins "; 
            document.getElementById("computer").innerHTML = "Computer: " + choice2 + "Human: "+ choice1;
            document.getElementById("buttons").innerHTML = "";
        }
    } else if (choice1 == "rock"){

        if (choice2 == "scissors"){
            document.getElementById("winner").innerHTML = "Human Wins "; 
            document.getElementById("computer").innerHTML = "Computer: " + choice2 + "Human: "+ choice1;
            document.getElementById("buttons").innerHTML = "";
            return
         } else {
            document.getElementById("winner").innerHTML = "Computer Wins "; 
            document.getElementById("computer").innerHTML = "Computer: " + choice2 + "Human: "+ choice1;
            document.getElementById("buttons").innerHTML = "";

    } else if (choice1 == "paper"){
      if(choice2 == "scissors") {

        document.getElementById("winner").innerHTML = "Computer Wins "; 
            document.getElementById("computer").innerHTML = "Computer: " + choice2 + "Human: "+ choice1;
            document.getElementById("buttons").innerHTML = "";
            return
        } else {
            document.getElementById("winner").innerHTML = "Human Wins "; 
            document.getElementById("computer").innerHTML = "Computer: " + choice2 + "Human: "+ choice1;
            document.getElementById("buttons").innerHTML = "";

  







}