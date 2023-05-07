import React from 'react'
import { useDrop } from 'react-dnd'
import { ItemTypes } from './Global'
import {Card} from './Card'

export const DropTarget = () => {

    const [cards, setCards] = React.useState([])

    const [{isOver}, drop] = useDrop(
        () => ({ 
            accept: ItemTypes.CARD,
            drop: (item, monitor) => addCard(),
            collect: (monitor) => ({
                isOver: !!monitor.isOver(),
            })
    }))

    const addCard = () => {
        setCards([...cards, {title: 'wow this is cool'}])
    }

    return (
        <div ref={drop} className='bg-purple-500 border-2 h-80 flex'>
            this is where drop
        {/* render all the cards */}
        {cards.map((item) => {
            return (
                <Card key={item.id} test={item.title}/>
            )
        })}

        </div>
    )
}
