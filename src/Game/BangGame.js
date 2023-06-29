import { Character } from "./Cards/CharacterCards/CharacterEnums";
import { PCharacterSelection } from "./modules/phases/PCharacterSelection";
import { CardType, NumberOfCards } from "./Cards/CardEnum";
import { PInGame } from "./modules/phases/PInGame";
import { v4 as uuidv4 } from 'uuid'


export const BangGame = {
  name: 'Bang',

  setup: ({ctx}) => setupGame(ctx),

  phases: {
    CharacterSelection: PCharacterSelection,
    InGame: PInGame,
  },
}

function setupGame({numPlayers}) {
  const OPTION_SIZE = 2;
  const players = [];
  const characterOptions = [];
  const cards = [];
  const drawPile = [];

  const charactersPool = suffle(Object.values(Character));

  for (const card in NumberOfCards) {
    for (let i = 0; i < NumberOfCards[card]; i++){
      cards.push({id: uuidv4(), type: CardType[card]});
    }
  }

  cards.forEach((card) => {
    drawPile.push({id: card.id});
  });
  suffle(drawPile);

  for (let i = 0; i < numPlayers; i++) {
    characterOptions.push(
      charactersPool.slice(i * OPTION_SIZE, (i + 1) * OPTION_SIZE)
    );

    players.push({
      id: i.toString(),
      character: null,
      health: null,
    });
  }

  return {
    activeCard: null,
    characterOptions,
    players,
    cards,
    drawPile
  };
}

//this is only used in setup the game since random doesn't available in setup
//for other random function, use library random to make it deterministic
function suffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}