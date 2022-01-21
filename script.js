let mainSection = document.getElementById('main');
let screen = document.getElementById('screen');
let gridContainer = document.getElementById('grid-container');
let gridCells = document.getElementsByClassName('grid-cell');

// Grid definition slider function.
let gridDefSlider = document.getElementById('grid-def-slider');
let gridDefinition = gridDefSlider.value;
gridDefSlider.addEventListener('change', () => {
    gridContainer.textContent = '';
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
let grayscaleModeBtn = document.getElementById('btn-grayscale-mode');
let eraserModeBtn = document.getElementById('btn-eraser-mode');
let currentColorMode = 'Color';
let btnModeList = document.getElementsByClassName('btn-mode');

for (let i = 0; i < btnModeList.length; i++) {
    btnModeList[i].addEventListener('click', () => {
        removeBtnClass()
        btnModeList[i].classList.add('btn-active');
        currentColorMode = btnModeList[i].textContent;
    });
}

function removeBtnClass() {
    for (let i = 0; i < btnModeList.length; i++) {
        btnModeList[i].classList.remove('btn-active');
    }
}

// Function changes grid cell color.
function changeColor() {
    switch (currentColorMode) {
        case 'Color':
            this.style.backgroundColor = colorPicker.value;
            break;

        case 'Rainbow':
            this.style.backgroundColor = getRandomColor();
            break;

        case 'Grayscale':
            this.style.backgroundColor = greyscaleFunction(this);
            break;

        case 'Eraser':
            this.style.backgroundColor = '#ffffff';
            break;
                
        default:
            break;
    }    
};

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function greyscaleFunction(currentCell) {
    if (currentCell.style.backgroundColor == 'rgb(200, 200, 200)') {
        return 'rgb(150, 150, 150)';
    } else if (currentCell.style.backgroundColor == 'rgb(150, 150, 150)') {
        return 'rgb(100, 100, 100)';
    } else if (currentCell.style.backgroundColor == 'rgb(100, 100, 100)') {
        return 'rgb(50, 50, 50)';
    } else if (currentCell.style.backgroundColor == 'rgb(50, 50, 50)'){
        return 'rgb(0, 0, 0)';
    } else if (currentCell.style.backgroundColor == 'rgb(0, 0, 0)'){
        return 'rgb(0, 0, 0)';
    } else {
        return 'rgb(200, 200, 200)';
    }
}

// Clear and shake function.
function clearGrid() {
    for (let i = 0; i < gridCells.length; i++) {
        gridCells[i].style.backgroundColor = 'white';
    }
}

function shakeFunction() {
    mainSection.classList.add('shake-anim');
    gridContainer.classList.add('fadeOut-anim');
    clearBtn.disabled = true
    
    setTimeout(() => {
        mainSection.classList.remove('shake-anim');
        gridContainer.classList.remove('fadeOut-anim');
        clearGrid();
        clearBtn.disabled = false
    }, 1400);       
}

let clearBtn = document.getElementById('btn-clear');
clearBtn.addEventListener('click', () => {
    shakeFunction()
});
