const container = document.getElementById("container");
const square = document.createElement("div");
square.className = "square"

let gridNum = 16;

function setNum (x) {
    gridNum = x;
}

function addGrid (gridNum) {
    for ( let i = 0; i < gridNum; i++) {
        container.appendChild(square);
    }
}

addGrid();