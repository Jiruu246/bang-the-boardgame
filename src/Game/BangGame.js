import { CharacterType } from "./Cards/CardEnum";
import Player from "./Player";

export const BangGame = {
  name: 'Bang',

  setup: ({ctx}) => setupGame(ctx),

  phases: {
    chooseChar: {
      moves: {
        chooseCard: ({G, ctx, events, playerID}, id) => {
          G.players[playerID].character = G.characterOptions[playerID][id];
        }
      },

      onBegin: ({ctx}) => onBeginChooseChar(ctx),
      start: true,
      endIf: ({G}) => endChooseCharacterPhase(G),
      next: 'draw'
    },

    draw: {
      moves: {
        playCard: () => {}
      }
    }
  },

  turn: {
    stages: {
      prep: {
      }
    }
  }
}

function onBeginChooseChar(ctx) {
  ctx.events.setActivePlayers({all: 'prep'});

}

function endChooseCharacterPhase({players}) {
  for (const element of players) {
    if (element.character == CharacterType.none)
      return false;
  }
  return true;
}

function setupGame({numPlayers}) {
  const players = [];

  const characterOptions = [
    [CharacterType.BartCassidy, CharacterType.CalamityJanet],
    [CharacterType.BlackJack, CharacterType.ElGringo]
  ]

  for (let i = 0; i < numPlayers; i++) {
    players.push({
      id: i.toString(),
      character: CharacterType.none,
    });
  }

  return {
    characterOptions,
    players,
  };
}