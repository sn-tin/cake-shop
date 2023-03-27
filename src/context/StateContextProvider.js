import React, { createContext, useContext, useState } from 'react'

export const StateContext = createContext()

export default function StateContextProvider({children}) {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const handleNavMenu = () => {
        setIsNavOpen(!isNavOpen)
    }
    const [quantity, setQuantity] = useState(1)
    const increaseQty = () => {
      setQuantity(prevState => prevState + 1)
    }
    const decreaseQty = () => {
      setQuantity(prevState => prevState - 1)
      if(quantity <= 1) {
        setQuantity(1)
      }
    }
    const [showCart, setShowCart] = useState(false);
    const handleCartClick = () => {
      setShowCart(!showCart)
    }
    /* Format price/number */ 
    const formatPrice = (value) => value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return (
    <StateContext.Provider value={{
        isNavOpen,
        handleNavMenu,
        quantity,
        increaseQty,
        decreaseQty,
        showCart,
        handleCartClick,
        formatPrice
    }}>
        {children}
    </StateContext.Provider>
  )
}
export const useStateContext = () => useContext(StateContext)