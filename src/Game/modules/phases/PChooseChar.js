import { Character } from "../../Cards/CharacterCards/CharacterEnums";

export const PChooseCharacter = {

  turn: {
    onBegin: ({events}) => onBeginChooseChar(events),
    stages: {
      prep: {
        moves: {
          chooseCard: ({G, ctx, events, playerID}, id) => {
            G.players[playerID].character = G.characterOptions[playerID][id].name;
            G.players[playerID].health = G.characterOptions[playerID][id].lifePoint;
            //TODO: do we need endturn? or just endStage is enough?
            events.endTurn();
            events.endStage();
          }
        },
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
    if (element.character == Character.none)
      return false;
  }
  return true;
}