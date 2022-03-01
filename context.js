import { Board } from './board.js';
import { Snake } from './snake.js'
import { SETTINGS } from './settings.js'

const {
  DEFAULT_STYLES: { DEFAULT_BG, DEFAULT_OL },
  BOARD: { PIXEL_SIZE, DEFAULT_WIDTH, DEFAULT_HEIGHT }
} = SETTINGS

const gameBoard = new Board()
const snakeObj = new Snake()

export const context = {
  board: gameBoard,
  boardCtx: gameBoard.boardCtx,
  snake: snakeObj,
  pixelSize: PIXEL_SIZE,
  speed: 0,
  currentDirection: ''
}

export default context