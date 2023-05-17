import Player from "./Player";

export const BangGame = {
  setup: ({ctx}) => {
    const players = {};
    for (let i = 0; i < ctx.numPlayers; i++) {
      players[i] = new Player(i);
    }
    return { players };
  },

  phases: {
    chooseChar: {
      moves: {
        chooseCard: ({G}, id) => {
          // console.log(G.characters[id].name);
        }
      },
      start: true,
      endIf: ({G}) => (0 > 1),
      next: 'draw'
    },

    draw: {

    }
  }
}

function setupGame() {
  const characters = [
    {name: "The first one"},
    {name: "The Second one"}
  ]

  return characters;
}