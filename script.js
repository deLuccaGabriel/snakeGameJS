let gameBoardXY = [];
let boardColor1 = "#229954";
let boardColor2 = "#2ecc71";

function createGameBoardGrid(numRows, numColumns, color1, color2) {
  let gameBoard = [];

  for (let row = 0; row < numRows; row++) {
    gameBoard[row] = [];
    for (let column = 0; column < numColumns; column++) {
      const squareElement = document.createElement("div");
      const color = (column + row) % 2 == 0 ? color1 : color2;
      squareElement.classList.add("grid-squares");
      squareElement.style.backgroundColor = color;
      gameBoard[row][column] = squareElement;
    }
  }
  return gameBoard;
}

function renderGameBoard(gameBoard) {
  const gameBoardContainer = document.getElementById("grid-container");

  gameBoardContainer.setAttribute(
    "style",
    `grid-template: repeat(${gameBoard.length}, auto) / 
                    repeat(${gameBoard[0].length}, auto)`
  );

  gameBoardContainer.append(...gameBoard.flat());
}

gameBoardXY = createGameBoardGrid(15, 15, boardColor1, boardColor2);
renderGameBoard(gameBoardXY);