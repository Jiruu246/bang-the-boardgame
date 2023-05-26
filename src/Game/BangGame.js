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
        playCard: ({G, ctx, playerID, events}, cardId) => {
          G.activeCard = cardId;
          const card = new CardClassType[CardType.Bang]();
          card.useCard({G, ctx, playerID, events});
        },
      },
      turn: {
        stages: {
          chooseTarget: {
            moves: {
              setTarget: ({G, events}, targetId) => {
                //using G.activeCard here
                const card = new CardClassType[CardType.Bang]();
                card.useTarget({G}, targetId);
                events.endStage();
                console.log(targetId);
              }
            },
          },
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
    activeCard: null,
    characterOptions,
    players,
  };
}