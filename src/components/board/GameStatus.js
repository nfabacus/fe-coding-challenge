import React from 'react';
import {Button} from 'reactstrap';

const GameStatus = ({ currentPlayer, winner, isDraw, isGameOver, handlePlayAgain }) => {
  return (
    <div>
      {
        winner && (<h2 className="boardText">Game Over! {winner} has won!</h2>)
      }
      {
        !winner && isDraw && (<h2 className="boardText">Game Over! It is a draw!</h2>)
      }
      {
        !isGameOver ? (
          <div className="boardText">
            <h2>Player X vs Player O</h2>
            <p className="text-center">Player {currentPlayer}'s Turn</p>
          </div>
        ) : (
          <div className="text-center p-3">
            <Button color="info" className="m-2" onClick={handlePlayAgain}>Play Again</Button>
          </div>
        )
      }
    </div>
  );
}

export default GameStatus