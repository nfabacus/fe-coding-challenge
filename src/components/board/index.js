import React, { useEffect } from 'react';
import './index.scss';
import { useSelector, useDispatch } from 'react-redux';
import { selectWinner } from '../../store/actions';
import BoardView from './BoardView';

const getWinner = (board) => {
  const isWinner = (board, player) => {
    const winHorizontally = board.some(row => row.every(cell=> cell === player))
    const winVertically = [0, 1, 2].some(colNo => board.every(row => row[colNo] === player))
    const winAcross = board.every((row, i) => row[i] === player) || [2, 1, 0].every((cellNo, i) => board[i][cellNo] === player)
    return winHorizontally || winVertically || winAcross;
  }

  const winner = ['O', 'X'].reduce((winner, player) => {
    const isPlayerWinner = isWinner(board, player)
    return isPlayerWinner ? player: winner;
  }, null)
  return winner;
}

export const Board = () => {
  const board = useSelector((state) => state.board)
  const game = useSelector((state) => state.game)
  const dispatch = useDispatch()
  useEffect(() => {
    const winner = getWinner(board)
    dispatch(selectWinner(winner))
  }, [board, dispatch])

  return (
    <BoardView
      game={game}
      board={board}
      dispatch={dispatch}
    />
  )
}
