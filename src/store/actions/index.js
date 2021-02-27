import {RESET_GAME, SELECT_CELL, SELECT_WINNER} from './types';

export function selectCell(currentPlayer, row, col) {
  return {
    type: SELECT_CELL,
    currentPlayer,
    row,
    col
  }
}

export function selectWinner(winner) {
  return {
    type: SELECT_WINNER,
    winner
  }
}

export function resetGame() {
  return {
    type: RESET_GAME
  }
}