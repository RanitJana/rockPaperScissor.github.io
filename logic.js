let playerScore = 0;
let computerScore = 0;

let playerScoreHTML = document.querySelector("#playerScore");
let computerScoreHTML = document.querySelector("#computerScore");


let choice = document.querySelectorAll(".choice");
let winner = document.querySelector("#winner");
const options = ["rock", "paper", "scissor"];

let playeGame = (userChoice, randIdx) => {
    let computerChoice = options[randIdx];
    if (userChoice === computerChoice) {
        winner.innerText = "Draw!!";
        winner.style.backgroundColor = "orange";
    }
    else {
        let userWin = true;

        if (userChoice === "rock") {
            if (computerChoice === "paper") userWin = false;
        }
        else if (userChoice === "paper") {
            if (computerChoice === "scissor") userWin = false;
        }
        else {
            if (computerChoice === "rock") userWin = false;
        }

        if (userWin) {
            playerScore++
            winner.innerText = `You Won!! ${userChoice} beats ${computerChoice}.`
            winner.style.backgroundColor = "green";
        }
        else {
            computerScore++;
            winner.innerText = `You Lost!! ${computerChoice} beats ${userChoice}.`;
            winner.style.backgroundColor = "red";
        }
        playerScoreHTML.innerText = playerScore;
        computerScoreHTML.innerText = computerScore;
    }
}

let genRandom = (userChoice) => {
    let randIdx = Math.floor(Math.random() * 3);
    playeGame(userChoice, randIdx);
}


choice.forEach((val) => {
    val.addEventListener("click", () => {
        let userChoice = val.getAttribute("id");
        genRandom(userChoice);
    });
});