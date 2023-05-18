export default class BangCard extends CardAbstract {
    constructor(){
        super(CardType.Action);
    }

    useCard(){
        console.log('BangCard used');
    }
}