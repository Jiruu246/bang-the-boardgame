import React from 'react'
import {CARD_WIDTH, CARD_HEIGHT} from './Global.jsx'

export const Card = ({className, style}) => {
  return (
    <div className={`bg-blue-100 flex-shrink-0 rounded-lg p-6 w-[200px] h-[256px] border-2 border-black ${className}`} style={style}>
        <p className="text-xl font-bold mb-4">Card Title</p>
        <p className="text-gray-600 mb-4">Card content goes here.</p>
    </div>
  )
}
