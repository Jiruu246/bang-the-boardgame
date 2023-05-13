import React from 'react'
import { Draggable } from 'react-beautiful-dnd'

export const DragCompo = (id, index) => {
  return (
    <Draggable
      draggableId={id}
      index={index}>
      {(provided) => (
        <div
          className={`bg-blue-100 flex-shrink-0 rounded-lg p-6 w-[200px] h-[256px] border-2 border-black`}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}>
        </div>
      )}
    </Draggable>
  )
}
