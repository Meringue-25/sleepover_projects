let playerO = "O";
let playerX = "X";
let curPlayer = playerO;

let gameboard = ["", "", "", "", "", "", "", "", ""]
let boardCubes;

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

    checkwinner()
}