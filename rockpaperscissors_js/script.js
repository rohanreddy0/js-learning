function getComputerChoice(){
    const randomNo = Math.random();
    console.log(randomNo);
    if(randomNo <= 0.333){
        return "rock";
    }
    else if (randomNo > 0.333 && randomNo <= 0.666){
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice(){
    let humanChoice;
    return humanChoice = prompt("Choose rock, paper or scissors").toLowerCase();
}

function playRound(humanChoice, computerChoice){
    if(humanChoice === computerChoice){
        return "It is a draw !";
    }

    // Rock - Paper
    else if (humanChoice === "rock" && computerChoice === "paper"){
        return "Computer wins - paper beats rock";
    }
    else if (humanChoice === "paper" && computerChoice === "rock"){
        return "You win - paper beats rock";
    }

    // Rock - Scissors
    else if (humanChoice === "rock" && computerChoice === "scissors"){
        return "You win - rock beats scissors";
    }
    else if (humanChoice === "scissors" && computerChoice === "rock"){
        return "Computer wins - rock beats scissors";
    }

    // Paper-Scissors
    else if (humanChoice === "paper" && computerChoice === "scissors"){
        return "Computer wins - scissors beats paper";
    }
    else if (humanChoice === "scissors" && computerChoice === "paper"){
        return "You win - scissors beats paper";
    }
}

let humanScore = 0;
let computerScore = 0;

