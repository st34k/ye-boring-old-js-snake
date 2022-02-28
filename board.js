import { SETTINGS } from './settings.js';

const { DEFAULT_STYLES, BOARD } = SETTINGS

export class Board {
  board
  boardCtx

  constructor() {
    this.board = document.getElementById('gameCanvas')
    this.boardCtx = this.board.getContext('2d')

    this.createBoard()
  }

  createBoard() {
    this.board.width = BOARD.DEFAULT_WIDTH
    this.board.height = BOARD.DEFAULT_HEIGHT
    this.setFillColor(BOARD.fillColor)
    this.setFillStroke(BOARD.borderColor)

    this.drawRect(0, 0, this.board.width, this.board.height)
    this.strokeRect(0, 0, this.board.width, this.board.height)
  }

  setFillColor(color = DEFAULT_STYLES.fillColor) {
    this.boardCtx.fillStyle = color
  }

  setFillStroke(color = DEFAULT_STYLES.strokeStyle) {
    this.boardCtx.strokeStyle = color
  }

  drawRect(x, y, width, height) {
    this.boardCtx.fillRect(x, y, width, height)
  }

  strokeRect(x, y, width, height) {
    this.boardCtx.strokeRect(x, y, width, height)
  }
}