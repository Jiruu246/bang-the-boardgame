import { CardAbstract } from "../CardAbstract";
import { CardType } from "../CardEnum";
export default class BangCard extends CardAbstract {
    constructor(){
        super(CardType.Bang);
    }

    useCard({G, events}){
        console.log('BangCard used');
        G.activeCard = this._cardType;
        events.setStage('chooseTarget');
    }

    useTarget({G}, targetId){
        //if targetid = owner id -> false
        G.players[targetId].health -= 1;
    }
}