import React from 'react'
import {CARD_WIDTH, CARD_HEIGHT} from './Global.jsx'
import { useDrag } from 'react-dnd'
import { ItemTypes } from './Global.jsx'

export const Card = ({className, style, test}) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.CARD,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  }))

  return (
    <div ref={drag} className={`bg-blue-100 flex-shrink-0 rounded-lg p-6 w-[200px] h-[256px] border-2 border-black ${className}`} style={style}>
        <p className="text-xl font-bold mb-4">Card Title</p>
        <p className="text-gray-600 mb-4">{test}</p>
    </div>
  )
}
