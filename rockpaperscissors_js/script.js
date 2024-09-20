function getComputerChoice(){
    const randomNo = Math.random();
    if(randomNo <= 0.333){
        console.log("Computer chose: rock")
        return "rock";
    }
    else if (randomNo > 0.333 && randomNo <= 0.666){
        console.log("Computer chose: paper")
        return "paper";
    } else {
        console.log("Computer chose: scissors")
        return "scissors";
    }
}

function getHumanChoice(){
    let humanChoice;
    humanChoice = prompt("Choose rock, paper or scissors").toLowerCase();
    console.log(`You chose: ${humanChoice}`);
    return humanChoice;
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

console.log(playRound(getHumanChoice(), getComputerChoice()));