let userscore = 0;
let compscore = 0;
const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
let gencompchoice = () => {
    const choices = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * 3);
    return choices[random];
};
const drawgame = () => {
    msg.innerText = "Game was Draw.Play again";
    msg.style.backgroundColor = "#081b31";

};
const showwinner = (userWin, userchoice, compchoice) => {
    if (userWin) {
        userscore++;
        userscorepara.innerText = userscore;
       msg.innerText = `You win! Your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
    }
    else {
        compscore++;
        compscorepara.innerText = compscore;
        msg.innerText = `You lost. ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "red";
    }

};

const playgame = (userchoice) => {
    const compchoice = gencompchoice();
    if (userchoice == compchoice) {
        drawgame();

    }
    else {
        let userWin = true;
        if (userchoice === "rock") {
            //scissors, paper
            userWin = compchoice === "paper" ? false : true;
        } else if (userchoice === "paper") {
            //rock, scissors
            userWin = compchoice === "scissors" ? false : true;
        } else {
            //rock, paper
            userWin = compchoice === "rock" ? false : true;
        }
        showwinner(userWin, userchoice, compchoice);

    }


};
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);

    });
});

