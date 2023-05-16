export const BangGame = {
  setup: () => ({characters: [{name: "The first one"}, {name: "The Second one"}]}),

  phases: {
    chooseChar: {
      moves: {
        chooseCard: ({G}, id) => {
          console.log(G.characters[id]);
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
  const characters= [
    {name: "The first one"},
    {name: "The Second one"}
  ]

  return {
    characters
  }
}