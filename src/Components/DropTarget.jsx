import React from 'react'
import { useDrop } from 'react-dnd'
import { ItemTypes } from './Global'
import {Card} from './Card'

export const DropTarget = ({removeElement}) => {

    const [cards, setCards] = React.useState([])

    const [{isOver}, drop] = useDrop(() => ({
        accept: ItemTypes.CARD,
        drop: (item, monitor) => addCard(item),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        })
    }))

    const addCard = (item) => {
        setCards([...cards, {id: item.id, title: item.title}])
        removeElement(item.id);
    }

    return (
        <div ref={drop} className='bg-purple-500 border-2 h-80 flex'>
            this is where drop
        {/* render all the cards */}
        {cards.map(item => {
            return (
                <Card key={item.id} title={item.title}/>
            )
        })}

        </div>
    )
}
