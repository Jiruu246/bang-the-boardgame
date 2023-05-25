export class CardAbstract {
    constructor(){
        if (this.constructor === CardAbstract) {
            throw new TypeError('Abstract class "CardAbstract" cannot be instantiated directly.');
        }
    }

    useCard(){
        throw new Error('You have to implement the method useCard!');
    }
}