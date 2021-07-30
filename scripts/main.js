

function computerPlay() {
    rand = Math.random();
    if (rand == 0){
        return computerPlay();
    }
    if(rand < (1/3)){
        return "rock";
    }
    else if(rand < (2/3)){
        return "paper";
    }
    else {
        return "scissors";
    }
}

function ruleSet(leftSelect, rightSelect){
    if(leftSelect == rightSelect){
        return "tie";
    }
    else {
        if (leftSelect == "rock" && rightSelect == "paper"){
            return "right";
        }
        else if (leftSelect == "paper" && rightSelect == "scissors"){
            return "right";
        }
        else if (leftSelect == "scissors" && rightSelect == "rock"){
            return "right";
        }
        else {
            return "left";
        }
    }
}

function playRound(playerSelection, computerSelection) {
    let result = ruleSet(playerSelection.toLowerCase(), computerSelection);
    if (result == "right"){
        return "computer win";
    }
    else if (result == "left"){
        return "player win";
    }
    else {
        return "tie";
    }
}

let playerScore = computerScore = 0;
function onegame() {
    let playerChoice = prompt("rock/ paper/ scissors?");
    
    result = playRound(playerChoice, computerPlay());

    if(result === "computer win"){
        computerScore += 1;
    }else{
        playerScore += 1;
    }
    return result;

}
