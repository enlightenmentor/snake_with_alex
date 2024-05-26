const boardWrapperDiv = document.querySelector('.board-wrapper');
const widthInput = document.querySelector('input[name="width"]');
const heightInput = document.querySelector('input[name="height"]');
const applyButton = document.querySelector('#apply-controls');
const initialWidth = 20;
const initialHeight = 10;
const cellSize = 20;

widthInput.value = initialWidth;
heightInput.value = initialHeight;

function createBoard(width, height) {
    const divNode = document.createElement('div');
    divNode.classList.add('board');
    divNode.style.gridTemplateColumns = `repeat(${width}, ${cellSize}px)`;
    divNode.style.gridTemplateRows = `repeat(${height}, ${cellSize}px)`;
    return divNode;
}

function createCell() {
    const divNode = document.createElement('div');
    divNode.classList.add('cell');
    return divNode;
}

function renderBoard(width, height) {
    const length = width * height;
    const boardDiv = createBoard(width, height);
    for (let i = 0; i < length; i++) {
        const cellDiv = createCell();
        boardDiv.appendChild(cellDiv);
    }
    boardWrapperDiv.appendChild(boardDiv);
}

function clearBoard() {
    boardWrapperDiv.innerHTML = '';
}

renderBoard(initialWidth, initialHeight);

applyButton.addEventListener('click', () => {
    const width = widthInput.value;
    const height = heightInput.value;
    clearBoard();
    renderBoard(width, height);
});