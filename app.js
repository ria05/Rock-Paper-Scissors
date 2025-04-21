let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const user_score = document.querySelector("#user-score");
const computer_score = document.querySelector("#computer-score");

const genComputerChoice = () =>{
    let options = ["rock","paper","scissors"];
    const randomIndex = Math.floor(Math.random()*3);
    return options[randomIndex];
};

const showWinner = (userWin,userChoice,computerChoice) => {
    if (userWin){
        console.log("wins");
        msg.innerText = `You Wins!! your ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor = "#588157";
        userScore++;
        user_score.innerText = userScore;
    } else {
        console.log("lose");
        msg.innerText = `You Lose!! ${computerChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "#bc4749";
        computerScore++;
        computer_score.innerText = computerScore;
    }
};

const playGame = (userChoice) => {
    console.log(userChoice);
    const computerChoice = genComputerChoice();
    console.log(computerChoice);
    let userWin;
    if (userChoice === computerChoice){
        msg.innerText = "Game was Draw. Play again";
        msg.style.backgroundColor = "#000814";
        return;
    } else{
        userWin = true;
        if (userChoice === "rock") {
            userWin = computerChoice === "paper" ? false : true;
        } else if (userChoice === "paper"){
            userWin = computerChoice === "scissors" ? false : true;
        } else {
            userWin = computerChoice === "rock" ? false : true;
        }
    }
    showWinner(userWin,userChoice,computerChoice);
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});