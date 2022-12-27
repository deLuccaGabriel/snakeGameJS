const game_init = () => {
  const snake = new Snake("#000", 1, 1, 7, 7);
  let gameBoardGridYX = [];
  let tileColorDark = "#229954";
  let tileColorLight = "#2ecc71";

  gameBoardGridYX = createGameBoardGrid(15, 15, tileColorDark, tileColorLight);
  renderGameBoard(gameBoardGridYX);
  snake.render(gameBoardGridYX);

}

game_init();