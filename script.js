document.addEventListener("DOMContentLoaded", () => {
  main();
});

let boardDiv = document.getElementById("board");
let boardcontrolLeftDiv = document.getElementById("boardControlsLeft");
let boardcontrolRightDiv = document.getElementById("boardControlsRight");
let gridSize = 16;

let selectedColor = "black";
let colorMode = "color palette";

let changeGridBtn = document.createElement("BUTTON");
changeGridBtn.textContent = "Change Grid Size";
changeGridBtn.id = "gridSizeBtn";
boardcontrolLeftDiv.appendChild(changeGridBtn);
changeGridBtn.addEventListener("click", () => {
  gridSize = prompt("Enter grid size: ");
  changeGridSize(gridSize);
});


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
  addPaintListeners();
}


function paintBlock(block, color) {
  block.style.backgroundColor = color;
}


function addPaintListeners() {
  let blockList = document.getElementsByClassName("block");

  for (let i = 0; i < blockList.length; i++) {
    blockList[i].addEventListener("mouseover", () => {
      if (colorMode == "color palette") {
        paintBlock(blockList[i], selectedColor);
      }
      else if (colorMode == "random color") {
        paintBlock(blockList[i], randomColor());
      }
    })
  }
}


function main() {
  changeGridSize(gridSize);
  addPaintListeners();
}