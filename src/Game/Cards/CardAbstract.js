export default class CardAbstract {
    constructor(cardType){
        if (this.constructor === CardAbstract) {
            throw new TypeError('Abstract class "CardAbstract" cannot be instantiated directly.'); 
        }
        this.CardType = cardType;
    }

    useCard(){
        throw new Error('You have to implement the method useCard!');
    }
}