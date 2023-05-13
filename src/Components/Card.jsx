import React from 'react'
import {CARD_WIDTH, CARD_HEIGHT} from './Global.jsx'
// import { useDrag } from 'react-dnd'
import { ItemTypes } from './Global.jsx'
import { Draggable } from 'react-beautiful-dnd'

export const Card = ({className, style, card, index}) => {
  // const [{ isDragging }, drag] = useDrag(() => ({
  //   type: ItemTypes.CARD,
  //   item :{
  //     id: card.id,
  //   },
  //   collect: (monitor) => ({
  //     isDragging: !!monitor.isDragging()
  //   })
  // }))

  return (
    <Draggable draggableId={toString(card.id)} index={index}>
      {provided => (
        <div 
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          className={`bg-blue-100 flex-shrink-0 rounded-lg p-6 w-[200px] h-[256px] border-2 border-black ${className}`} 
          style={style}>
            <p className="text-xl font-bold mb-4">Card Title</p>
            <p className="text-gray-600 mb-4">{card.title}</p>
        </div>
      )}
    </Draggable>
  )
}
