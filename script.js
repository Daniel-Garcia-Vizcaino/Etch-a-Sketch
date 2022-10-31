const container = document.getElementById("container");
const gridRow = document.createElement("div");
const rowClassList = gridRow.classList;
rowClassList.add("row");
rowClassList.add("gridRow");
const gridCol = document.createElement("div");
const colClassList = gridCol.classList;
colClassList.add("col");
colClassList.add("gridCol");

function addGrid (x) {
    for ( let i = 0; i < x; i++) {
        container.appendChild(gridRow);
        for ( let i = 0; i < 4; i++ ) {
            gridRow.appendChild(gridCol);
        }
    }
}

gridCol.innerText = "X";

addGrid(16);