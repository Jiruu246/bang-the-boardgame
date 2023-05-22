import { SocketIO } from 'boardgame.io/multiplayer';
import { Client } from 'boardgame.io/react';
import { TicTacToe } from '../Game/Game'
import { TicTacToeBoard } from '../Components/Board';
import { BangBoard } from '../Components/BangBoard'
import { useState } from 'react';
import { BangGame } from '../Game/BangGame';

// const TicTacToeClient = Client({
//     game: TicTacToe,
//     board: TicTacToeBoard,
//     multiplayer: SocketIO({server: 'localhost:8000'}),
// });

const BangClient = Client({
    game: BangGame,
    board: BangBoard,
    multiplayer: SocketIO({server: 'localhost:8000'}),
})

export const GameClient = () => {
  const [playerID, setPlayerID] = useState(null);

  return (
      <div>
          {!playerID ?
          <div>
              <p>Play as</p>
              <button onClick={() => setPlayerID("0")}>
                  Player 0
              </button>
              <button onClick={() => setPlayerID("1")}>
                  Player 1
              </button>
          </div>
          :
          <div>
              {/* <TicTacToeClient playerID={playerID} /> */}
              {<BangClient playerID={playerID}/>}
          </div>}

      </div>
  )
}
