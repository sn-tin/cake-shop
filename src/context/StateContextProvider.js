import React, { createContext, useContext, useEffect, useState } from 'react'

export const StateContext = createContext()

export default function StateContextProvider({children}) {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [quantity, setQuantity] = useState(1)
    const [showCart, setShowCart] = useState(false);
    const [cake, setCake] = useState(null)
    const [cartItems, setCartItems] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)

    const handleNavMenu = () => {
        setIsNavOpen(!isNavOpen)
    }
    
    const displayCakeDetails = (item) => {
      setCake(item)
    }
    
    const increaseQty = () => {
      setQuantity(prevState => prevState + 1)
    }
    
    const decreaseQty = () => {
      setQuantity(prevState => prevState - 1)
      if(quantity <= 1) {
        setQuantity(1)
      }
    }
    
    const updateCart = (product) => {
      let updatedCartItem = cartItems.map(item => {
          if(item.index === product.index){
              let newQty = item.quantity + quantity
              return {
                  ...item,
                  quantity: newQty
              }
          } else {
              return {
                  ...cartItems
              }
          }
      })
      setCartItems(updatedCartItem)
      setTotalPrice(prevPrice => prevPrice + product.details.price * quantity)
    }
    
    const addToCart = (product) => {
      setCartItems([...cartItems, { ...product, quantity }])
      setTotalPrice(prevPrice => prevPrice + product.details.price * quantity)
    }
    
    const onAddClick = (product, button) => {
      const existingProduct = cartItems.find((item) => item.index === product.index);
      if(existingProduct){
        updateCart(product)
      } else {
        addToCart(product)
      }
      if(button.toLowerCase() === "buy now"){
        handleCartClick()
      }
      setQuantity(1)
    }
    
    const handleRemoveCart = (cake) => {
      const deleteItem = cartItems.filter(item => item.index !== cake.index)
      setCartItems(deleteItem)
      setTotalPrice(prevPrice => prevPrice - cake.quantity * cake.details.price)
    }

    const cartItemQtyIncrease = (product) => {
      const foundItem = cartItems.find((item) => item.index === product.index);
      return {
        ...product,
        quantity: foundItem.quantity + 1
      } 
    }
    
    const handleCartClick = () => {
      setShowCart(!showCart)
    }
    
    const formatPrice = (value) => value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return (
    <StateContext.Provider value={{
        isNavOpen,
        handleNavMenu,
        cartItems, 
        updateCart,
        addToCart,
        onAddClick,
        totalPrice,
        handleRemoveCart,
        cartItemQtyIncrease,
        cake,
        displayCakeDetails,
        quantity,
        setQuantity,
        increaseQty,
        decreaseQty,
        showCart,
        handleCartClick,
        formatPrice,
    }}>
        {children}
    </StateContext.Provider>
  )
}
export const useStateContext = () => useContext(StateContext)