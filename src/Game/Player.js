export default class Player {
  constructor(id){
    this.id = id;
    this.health = 10;
    this.hand = [];
  }

  drawCard(card){
    this.hand.push(card)
  }
}