import { Board } from './Board.js';

const boardWrapperDiv = document.querySelector('.board-wrapper');
const widthInput = document.querySelector('input[name="width"]');
const heightInput = document.querySelector('input[name="height"]');
const startButton = document.querySelector('#start');
const initialWidth = 30;
const initialHeight = 20;

widthInput.value = initialWidth;
heightInput.value = initialHeight;

function calculateCellSize(columns, rows) {
    const padding = 16;
    const wrapperWidth = boardWrapperDiv.clientWidth;
    const wrapperHeight = boardWrapperDiv.clientHeight;

    const rawCellWidth = (wrapperWidth - padding * 2) / columns;
    const rawCellHeight = (wrapperHeight - padding * 2) / rows;

    return Math.min(rawCellWidth, rawCellHeight);
}

function clearBoard() {
    boardWrapperDiv.innerHTML = '';
}

function startGame() {
    const width = widthInput.value;
    const height = heightInput.value;

    const cellSize = calculateCellSize(width, height);
    const board = new Board(Number(width), Number(height), cellSize);
    board.render(boardWrapperDiv);

    startButton.disabled = true;
};

startButton.addEventListener('click', () => {
    startGame();
});

// window.addEventListener('resize', () => {
//     clearBoard();

//     const width = widthInput.value;
//     const height = heightInput.value;

//     const cellSize = calculateCellSize(width, height);

//     renderBoard(width, height, cellSize);
// });
