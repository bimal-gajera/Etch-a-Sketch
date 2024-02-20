document.addEventListener("DOMContentLoaded", () => {
  main();
});

let boardDiv = document.getElementById("board");
let gridSize = 16;

function changeGridSize(size) {
  boardDiv.textContent = "";
  if (size < 1 || size > 100) {
    alert("Invalid grid size!\n Grid size must be between 1 and 100");
    size = 16;
  }

  for (let i = 0; i < size; i++) {
    let row = document.createElement("div");
    row.classList = "row";
    for (let j = 0; j < size; j++) {
      const block = document.createElement("div");
      block.classList = "block";
      row.appendChild(block);
    }
    boardDiv.appendChild(row);
  }
}

function main() {
  changeGridSize(gridSize);
}