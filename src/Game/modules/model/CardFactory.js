import { CardType } from "../../Cards/CardEnum";


export class cardFactory {

  createCard(cardType){
    const card = CardType[cardType]
    return new card;
  }
}