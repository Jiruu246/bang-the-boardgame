import React from 'react'
import { Draggable } from 'react-beautiful-dnd'

export const DragCompo = () => {
  return (
    <Draggable>
      <div
        className={`bg-blue-100 flex-shrink-0 rounded-lg p-6 w-[200px] h-[256px] border-2 border-black`}>
      </div>
    </Draggable>
  )
}
