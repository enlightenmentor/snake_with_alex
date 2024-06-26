export class Board {
    constructor(width, height, cellSize) {
        this.width = width;
        this.height = height;
        this.cellSize = cellSize;
    }

    createNode() {
        const divNode = document.createElement('div');
        divNode.classList.add('board');
        divNode.style.gridTemplateColumns = `repeat(${this.width}, ${this.cellSize}px)`;
        divNode.style.gridTemplateRows = `repeat(${this.height}, ${this.cellSize}px)`;
        return divNode;
    }

    createCellNode() {
        const divNode = document.createElement('div');
        divNode.classList.add('cell');
        return divNode;
    }

    render(container) {
        const length = this.width * this.height;
        const boardDiv = this.createNode();
        for (let i = 0; i < length; i++) {
            const cellDiv = this.createCellNode();
            boardDiv.appendChild(cellDiv);
        }
        container.appendChild(boardDiv);
    }
}