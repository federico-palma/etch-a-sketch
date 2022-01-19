// Grid creation.
let gridContainer = document.getElementById('grid-container');
let gridCells = document.getElementsByClassName('grid-cell');

// Grid definition slider function.
let gridDefSlider = document.getElementById('grid-def-slider');
let gridDefinition = gridDefSlider.value;
gridDefSlider.addEventListener('change', () => {
    clearGrid();
    gridDefinition = gridDefSlider.value;
    setGrid();
})

// Function sets the grid according to the Grid Definition chosen and adds event listener to grid cells.
function setGrid() {
    gridContainer.style.gridTemplateRows = `repeat(${gridDefinition}, 1fr)`
    gridContainer.style.gridTemplateColumns = `repeat(${gridDefinition}, 1fr)`

    for (let i = 0; i < (gridDefinition * gridDefinition); i++) {
        let newCell = document.createElement('div');
        newCell.classList.add('grid-cell');
        newCell.addEventListener('mouseover', changeColor);
        gridContainer.appendChild(newCell);
    };
};

// Set initial grid. 
setGrid();

// Color Mode.
let colorPicker = document.getElementById('colorPicker');
let colorModeBtn = document.getElementById('btn-color-mode');
let rainbowModeBtn = document.getElementById('btn-rainbow-mode');
let eraserModeBtn = document.getElementById('btn-eraser-mode');
let currentColorMode
let btnList = document.getElementsByClassName('btn-mode');

for (let i = 0; i < btnList.length; i++) {
    btnList[i].addEventListener('click', () => {
        removeBtnClass()
        btnList[i].classList.add('btn-active');
    });
}

function removeBtnClass() {
    for (let i = 0; i < btnList.length; i++) {
        btnList[i].classList.remove('btn-active');
    }
}

// Function changes grid cell color.
function changeColor() {
    this.style.backgroundColor = 'black';
};

// Clear function and button.
function clearGrid() {
    for (let i = 0; i < gridCells.length; i++) {
        gridCells[i].style.backgroundColor = 'white';
    }
}
let clearBtn = document.getElementById('btn-clear');
clearBtn.addEventListener('click', clearGrid);
