document.addEventListener("DOMContentLoaded", () => {
  main();
});

let boardDiv = document.getElementById("board");
let boardcontrolLeftDiv = document.getElementById("boardControlsLeft");
let boardcontrolRightDiv = document.getElementById("boardControlsRight");
let gridSize = 16;

let changeGridBtn = document.createElement("BUTTON");
changeGridBtn.textContent = "Change Grid Size";
changeGridBtn.id = "gridSizeBtn";
boardcontrolLeftDiv.appendChild(changeGridBtn);
changeGridBtn.addEventListener("click", () => {
  gridSize = prompt("Enter grid size: ");
  changeGridSize(gridSize);
});


let selectedColor = "black";
let colorMode = "color palette";
// color palette, random color, eraser

let colorModeBtn = document.createElement("select");
let mode1 = document.createElement("option");
mode1.text = "color palette";
colorModeBtn.add(mode1);
let mode2 = document.createElement("option");
mode2.text = "random color";
colorModeBtn.add(mode2);

boardcontrolRightDiv.appendChild(colorModeBtn);

colorModeBtn.onchange = function () {
  colorMode = colorModeBtn.value;
};


let changeColorBtn = document.createElement("BUTTON");
changeColorBtn.textContent = "Change Color";
changeColorBtn.id = "changeColor";

changeColorBtn.addEventListener("click", () => {
  if (colorMode == "color palette") {
    selectedColor = prompt("Enter color keyword or hex value: ");
  }
  else if (colorMode == "random color") {
    alert("Invalid color mode!\n To change color, select color mode to \"color palette\"");
  }
});
boardcontrolRightDiv.appendChild(changeColorBtn);


let resetGridBtn = document.createElement("button");
resetGridBtn.textContent = "Reset Grid";
resetGridBtn.id = "resetgrid";
resetGridBtn.addEventListener("click", () => {
  changeGridSize(16);
});
boardcontrolLeftDiv.appendChild(resetGridBtn);


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


function randomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
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