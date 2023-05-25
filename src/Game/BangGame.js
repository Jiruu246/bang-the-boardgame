import { Character } from "./Cards/CharacterCards/CharacterEnums";
import Player from "./Player";
import { PChooseCharacter } from "./modules/phases/PChooseChar";
import { CardClassType, CardType } from "./Cards/CardEnum";
import BangCard from "./Cards/ActionCards/BangCard";
import { CardAbstract } from "./Cards/CardAbstract";


export const BangGame = {
  name: 'Bang',

  setup: ({ctx}) => setupGame(ctx),


  phases: {
    chooseChar: PChooseCharacter,

    draw: {
      moves: {
        playCard: () => {
          const card = new CardClassType[CardType.Beer]();
          card.useCard();

        }
      }
    }
  },

  turn: {
  }
}

function setupGame({numPlayers}) {
  const players = [];

  const characterOptions = [
    [Character.BartCassidy, Character.CalamityJanet],
    [Character.BlackJack, Character.ElGringo]
  ]

  for (let i = 0; i < numPlayers; i++) {
    players.push({
      id: i.toString(),
      character: Character.none,
      health: null,
    });
  }

  return {
    characterOptions,
    players,
  };
}