import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Board } from '.';
import configureStore from '../../store';
import { Provider } from 'react-redux';

describe('Board', () => {
  test('renders Board text', () => {
    render(<Provider store={configureStore()}><Board /></Provider>);
    const boardText = screen.getByText(/Board/i);
    expect(boardText).toBeInTheDocument();
  });
  test('renders blank board first and then display X, O after clicking cells', async() => {
    render(<Provider store={configureStore()}><Board /></Provider>);
    const XText = screen.queryByText('X');
    expect(XText).not.toBeInTheDocument();
    const CellsArr = screen.getAllByRole('button');
    expect(CellsArr.length).toBe(9)
    fireEvent.click(CellsArr[0]);
    expect(CellsArr[0].innerHTML).toBe('X');
    fireEvent.click(CellsArr[4]);
    expect(CellsArr[4].innerHTML).toBe('O');
  });
  test('renders X wins', async() => {
    const state = {
      game: { currentPlayer: 'X', winner: null },
      board: [
        ['X','X', 'O'],
        ['O', 'X', 'O'],
        ['X', 'O', null]
      ]
    }
    render(<Provider store={configureStore(state)}><Board /></Provider>);
    const CellsArr = screen.getAllByRole('button');
    fireEvent.click(CellsArr[8]);
    expect(CellsArr[8].innerHTML).toBe('X');
    const resultText = screen.getByText('Game Over! X has won!')
    expect(resultText).toBeInTheDocument();
  });
  test('renders O wins', async() => {
    const state = {
      game: { currentPlayer: 'O', winner: null },
      board: [
        ['O','X', 'X'],
        ['O', 'X', 'X'],
        [null, 'O', null]
      ]
    }
    render(<Provider store={configureStore(state)}><Board /></Provider>);
    const CellsArr = screen.getAllByRole('button');
    fireEvent.click(CellsArr[6]);
    expect(CellsArr[6].innerHTML).toBe('O');
    const resultText = screen.getByText('Game Over! O has won!')
    expect(resultText).toBeInTheDocument();
  });
  test('renders a draw', async() => {
    const state = {
      game: { currentPlayer: 'X', winner: null },
      board: [
        ['X','X', 'O'],
        ['O', 'O', 'X'],
        ['X', 'O', 'X']
      ]
    }
    render(<Provider store={configureStore(state)}><Board /></Provider>);
    const resultText = screen.getByText('Game Over! It is a draw!')
    expect(resultText).toBeInTheDocument();
  });
})
