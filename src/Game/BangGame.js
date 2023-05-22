import { CharacterType } from "./Cards/CharacterCards/CharacterEnums";
import Player from "./Player";
import { PChooseCharacter } from "./modules/phases/PChooseChar";

export const BangGame = {
  name: 'Bang',

  setup: ({ctx}) => setupGame(ctx),


  phases: {
    chooseChar: PChooseCharacter,

    draw: {
      moves: {
        playCard: () => {}
      }
    }
  },

  turn: {
  }
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
      health: null,
    });
  }

  return {
    characterOptions,
    players,
  };
}