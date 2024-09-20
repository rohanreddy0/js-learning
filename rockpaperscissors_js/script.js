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


console.log(getHumanChoice());