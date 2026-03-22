let playerO = "O";
let playerX = "X";

// first player is always O
let curPlayer = playerO;

let gameboard = ["", "", "", "", "", "", "", "", ""]
let boardCubes;

let winningcubes = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

window.onload = function()  {
    boardCubes = document.getElementsByClassName("board-cube");
    for (let cube of boardCubes) {
        cube.addEventListener("click", placeCube);
    }
}

function placeCube() {

    const index = parseInt(this.getAttribute("data-cell-index"));
    if (gameboard[index] !== "") {
        return;
    }

    gameboard[index] = curPlayer;
    this.innerText = curPlayer;
   
    // change player
    curPlayer = (curPlayer == playerO) ? playerX : playerO;

    // check winner
    checkwinner();
    

}

function checkwinner() {
    for (let wincube of winningcubes) {
        let a = gameboard[wincube[0]];
        let b = gameboard[wincube[1]];
        let c = gameboard[wincube[2]];

        if (a == b && b == c && a != "") {
            for (let i = 0; i < gameboard.length; i++) {
                if (wincube.includes(i)) {
                    boardCubes[i].classList.add("winning-board-cube");
                }
            }
        }
    }
}

function restartButton() {
    
}