let c = 0;
let u = 0;

function game (user) {

    

        let computer = "";

        let a = Math.random();

            if (a < 0.333) {
                computer = "Rock";
            } else if (a > 0.333 && a < 0.666) {
                computer = "Paper";
            } else {
                computer = "Scissors";
            }
        


   
    if (user.toLowerCase() === "rock" && computer.toLowerCase() === "paper") {
        document.getElementById("results").innerHTML = 'Paper beats rock. You lose';
         c++;
     }
     else if (user.toLowerCase() === "rock" && computer.toLowerCase() == "scissors") {
        document.getElementById("results").innerHTML = 'Rock beats scissors. You win';
         u++;
     }
     else if (user.toLowerCase() === "paper" && computer.toLowerCase() === "rock") {
        document.getElementById("results").innerHTML = 'Paper beats rock. You win';
         u++;
     }
     else if (user.toLowerCase() === "paper" && computer.toLowerCase() === "scissors") {
        document.getElementById("results").innerHTML = 'Scissors beats paper. You lose';
         c++;
     }
     else if (user.toLowerCase() === "scissors" && computer.toLowerCase() === "paper") {
        document.getElementById("results").innerHTML = 'Scissors beats paper. You win';
         u++;
     }
     else if (user.toLowerCase() === "scissors" && computer.toLowerCase() === "rock") {
        document.getElementById("results").innerHTML = 'Rock beats scissors. You lose';
         c++;
     } 
     else if (user.toLowerCase() === computer.toLowerCase()) {
         document.getElementById("results").innerHTML = "YouTied. Try Again";
     }
     else if (user.toLowerCase() != "rock" || "paper" || "scissors") {
        document.getElementById("results").innerHTML = "Please choose rock, paper, or scissors.";
     }
    else if (user.toLowerCase() === null) {
        document.getElementById("results").innerHTML = "Please choose rock, paper, or scissors.";
    }
     else {
        document.getElementById("results").innerHTML = "You Tied. Try Again";
     }

     document.getElementById("scoreU").innerHTML = u;
     document.getElementById("scoreC").innerHTML = c;

     if (u >= 5) {
        document.getElementById("results").innerHTML = "You win! Congratulation!!";
        u = 0;
        c = 0;
    }
    else if (c >= 5) {
        document.getElementById("results").innerHTML = "You lose. I'm sorry.";
        u = 0;
        c = 0;
    }

    };

   
 
 let user;

 document.getElementById("rock").addEventListener("click", function() {
     user = "Rock";
     game(user);
 })
 
 document.getElementById("paper").addEventListener("click", function() {
     user = "Paper";
     game(user);
 })
 
 document.getElementById("scissors").addEventListener("click", function() {
     user = "Scissors";
     game(user);
 })






