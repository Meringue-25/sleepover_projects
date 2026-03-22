let playerO = "O";
let playerX = "X";
let curPlayer = playerO;

let gameboard = ["", "", "", "", "", "", "", "", ""]
let boardCubes;

let winningcubes = [
    [0, 1, 2]
    [3, 4, 5]
    [6, 7, 8]
    [0, 3, 6]
    [1, 4, 7]
    [2, 5, 8]
    [0, 4, 8]
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
    if (gameboard[index] != "") {
        return;
    }

    this.innerText = curPlayer;
    gameboard[index] = curPlayer;

    curPlayer = (curPlayer == playerO) ? playerX : playerO;

function checkwinner() {
    for (let winningcube of winningcubes) {
        let a = gameboard[wincube[0]];
        let b = gameboard[wincube[1]];
        let c = gameboard[wincube[2]];

        if (a == b && b == c && a != "") {
            for (let i = 0;)
        }
    }
}