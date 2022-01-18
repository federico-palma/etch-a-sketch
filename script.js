// Grid creation and setting of event listener.
let gridContainer = document.getElementById('grid-container');

let gridDefinition = 64
gridContainer.style.gridTemplateRows = `repeat(${gridDefinition}, 1fr)`
gridContainer.style.gridTemplateColumns = `repeat(${gridDefinition}, 1fr)`

for (let i = 0; i < (gridDefinition * gridDefinition); i++) {
    let newCell = document.createElement('div');
    newCell.classList.add('grid-cell');
    newCell.addEventListener('mouseover', changeColor);
    gridContainer.appendChild(newCell);
};
let gridCells = document.getElementsByClassName('grid-cell')

function changeColor() {
    this.style.backgroundColor = 'black';
}

// Clear button
let clearBtn = document.getElementById('btn-clear');
clearBtn.addEventListener('click', () => {
    for (let i = 0; i < gridCells.length; i++) {
        gridCells[i].style.backgroundColor = 'white';
    }
});