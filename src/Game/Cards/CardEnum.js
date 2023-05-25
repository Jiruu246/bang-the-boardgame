// export const CardType = {
//     Character: 'Character',
//     Equipment: 'Equipment',
//     Action: 'Action',
//     Effect: 'Effect',
// };

import BangCard from "./ActionCards/BangCard";
import BeerCard from "./ActionCards/BeerCard";

export const CardType = {
    Bang: 'Bang',
    Beer: 'Beer',
}

export const CardClassType = {
    [CardType.Bang]: BangCard,
    [CardType.Beer]: BeerCard
}