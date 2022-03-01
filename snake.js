import { SETTINGS } from './settings.js';

const { SNAKE } = SETTINGS

export class Snake {
  ctx
  constructor() {
    this.snakeCoords = []
    this.fillColor = SNAKE.fillColor
    this.outlineColor = SNAKE.outlineColor
    // this.snake = []
    //
    // this.initSnake()
  }

  initSnake(ctx) {
    this.ctx = ctx
    const boardWidth = ctx.board.width
    const boardHeight = ctx.board.height

    // set initial coords for snake to be in middle of board
    let [x, y] = [boardWidth / 2, boardHeight / 2]

    for (let i = 0; i < SNAKE.initLength; i++) {
      // populate snake coords array
      this.snakeCoords.push({ x, y })
      x -= ctx.pixelSize
    }

    this.drawSnake()
  }

  drawSnake() {
    this.snakeCoords.forEach(s => {
      const { x, y } = s
      this.ctx.board.drawPixel(x, y, this.fillColor, this.outlineColor)
    })
  }
}