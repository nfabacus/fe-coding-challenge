import * as Actions from './index'
import * as Types from './types'

describe('actions', () => {
  it('selectCell: should create an action to select a cell', () => {
    const expectedAction = {
      type: Types.SELECT_CELL,
      currentPlayer: 'X',
      row: 0,
      col: 0
    }
    const result = Actions.selectCell('X', 0, 0)
    expect(result).toEqual(expectedAction)
  })
  it('selectWinner: should create an action to select a winner', () => {
    const expectedAction = {
      type: Types.SELECT_WINNER,
      winner: 'X'
    }
    const result = Actions.selectWinner('X')
    expect(result).toEqual(expectedAction)
  })
  it('resetGame: should create an action to reset redux state', () => {
    const expectedAction = {
      type: Types.RESET_GAME
    }
    const result = Actions.resetGame()
    expect(result).toEqual(expectedAction)
  })
})
