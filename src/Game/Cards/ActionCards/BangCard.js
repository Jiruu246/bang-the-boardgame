import { CardAbstract } from "../CardAbstract";
export default class BangCard extends CardAbstract {
    constructor(){
        super();
    }

    useCard(){
        console.log('BangCard used');
    }
}