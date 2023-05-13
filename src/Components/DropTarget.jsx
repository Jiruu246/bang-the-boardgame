import React from 'react'
// import { useDrop } from 'react-dnd'
import { ItemTypes } from './Global'
import {Card} from './Card'
import {CardContex} from './Context/CardContexProvider'

export const DropTarget = () => {

    // const [cards, setCards] = React.useState(null)
    const setCards = React.useContext(CardContex).setCards;

    // const [{isOver}, drop] = useDrop(() => ({
    //     accept: ItemTypes.CARD,
    //     drop: (item, monitor) => playCard(item),
    //     collect: (monitor) => ({
    //         isOver: !!monitor.isOver(),
    //     })
    // }),)

    const playCard = (item) => {
        console.log(item.id)
        setCards(prev => prev.filter(card => card.id !== item.id))
        // setCards([...cards, {id: item.id, title: item.title}])
        // removeElement(item);
    }

    return (
        <div className='bg-purple-500 border-2 h-80 flex'>
            this is drop space
        </div>
    )
}
