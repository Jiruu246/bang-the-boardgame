import React from 'react'
import { SocketIO } from 'boardgame.io/multiplayer';
import { Client } from 'boardgame.io/react';
import { TicTacToe } from '../Game/Game';
import { TicTacToeBoard } from '../Components/Board';


const TicTacToeClient = Client({ 
    game: TicTacToe,
    board: TicTacToeBoard,
    multiplayer: SocketIO({server: 'localhost:8000'}),
});

export default function player2() {
  return (
    <TicTacToeClient playerID="1" />
  )
}
