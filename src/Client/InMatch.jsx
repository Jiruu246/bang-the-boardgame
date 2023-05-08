import React, { useState } from 'react'
import { Deck } from '../Components/Deck'
import { Card } from '../Components/Card'
import { Hand } from '../Components/Hand'
import { DropTarget } from '../Components/DropTarget'

export const InMatch = () => {

  const [cards, setCards] = useState([
    {id: 0, title: "card 0"},
    {id: 1, title: "Card 1"},
    {id: 2, title: "Card 2"},
    {id: 3, title: "Card 3"}
  ]);

  const removeCard = (card) => {
    setCards(cards.filter(c => c.id !== card.id));
  };

  return (
      <div className='flex flex-col items-center justify-center gap-10'>
        <Deck/>
        <DropTarget removeElement={removeCard}/>

        <Hand className="bg-purple-100 w-full">
          {cards.map(card => {
            return (<Card key={card.id} card={card}/>)
          })}
        </Hand>

      </div>
  )
}
