import { Character, CharacterType } from "../../Cards/CharacterCards/CharacterEnums";

export const PChooseCharacter = {
  moves: {
    chooseCard: ({G, ctx, events, playerID}, id) => {
      G.players[playerID].character = G.characterOptions[playerID][id];
      G.players[playerID].health = Character[CharacterType.BartCassidy].lifePoint;
      //TODO: do we need endturn? or just endStage is enough?
      events.endTurn();
      events.endStage();
    }
  },

  turn: {
    onBegin: ({events}) => onBeginChooseChar(events),
    stages: {
      prep: {
      }
    },

  },
  start: true,
  endIf: ({G}) => endChooseCharacterPhase(G),
  next: 'draw'
}

function onBeginChooseChar(events) {
  events.setActivePlayers({all: 'prep'});

}

function endChooseCharacterPhase({players}) {
  for (const element of players) {
    if (element.character == CharacterType.none)
      return false;
  }
  return true;
}