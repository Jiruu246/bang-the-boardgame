import React from 'react'

export const CardContex = React.createContext(null);

export const CardContexProvider = ({children}) => {
  const [cards, setCards] = React.useState([]);

  return (
    <CardContex.Provider value={{cards, setCards}}>
      {children}
    </CardContex.Provider>
  )
}
