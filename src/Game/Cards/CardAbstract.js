export class CardAbstract {


    constructor(cardType){
        if (this.constructor === CardAbstract) {
            throw new TypeError('Abstract class "CardAbstract" cannot be instantiated directly.');
        }
        this._cardType = cardType;
    }

    //abstract function every child class must implement
    useCard({G, ctx, playerID, events}){
        throw new Error('You have to implement the method useCard!');
    }
}