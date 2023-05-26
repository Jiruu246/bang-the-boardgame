import { Character } from "./Cards/CharacterCards/CharacterEnums";
import Player from "./Player";
import { PCharacterSelection } from "./modules/phases/PCharacterSelection";
import { CardClassType, CardType } from "./Cards/CardEnum";
import BangCard from "./Cards/ActionCards/BangCard";
import { CardAbstract } from "./Cards/CardAbstract";
import { PInGame } from "./modules/phases/PInGame";


export const BangGame = {
  name: 'Bang',

  setup: ({ctx}) => setupGame(ctx),

  phases: {
    CharacterSelection: PCharacterSelection,
    InGame: PInGame,
  },
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