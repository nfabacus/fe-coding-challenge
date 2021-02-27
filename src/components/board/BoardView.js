import React from 'react'
import {resetGame, selectCell} from '../../store/actions'
import GameStatus from './GameStatus'
import Cell from './Cell'

const BoardView = ({ game, board, dispatch }) => {
  const isGameOver = game.winner || board.every(row => row.every(cell => cell !== null));
  const isDraw = isGameOver && !game.winner;

  const handleSelectCell = (cell, rowId, colId) => {
    !isGameOver && cell === null && dispatch(
      selectCell(
        game.currentPlayer,
        rowId,
        colId
      )
    )
  }

  return (
    <div className="Board vh-100 pb-4 d-flex flex-column align-items-center justify-content-center">
      <video autoPlay muted loop id="bgVideo">
        <source src="bg-video.mp4" type="video/mp4" />
      </video>
      <div className="BoardInner p-4 d-flex flex-column align-items-center justify-content-center">
        <div className="">
          <h1 className="boardText text-center">Board</h1>
          <GameStatus
            currentPlayer={game.currentPlayer}
            winner={game.winner}
            isDraw={isDraw}
            isGameOver={isGameOver}
            handlePlayAgain={() => dispatch(resetGame())}
          />
        </div>
        {
          board.map((row, rowId) => {
            return (
              <div key={rowId} className="d-flex">
                {
                  row.map((cell, colId) => {
                    return (
                      <Cell
                        key={colId}
                        cell={cell}
                        onClick={() => handleSelectCell(cell, rowId, colId)}
                      />
                    );
                  })
                }
              </div>
            );
          })
        }
      </div>
    </div>
  )
}

export default BoardView;