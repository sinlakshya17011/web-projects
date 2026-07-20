let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score")
const compScorePara = document.querySelector("#comp-score")


const genCompChoice = () => {
    const options = ["rock", "paper", "Scissor"];    
    const randomIndx = Math.floor(Math.random() * 3);
    return options[randomIndx];
    
};
   

const drawGame = () => {
    msg.innerText = "Game Draw , Play Again"
    msg.style.backgroundColor = "#14213d";
}
  
const showWinner = (userwin , userChoice , compChoice) => {
    if(userwin){
        userscore++;
        userScorePara.innerText = userscore;
        msg.innerText = `You Win ! Your ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor = "green";
    } else {
        compscore++;
        compScorePara.innerText = compscore;
        msg.innerText = `You Lose !  ${compChoice} beats your ${userChoice}`
        msg.style.backgroundColor = "red";
    }
}

const playgame = (userChoice) => {
    console.log("user choice = " , userChoice);
    // Generate computer choice
    const compChoice = genCompChoice();
    console.log("comp choice = " , compChoice); 


    if(compChoice===userChoice){
        // Draw choice
        drawGame();
    } else {
        let userwin = true;
        if(userChoice === "rock"){
            // scissors , paper
           userwin = compChoice === "paper" ? false : true;
        } else if ( userChoice === "paper") {
            // scissor rock
           userwin =  compChoice === "scissor" ? false :  true;
        } else { 
             // rock , paper
              userwin = compChoice === "rock" ? false :  true;
        }
           showWinner(userwin , userChoice , compChoice);
    }
};


choices.forEach((choice) =>{
    choice.addEventListener("click" , () => {
    const userChoice = choice.getAttribute("id");
    playgame(userChoice);
    });
});