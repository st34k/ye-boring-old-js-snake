import { SETTINGS } from './settings.js'

const { BOARD: { PIXEL_SIZE } } = SETTINGS

export const keyMap = {
  ArrowLeft: {
    forbidden: 'ArrowRight',
    dx: -PIXEL_SIZE,
    dy: 0
  },
  ArrowRight: {
    forbidden: 'ArrowLeft',
    dx: PIXEL_SIZE,
    dy: 0
  },
  ArrowUp: {
    forbidden: 'ArrowDown',
    dx: 0,
    dy: -PIXEL_SIZE
  },
  ArrowDown: {
    forbidden: 'ArrowUp',
    dx: 0,
    dy: PIXEL_SIZE
  }
}