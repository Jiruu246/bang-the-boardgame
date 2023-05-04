import { SocketIO } from 'boardgame.io/multiplayer';
import { Client } from 'boardgame.io/react';
import { TicTacToe } from './Game/Game';
import { TicTacToeBoard } from './Components/Board';
import { useState } from 'react';

const TicTacToeClient = Client({ 
    game: TicTacToe,
    board: TicTacToeBoard,
    multiplayer: SocketIO({server: 'localhost:8000'}),
});

const App = () => {
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
                <TicTacToeClient playerID={playerID} />
            </div>}

        </div>
    )
};


export default App;