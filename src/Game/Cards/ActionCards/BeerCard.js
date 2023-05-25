import { CardAbstract } from "../CardAbstract";
export default class BeerCard extends CardAbstract {
  constructor(){
      super();
  }

  useCard(){
      console.log('Beer used');
  }
}