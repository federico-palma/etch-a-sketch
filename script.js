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

function changeColor() {
    event.target.style.backgroundColor = 'black';
}

