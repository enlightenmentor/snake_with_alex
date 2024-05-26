const boardWrapperDiv = document.querySelector('.board-wrapper');
const cellSize = 20;

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

renderBoard(20, 30);
