import { SETTINGS } from './settings.js';

const { BOARD, SNAKE } = SETTINGS

const snakeBoard = document.getElementById('gameCanvas')
const snakeCtx = snakeBoard.getContext('2d')

snakeBoard.width = BOARD.width
snakeBoard.height = BOARD.height

// draw the board
function prepareBoard() {
  snakeCtx.fillStyle = BOARD.fillColor
  snakeCtx.strokeStyle = BOARD.borderColor

  snakeCtx.fillRect(0, 0, snakeBoard.width, snakeBoard.height)
  snakeCtx.strokeRect(0, 0, snakeBoard.width, snakeBoard.height)
}


function drawSnake() {
  let x = BOARD.width / 2
  const y = BOARD.height / 2
  const { pixelSize } = SNAKE

  snakeCtx.fillStyle = SNAKE.fillColor
  snakeCtx.strokeStyle = SNAKE.outlineColor

  for (let i = 0; i < SNAKE.size; i++) {
    snakeCtx.fillRect(x, y, pixelSize, pixelSize)
    snakeCtx.strokeRect(x, y, pixelSize, pixelSize)
    x -= pixelSize
  }
}

prepareBoard()
drawSnake()