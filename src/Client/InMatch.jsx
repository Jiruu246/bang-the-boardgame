import React from 'react'
import { Deck } from '../Components/Deck'
import { Card } from '../Components/Card'
import { Hand } from '../Components/Hand'

export const InMatch = () => {
  const level = 400;

  return (
    <div className='flex flex-col items-center justify-center gap-10'>
      <Deck/>

      <Hand className="bg-purple-100 w-full">
          <Card className=""/>
          <Card className=""/>
          <Card className=""/>
          <Card className=""/>
      </Hand>

      <h1 className={`bg-purple-${level}`}>this is a test</h1>

    </div>
  )
}
