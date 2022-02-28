import { SETTINGS } from './settings.js';

const { SNAKE, BOARD } = SETTINGS

export class Snake {
  gameBoard
  snake

  constructor(gameBoard) {
    this.gameBoard = gameBoard
    this.snake = []
    this.pixelSize = BOARD.pixelSize

    this.initSnake()
  }

  initSnake() {
    const boardWidth = this.gameBoard.board.width
    const boardHeight = this.gameBoard.board.height

    // set initial coords for snake to be in middle of board
    let [x, y] = [boardWidth / 2, boardHeight / 2]

    for (let i = 0; i < SNAKE.initLength; i++) {
      // populate snake array
      this.snake.push({ x, y })
      x -= this.pixelSize
    }

    this.drawSnake()
  }

  drawSnake() {
    this.gameBoard.setFillColor(SNAKE.fillColor)
    this.gameBoard.setFillStroke(SNAKE.outlineColor)

    this.snake.forEach(s => {
      const { x, y } = s
      this.gameBoard.drawRect(x, y, this.pixelSize, this.pixelSize)
      this.gameBoard.strokeRect(x, y, this.pixelSize, this.pixelSize)
    })
  }
}