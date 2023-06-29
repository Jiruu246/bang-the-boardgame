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

export const NumberOfCards = {
    Bang: 24,
    Beer: 6,
    Missed: 12,
    Duel: 3,
    Indians: 3,
    GeneralStore: 2,
    Panic: 1,
    CatBalou: 2,
    Stagecoach: 2,
    WellsFargo: 2,
    Saloon: 1,
    Barrel: 1,
    Jail: 1,
    Dynamite: 1,
  };

export const CardClassType = {
    [CardType.Bang]: BangCard,
    [CardType.Beer]: BeerCard
}