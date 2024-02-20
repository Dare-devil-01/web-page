let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#message");

let turnO = true;

const winPatterns = [[0, 1, 2], [0, 3, 6], [0, 4, 8], [1, 4, 7], [2, 5, 8], [2, 4, 6], [3, 4, 5], [6, 7, 8]];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const showWinner = (winner) => {
    msg.innerText = "Congrats, The Winner is " + winner;
    msgContainer.classList.remove("hide");
    disableBtn();
};
const disableBtn = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};
const enableBtn = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};
const checkWinner = () => {
    for (let Pattern of winPatterns) {
        //console.log(Pattern[0],Pattern[1],Pattern[2]);
        //console.log(boxes[Pattern[0]].innerText, boxes[Pattern[1]].innerText, boxes[Pattern[2]].innerText,);

        let pos1Val = boxes[Pattern[0]].innerText;
        let pos2Val = boxes[Pattern[1]].innerText;
        let pos3Val = boxes[Pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                ///console.log("winner", pos1Val);
                showWinner(pos1Val);

            }
        }
    }
};
const resetGame = () => {
    turnO = true;
    enableBtn();
    msgContainer.classList.add("hide");
};
newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);