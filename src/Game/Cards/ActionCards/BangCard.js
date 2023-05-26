import { CardAbstract } from "../CardAbstract";
export default class BangCard extends CardAbstract {
    constructor(){
        super();
    }

    useCard({events}){
        console.log('BangCard used');
        events.setStage('chooseTarget');
    }

    useTarget({G}, targetId){
        //if targetid = owner id -> false
        G.players[targetId].health -= 1;
    }
}