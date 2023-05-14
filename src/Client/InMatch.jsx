import React, { useState, useContext, useEffect} from 'react'
import { Deck } from '../Components/Deck'
import { Card } from '../Components/Card'
import { Hand } from '../Components/Hand'
import { DropTarget } from '../Components/DropTarget'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import { DragCompo } from '../Components/DragCompo'
import { initialData } from '../Components/initialData'
import { Draggable } from 'react-beautiful-dnd'

export const InMatch = () => {

  const [cards, setCards] = useState(initialData.cards);

  const removeCard = (card) => {
    setCards(cards.filter(c => c.id !== card.id));
  };

  const handleDragEnd = () => {
    // TODO: create handle
  }

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className='flex flex-col items-center justify-center'>
        {/* <Deck/> */}
        {/* <DropTarget removeElement={removeCard}/> */}
        <Hand className="bg-purple-100 w-full">
          {/* {cards.map((card, index) => {
            return (<Card key={card.id} card={card} index={index}/>)
          })} */}

          {cards.map((card, index) => {
                return(
                  <DragCompo key={card.id} id={card.id} index={index}/>
                )
              })}
        </Hand>
        {/* <Droppable droppableId={"hello"} direction="horizontal">
          {(provided) => (
            <div 
              ref={provided.innerRef}
              {...provided.droppableProps}
              className="flex justify-around w-full gap-2">
              {cards.map((card, index) => {
                return(
                  <DragCompo key={card.id} id={card.id} index={index}/>
                )
              })}
              {provided.placeholder}
            </div>
          )}

        </Droppable> */}
      </div>

    </DragDropContext>
  )
}
