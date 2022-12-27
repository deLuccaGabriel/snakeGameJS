class Snake {
  constructor(color, speed, size, positionY, positionX) {
    this.color = color;
    this.speed = speed;
    this.size = size;
    this.positionY = positionY;
    this.positionX = positionX;
    this.isAlive = true;
  }
  render(gameboard) {
    gameboard[this.positionY][this.positionX].setAttribute(
      "style",
      `background-color: ${this.color}`
    )
  }
  move() {
    

  }
}

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

function renderPlayer(gameboard, playerY, playerX, playerColor) {
  gameboard[playerY][playerX].setAttribute(
    "style",
    `background-color: ${playerColor}`
  )
}

const game_init = () => {
  const snake = new Snake("#000", 1, 1, 7, 7);
  let gameBoardGridYX = [];
  let tileColorDark = "#229954";
  let tileColorLight = "#2ecc71";

  gameBoardGridYX = createGameBoardGrid(15, 15, tileColorDark, tileColorLight);
  renderGameBoard(gameBoardGridYX);
  snake.render(gameBoardGridYX);
  
  // do {

  // } while(snake.isAlive);

}

game_init();