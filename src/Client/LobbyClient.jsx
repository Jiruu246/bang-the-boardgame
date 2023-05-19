import { Lobby } from "boardgame.io/react";
import { TicTacToe } from "../Game/Game";
import { TicTacToeBoard } from "../Components/Board";

export const LobbyClient = () => {
  return(
    <Lobby
      gameServer={`https://${window.location.hostname}:8000`}
      lobbyServer={`https://${window.location.hostname}:8000`}
      gameComponents = {[
        {game: TicTacToe, board: TicTacToeBoard}
      ]}
    />
  )
}
