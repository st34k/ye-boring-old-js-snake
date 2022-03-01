import { keyMap } from './keyMap.js';
import { SETTINGS } from './settings.js';

const { BOARD: { PIXEL_SIZE } } = SETTINGS


export class Controller {
  constructor(ctx) {
    this.snakeCoords = ctx.snake.snakeCoords
    this.boardCtx = ctx.boardCtx
    this.keyMap = keyMap
  }

  move(ctx, key = ctx.currentDirection) {
    const { dx, dy, forbidden } = this.keyMap[key]

    if (this.canTurn(ctx, forbidden)) {
      ctx.currentDirection = key
      const { x, y } = this.snakeCoords[0]
      const head = { x: x + dx, y: y + dy }

      if (this.checkCollision(head, ctx)) {
        alert('Whoops, you dead! Game over.')
        clearInterval(ctx.interval)
        return;
      }

      this.snakeCoords.unshift(head)
      this.snakeCoords.pop()
      ctx.board.clearBoard()
      ctx.snake.drawSnake(ctx)
    }
  }

  canTurn(ctx, forbiddenTurn) {
    if (ctx.currentDirection !== forbiddenTurn) {
      return true
    }
    return false
  }

  checkCollision(head, ctx) {
    let { x, y } = head
    x = this._getPixelValue(x)
    y = this._getPixelValue(y)

    if (ctx.board.boardBorders.horizontal.includes(x) ||
      ctx.board.boardBorders.vertical.includes(y)) {
      return true
    }

    return ctx.snake.snakeCoords.some(s => {
        if (x === this._getPixelValue(s.x) && y === this._getPixelValue(s.y)) {
          ctx.board.setFillColor('red')
          ctx.board.drawPixel(s.x, s.y, ctx.pixelSize, ctx.pixelSize)
          return true
        }

      }
    )
  }

  _getPixelValue(coord) {
    return coord / PIXEL_SIZE
  }
}