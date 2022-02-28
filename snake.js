import { SETTINGS } from './settings.js';

const { BOARD, SNAKE } = SETTINGS

const snakeBoard = document.getElementById('gameCanvas')
const snakeCtx = snakeBoard.getContext('2d')

snakeBoard.width = BOARD.width
snakeBoard.height = BOARD.height
const snake = []

// draw the board
function prepareBoard() {
  snakeCtx.fillStyle = BOARD.fillColor
  snakeCtx.strokeStyle = BOARD.borderColor

  snakeCtx.fillRect(0, 0, snakeBoard.width, snakeBoard.height)
  snakeCtx.strokeRect(0, 0, snakeBoard.width, snakeBoard.height)
}

function clearBoard() {
  snakeCtx.fillRect(0, 0, snakeBoard.width, snakeBoard.height)
}


function initSnake() {
  let x = BOARD.width / 2
  const y = BOARD.height / 2
  const { pixelSize } = SNAKE

  snakeCtx.fillStyle = SNAKE.fillColor
  snakeCtx.strokeStyle = SNAKE.outlineColor

  for (let i = 0; i < SNAKE.initLength; i++) {
    snake.push({ x, y })
    snakeCtx.fillRect(x, y, pixelSize, pixelSize)
    snakeCtx.strokeRect(x, y, pixelSize, pixelSize)
    x -= pixelSize
  }
}

function drawSnake() {
  const { pixelSize } = SNAKE
  snakeCtx.fillStyle = SNAKE.fillColor``
  snakeCtx.strokeStyle = SNAKE.outlineColor

  snake.forEach(s => {
    const { x, y } = s
    snakeCtx.fillRect(x, y, pixelSize, pixelSize)
    snakeCtx.strokeRect(x, y, pixelSize, pixelSize)
  })
}

function moveLeft() {
  const head = {x: snake[0].x - 5, y: snake[0].y }
  snake.unshift(head)
  snake.pop()
  clearBoard()
  drawSnake()
}

function moveRight() {
  const head = {x: snake[0].x + 5, y: snake[0].y }
  snake.unshift(head)
  snake.pop()
  clearBoard()
  drawSnake()
}

function moveUp() {
  const head = {x: snake[0].x, y: snake[0].y - 5 }
  snake.unshift(head)
  snake.pop()
  clearBoard()
  drawSnake()
}

function moveDown() {
  const head = { x: snake[0].x, y: snake[0].y + 5 }
  snake.unshift(head)
  snake.pop()
  clearBoard()
  drawSnake()
}

const movement = {
  ArrowLeft: moveLeft,
  ArrowRight: moveRight,
  ArrowDown: moveDown,
  ArrowUp: moveUp
}

prepareBoard()
initSnake()
moveLeft()

document.addEventListener('keydown', (e) => {
  console.log('key', e.key)
  movement[e.key]()
})
