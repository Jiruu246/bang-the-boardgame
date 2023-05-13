import React, { useState, useContext, useEffect} from 'react'
import { Deck } from '../Components/Deck'
import { Card } from '../Components/Card'
import { Hand } from '../Components/Hand'
import { DropTarget } from '../Components/DropTarget'
import { CardContex } from '../Components/Context/CardContexProvider'
import { DragDropContext } from 'react-beautiful-dnd'


export const InMatch = () => {

  const {cards, setCards} = useContext(CardContex);

  useEffect(() => {
    setCards( 
      [
      {id: 1, title: "Card 1"},
      {id: 2, title: "Card 2"},
      {id: 3, title: "Card 3"},
      {id: 4, title: "Card 4"}
      ]
    )

  }, [])

  const handleDragEnd = (result) => {
    //TODO: update state
  }

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className='flex flex-col items-center justify-center gap-10'>
        <Deck/>
        <DropTarget/>

        <Hand className="bg-purple-100 w-full">
          {cards && cards.map((card, index) => {
            return (<Card key={card.id} card={card} index={index}/>)
          })}
        </Hand>

      </div>

    </DragDropContext>
  )
}
