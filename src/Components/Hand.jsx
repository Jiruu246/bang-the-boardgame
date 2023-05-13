import React from 'react';
import { useEffect, useState, useRef } from 'react';
import { CARD_WIDTH } from './Global';
import { Droppable } from 'react-beautiful-dnd';

export const Hand = ({className, children }) => {

    const [width, setWidth] = useState(null);
    const [stacked, setStacked] = useState(false);
    const myRef = useRef(null);
    const numChildren = React.Children.count(children);

    const handleResize = () => {
        if(myRef.current){
            setWidth(myRef.current.offsetWidth);
            setStacked(width / (200*numChildren) < 1);
        }
    };
    
    useEffect(() => {
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [width])

    function calculateCardRepositioning(index){
        const overlap =Math.ceil((numChildren*CARD_WIDTH - width) / (numChildren - 1));
        const xPosition = (CARD_WIDTH - overlap) * index;
        return xPosition;
    }

    const stackedChildren = React.Children.map(children, (child, index) => {
        const xPosition = calculateCardRepositioning(index);
        const childStyle = { position: 'absolute', left: `${xPosition}px` };
        return React.cloneElement(child, {style: childStyle});
      });

    return (
        <Droppable droppableId="Hand">
            {provided => (
                <div 
                    ref={provided.innerRef}
                    // innerRef={provided.innerRef}
                    {...provided.droppableProps}
                    // ref={myRef} 
                    className={`flex relative justify-around h-[256px] min-w-[200px] ${className}`}>
                    {stacked ? stackedChildren : children}
                    {provided.placeholder}
                </div>
            )}

        </Droppable>

    )
}
