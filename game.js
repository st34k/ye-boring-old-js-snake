import context from './context.js';
import { Controller } from './movement.js';

class Game {
  controller

  start(ctx) {
    ctx.snake.initSnake(ctx)
    this.controller = new Controller(ctx)

    document.addEventListener('keydown', (e) => {
      const key = e.key
      if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(key)) {
        this.controller.move(ctx, key)
      }
    })

    ctx.interval = setInterval(() => {
      if (!ctx.currentDirection) {
        this.controller.move(ctx, 'ArrowRight')
      } else {
        this.controller.move(ctx)
      }
    }, 100)
  }
}

const game = new Game()
game.start(context)