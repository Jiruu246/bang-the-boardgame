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
    Missed: 'Missed',
    Duel: 'Duel',
    Indians: 'Indians',
    GeneralStore: 'General Store',
    Panic: 'Panic',
    CatBalou: 'Cat Balou',
    Stagecoach: 'Stagecoach',
    WellsFargo: 'Wells Fargo',
    Saloon: 'Saloon',
    Barrel: 'Barrel',
    Jail: 'Jail',
    Dynamite: 'Dynamite',
};

export const CardClassType = {
    [CardType.Bang]: BangCard,
    [CardType.Beer]: BeerCard
}