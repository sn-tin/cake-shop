import React, { createContext, useContext, useState } from 'react'

export const StateContext = createContext()

export default function StateContextProvider({children}) {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const handleNavMenu = () => {
        setIsNavOpen(!isNavOpen)
    }
    const [quantity, setQuantity] = useState(0)
    const increaseQty = () => {
      setQuantity(prevState => prevState + 1)
    }
    const decreaseQty = () => {
      setQuantity(prevState => prevState - 1)
      if(quantity <= 0) {
        setQuantity(0)
      }
    }
    const [showCart, setShowCart] = useState(false);
    const handleCartClick = () => {
      setShowCart(!showCart)
    }
  return (
    <StateContext.Provider value={{
        isNavOpen,
        handleNavMenu,
        quantity,
        increaseQty,
        decreaseQty,
        showCart,
        handleCartClick
    }}>
        {children}
    </StateContext.Provider>
  )
}
export const useStateContext = () => useContext(StateContext)