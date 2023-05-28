import { INVALID_MOVE } from "boardgame.io/core";
import { Character } from "../../Cards/CharacterCards/CharacterEnums";

const onBeginChooseChar = ({events}) => {
  events.setActivePlayers({all: 'prep'});
}

const chooseCharacter = ({G, ctx, events, playerID}, id) => {
  if(id >= G.characterOptions[playerID].length){
    return INVALID_MOVE;
  }
  
  const player = G.players[playerID];
  const character = G.characterOptions[playerID][id];
  
  player.character = character.name;
  player.health =character.lifePoint;
  events.endStage();
}

const endChooseCharacterPhase = ({G}) => {
  for (const element of G.players) {
    if (element.character == Character.none)
      return false;
  }
  return true;
}

export const PCharacterSelection = {
  
  turn: {
    onBegin: onBeginChooseChar,
    stages: {
      prep: {
        moves: {
          chooseCharacter: chooseCharacter,
        },
      }
    },

  },
  start: true,
  endIf: endChooseCharacterPhase,
  next: 'InGame'
}

