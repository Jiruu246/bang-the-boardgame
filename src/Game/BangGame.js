import { CharacterType } from "./Cards/CardEnum";
import Player from "./Player";

export const BangGame = {
  setup: ({ctx}) => setupGame(ctx),

  phases: {
    chooseChar: {
      moves: {
        chooseCard: ({G}, id) => {
          console.log(G.characters[id].name);
        }
      },
      start: true,
      endIf: ({G}) => (0 > 1),
      next: 'draw'
    },

    draw: {

    }
  }
}

function setupGame({numPlayers}) {
  const players = [];

  const characters = [
    {name: 'first one'},
    {name: 'second one'},
  ];

  for (let i = 0; i < numPlayers; i++) {
    players.push({
      character: CharacterType.none,
    });
  }

  return {
    characters: characters,
    players: players,
  };
}