let gridContainer = document.getElementById('grid-container');
let gridDefinition = 16


gridContainer.style.gridTemplateRows = `repeat(${gridDefinition}, 1fr)`
gridContainer.style.gridTemplateColumns = `repeat(${gridDefinition}, 1fr)`

for (let i = 0; i < (gridDefinition * gridDefinition); i++) {
    let newCell = document.createElement('div');
    newCell.classList.add('grid-cell');
    gridContainer.appendChild(newCell);
    console.log(newCell);
};

