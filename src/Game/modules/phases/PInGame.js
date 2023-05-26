import { CardClassType, CardType } from "../../Cards/CardEnum";

export const PInGame = {
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