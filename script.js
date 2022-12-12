let gameBoardXY = [];

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
  gameBoardContainer.append(...gameBoard.flat());
}

gameBoardXY = createGameBoardGrid(15, 15, "#229954", "#2ecc71");
renderGameBoard(gameBoardXY);
