let boxes = document.querySelectorAll('.box');
let reset = document.querySelector('#reset');
let newGame = document.querySelector('#nbt');
let msgContainer = document.querySelector('.msg-container');
let msg = document.querySelector('#msg');

let turnO = true;//playerX,playerO

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];

let count = 0;
boxes.forEach((box) => {
    box.addEventListener('click', () => {
        count++;
        console.log(count);
        console.log('box was clicked');
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        if ((count === 9)) {
            msg.innerText = `Game is Draw`;
            msgContainer.classList.remove('hide');
        } else {
            checkWinner();
        }
    });
});



const drawCOndition = () => {

}




const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    // msg.innerText = `Congratulations, Winner is ${winner}`;
    if ((winner === 'O')) {
        msg.innerText = `Congratulations, First player is Winner  `;
    } else {
        msg.innerText = `Congratulations, Second player is Winner  `;
    }
    msgContainer.classList.remove('hide');
    disableBoxes();
}

nbt.addEventListener('click', () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add('hide');
    count = 0;
});

reset.addEventListener('click', () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add('hide');
    count = 0;  
});


const checkWinner = (box) => {
    for (pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("winner", pos1Val);
                showWinner(pos1Val);
            }
        }
    }
}