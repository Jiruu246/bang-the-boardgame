import React from 'react'
import { SocketIO } from 'boardgame.io/multiplayer';
import { Client } from 'boardgame.io/react';
import { TicTacToe } from './Game';
import { TicTacToeBoard } from './Board';

const TicTacToeClient = Client({ 
    game: TicTacToe,
    board: TicTacToeBoard,
    multiplayer: SocketIO({server: 'localhost:8000'}),
});

function player1() {
  return (
    <TicTacToeClient playerID="0" />
  )
}

export default player1