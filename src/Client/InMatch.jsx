import React from 'react'
import { Deck } from '../Components/Deck'
import { Card } from '../Components/Card'
import { Hand } from '../Components/Hand'
import { DropTarget } from '../Components/DropTarget'

export const InMatch = () => {
  const level = 400;

  return (
      <div className='flex flex-col items-center justify-center gap-10'>
        <Deck/>
        <DropTarget/>

        <Hand className="bg-purple-100 w-full">
            <Card className="" test="test 1"/>
            <Card className="" test="test 2"/>
            <Card className="" test="test 3"/>
            <Card className="" test="test 4"/>
        </Hand>

        <h1 className={`bg-purple-${level}`}>this is a test</h1>

      </div>
  )
}
