import { SETTINGS } from './settings.js';
import { Snake } from './snakeClass.js';
import { Board } from './board.js'

const { DEFAULT_STYLES, BOARD, SNAKE } = SETTINGS


class Game {
  gameBoard

  constructor() {
    this.gameBoard = new Board()
    this.gameContext = this.gameBoard.boardCtx
    this.snake = new Snake(this.gameBoard)
  }
}

new Game()