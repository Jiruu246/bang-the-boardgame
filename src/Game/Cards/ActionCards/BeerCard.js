import { CardAbstract } from "../CardAbstract";
import { CardType } from "../CardEnum";
export default class BeerCard extends CardAbstract {
  constructor(){
      super(CardType.Beer);
  }

  useCard(){
      console.log('Beer used');
  }
}