function createGameGrid(parentElement, numRows, numColumns, color1, color2) {
  const gridContainer = document.getElementById(parentElement);
  let color = "";

  for (let x = 0; x < numRows; x++) {
    for (let y = 0; y < numColumns; y++) {
      const gridSquare = document.createElement("div");
      gridSquare.className = "grid-squares";
      gridSquare.setAttribute("draggable", false);
      if ((y + x) % 2 == 0)
        color = color1;
      else
        color = color2;
      gridSquare.setAttribute("style", `background-color: ${color}`);
      gridContainer.appendChild(gridSquare);
    }
  }
}

createGameGrid("grid-container", 15, 15, "#229954", "#2ecc71");