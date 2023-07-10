import { INVALID_MOVE } from "boardgame.io/core";
import { Character } from "../../Cards/CharacterCards/CharacterEnums";
import { Roles } from "../../Roles";

//the stage of player is setted here
//becasue we cannot access setStage from onBegin of a phase
const onBeginChooseChar = ({events}) => {
  events.setActivePlayers({all: 'prep'});
}

const chooseCharacter = ({G, ctx, events, playerID}, id) => {
  if (!IsValidateChoosing(id, G, playerID)) {
    return INVALID_MOVE;
  }
  setCharacter(id, G, playerID);
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
      },
    },
    minMoves: 1,
  },
  start: true,
  endIf: endChooseCharacterPhase,
  next: 'InGame'
}

function IsValidateChoosing(id, G, playerID){
  return id < G.characterOptions[playerID].length
}

function setCharacter(id, G, playerID){
  const player = G.players[playerID];
  const character = G.characterOptions[playerID][id];

  player.character = character.name;
  player.health = character.lifePoint;
  if(player.role == Roles.SHERIFF) {
      player.health++;
  }

  //player get the number of card correspond to their health
  player.hand = G.drawPile.splice(-player.health);
}