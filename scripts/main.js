

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
const playedWhat = document.querySelector('h3');
function onegame(playerChoice) {
    //let playerChoice = prompt("rock/ paper/ scissors?");
    let computerChoice = computerPlay();
    result = playRound(playerChoice, computerChoice);

    if(result === "computer win"){
        computerScore += 1;
    }else if(result === "player win"){
        playerScore += 1;
    }
    playedWhat.textContent = `Player played:${playerChoice} and Computer: ${computerChoice}`;
    return result;

}

function uiplay(e){
    let res = onegame(e.target.id);
    let scores = `Computer: ${computerScore} and Player: ${playerScore}`;
    const main_res = document.querySelector('#display h1');
    const round_res = document.querySelector('#display h2');
    main_res.textContent = scores;
    round_res.textContent = res;

    if(computerScore == 5){
        round_res.textContent = "COMPUTER WON";
        computerScore = playerScore = 0;
    }else if(playerScore == 5){
        round_res.textContent = "PLAYER WON";
        computerScore = playerScore = 0;
    }

}

const user_paper = document.querySelector('#paper');
const user_rock = document.querySelector('#rock');
const user_scissors = document.querySelector('#scissors');

user_paper.addEventListener('click',uiplay);
user_rock.addEventListener('click',uiplay);
user_scissors.addEventListener('click',uiplay);

