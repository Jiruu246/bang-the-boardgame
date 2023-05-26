export class CardAbstract {
    constructor(){
        if (this.constructor === CardAbstract) {
            throw new TypeError('Abstract class "CardAbstract" cannot be instantiated directly.');
        }
    }

    //abstract function every child class must implement
    useCard(G, ctx, playerID, events){
        throw new Error('You have to implement the method useCard!');
    }
}