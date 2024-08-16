let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genComputerChoice = () => {
    const option = ["rock", "paper", "scissors"];
    const idx = Math.floor(Math.random()*3);
    return option[idx];
};

const drawGame = () => {
    msg.innerText = "Game was draw. Try again.";
    msg.style.backgroundColor = "#091b31";
};

const showWin = (userWin, userChoice, compChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green"
    }else{
        compScore++;
        compScorePara.innerText = compScore
        msg.innerText = `You lost! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "Red"
    };
};
const playGame = (userChoice) => {
    const compChoice = genComputerChoice();

    if(userChoice===compChoice){
        drawGame();
    }else{
      let userWin = true
      if(userChoice==="rock"){
        userWin = compChoice==="paper" ? false:true;
      }else if(userChoice==="paper"){
        userWin = compChoice==="scissors" ? false:true;
      }else{
        userWin = compChoice==="rock" ? false:true;
      }
      showWin(userWin, userChoice, compChoice);
    };
};
choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
    });
});