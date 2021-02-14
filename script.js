

function game () {
    
    let c = 0;
    let u = 0;
    for (i=0; i < 5; i++) {

        let user = prompt("Will you chose rock, paper, or scissors?")

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
         console.log('Paper beats rock. You lose!!');
         c++;
     }
     else if (user.toLowerCase() === "rock" && computer.toLowerCase() == "scissors") {
        console.log('Rock beats scissors. You win!!');
         u++;
     }
     else if (user.toLowerCase() === "paper" && computer.toLowerCase() === "rock") {
        console.log('Paper beats rock. You win!!');
         u++;
     }
     else if (user.toLowerCase() === "paper" && computer.toLowerCase() === "scissors") {
        console.log('Scissors beats paper. You lose!');
         c++;
     }
     else if (user.toLowerCase() === "scissors" && computer.toLowerCase() === "paper") {
        console.log('Scissors beats paper. You win!!');
         u++;
     }
     else if (user.toLowerCase() === "scissors" && computer.toLowerCase() === "rock") {
        console.log('Rock beats scissors. You lose!!');
         c++;
     } 
     else if (user.toLowerCase() === computer.toLowerCase()) {
         console.log("YouTied. Try Again");
     }
     else if (user.toLowerCase() != "rock" || "paper" || "scissors") {
        console.log("Please choose rock, paper, or scissors.");
     }
    else if (user.toLowerCase() === null) {
        console.log("Please choose rock, paper, or scissors.");
    }
     else {
        console.log("You Tied. Try Again");
     }
    
     console.log("Computer score is " + c);
     console.log("User score is " + u)
     console.log(user);
     console.log(computer);
    }

    
 };


game();



