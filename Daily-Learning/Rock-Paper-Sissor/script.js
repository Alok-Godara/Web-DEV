let userScore = 0;
let computerScore = 0;

const msg = document.querySelector("#msg");
const choices = document.querySelectorAll(".choice");
const compScorePara = document.querySelector("#computer-score");
const userScorePara = document.querySelector("#user-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * 3)];
};

const drawGame = () => {
    console.log("Game was Draw.");
    msg.innerText = "Draw !";
};

const showWinner = (userWin, userChoice, computerChoice) => {
    if(userWin){
        console.log(`you win ! , Your ${userChoice} beats ${computerChoice}.`);
        msg.innerText = `you win ! , Your ${userChoice} beats ${computerChoice}.`;
        userScore++;
        userScorePara.innerText = userScore;
    } 
    else{
        console.log(`you lose ! , ${computerChoice} beats Your ${userChoice}.`);
        msg.innerText = `you lose ! , ${computerChoice} beats Your ${userChoice}.`;
        computerScore++;
        compScorePara.innerText = computerScore;
    } 
};

const playGame = (userChoice) => {
    // generating Bot's Choice -> modulur way of programming = making functions for each work.
    const computerChoice = genCompChoice();
    console.log(computerChoice, "was selected by computer.");

    //finding winner
    if (userChoice === computerChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = computerChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper") {
            userWin = computerChoice === "scissors" ? false : true;
        }
        else{
            userWin = computerChoice === "rock" ? false : true;
        }

        showWinner(userWin, userChoice, computerChoice);
    }

};

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        console.log(`${userChoice} was clicked.`);
        playGame(userChoice);
    });
});
