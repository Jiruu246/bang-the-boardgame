import React, { useState, useContext, useEffect} from 'react'
import { Deck } from '../Components/Deck'
import { Card } from '../Components/Card'
import { Hand } from '../Components/Hand'
import { DropTarget } from '../Components/DropTarget'
import { DragDropContext } from 'react-beautiful-dnd'
import { DragCompo } from '../Components/DragCompo'

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

  const handleDragEnd = () => {
    // TODO: create handle
  }

  return (
      <div className='flex flex-col items-center justify-center gap-10'>
        {/* <Deck/> */}
        {/* <DropTarget removeElement={removeCard}/> */}
        {/* <Hand className="bg-purple-100 w-full">
          {cards.map(card => {
            return (<Card key={card.id} card={card}/>)
          })}
        </Hand> */}

        <div className="flex justify-around w-full gap-2">
          {cards.map((card, index) => {
            return(
              <DragCompo key={card.id} id={card.id} index={index}/>
            )
          })}
        </div>
      </div>
  )
}
