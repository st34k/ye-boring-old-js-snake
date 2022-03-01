import { SETTINGS } from './settings.js';

const { DEFAULT_STYLES, BOARD } = SETTINGS

export class Board {
  constructor() {
    this.board = document.getElementById('gameCanvas')
    this.boardCtx = this.board.getContext('2d')
    this.width = BOARD.WIDTH
    this.height = BOARD.HEIGHT
    this.boardBorders = {
      horizontal: [0, BOARD.WIDTH / BOARD.PIXEL_SIZE],
      vertical: [0, BOARD.HEIGHT / BOARD.PIXEL_SIZE]
    }

    this.createBoard()
  }

  createBoard() {
    this.setFillColor(BOARD.fillColor)
    this.setFillStroke(BOARD.borderColor)

    this.drawRect(0, 0, this.width, this.height)
    this.strokeRect(0, 0, this.width, this.height)
  }

  drawPixel(xStart,
            yStart,
            bgColor = DEFAULT_STYLES.DEFAULT_BG,
            outlineColor = DEFAULT_STYLES.DEFAULT_OL) {
    this.setFillColor(bgColor)
    this.setFillStroke(outlineColor)
    this.drawRect(xStart, yStart, BOARD.PIXEL_SIZE, BOARD.PIXEL_SIZE)
    this.strokeRect(xStart, yStart, BOARD.PIXEL_SIZE, BOARD.PIXEL_SIZE)
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

  clearBoard() {
    this.setFillColor()
    this.setFillStroke()
    this.drawRect(0, 0, this.board.width, this.board.height)
  }
}