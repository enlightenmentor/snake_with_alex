const boardWrapperDiv = document.querySelector('.board-wrapper');
const widthInput = document.querySelector('input[name="width"]');
const heightInput = document.querySelector('input[name="height"]');
const startButton = document.querySelector('#start');
const initialWidth = 30;
const initialHeight = 20;

widthInput.value = initialWidth;
heightInput.value = initialHeight;

function createBoard(width, height, cellSize) {
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

function calculateCellSize(columns, rows) {
    const padding = 16;
    const wrapperWidth = boardWrapperDiv.clientWidth;
    const wrapperHeight = boardWrapperDiv.clientHeight;

    const rawCellWidth = (wrapperWidth - padding * 2) / columns;
    const rawCellHeight = (wrapperHeight - padding * 2) / rows;

    return Math.min(rawCellWidth, rawCellHeight);
}

function renderBoard(width, height, cellSize) {
    const length = width * height;
    const boardDiv = createBoard(width, height, cellSize);
    for (let i = 0; i < length; i++) {
        const cellDiv = createCell();
        boardDiv.appendChild(cellDiv);
    }
    boardWrapperDiv.appendChild(boardDiv);
}

function clearBoard() {
    boardWrapperDiv.innerHTML = '';
}

function startGame() {
    const width = widthInput.value;
    const height = heightInput.value;

    const cellSize = calculateCellSize(width, height);

    renderBoard(width, height, cellSize);

    startButton.disabled = true;
};

startButton.addEventListener('click', () => {
    startGame();
});

window.addEventListener('resize', () => {
    clearBoard();

    const width = widthInput.value;
    const height = heightInput.value;

    const cellSize = calculateCellSize(width, height);

    renderBoard(width, height, cellSize);
});
