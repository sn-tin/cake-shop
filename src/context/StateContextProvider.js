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
    }
    
    const addToCart = (product) => {
      cartItems.unshift(product)
      product.quantity = quantity
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
      setTotalPrice(prevTotalPrice => prevTotalPrice + product.details.price * quantity)
      setQuantity(1)
    }
    
    const handleRemoveCart = (cake) => {
      const deleteItem = cartItems.filter(item => item.index !== cake.index)
      setCartItems(deleteItem)
      setTotalPrice(prevTotalPrice => prevTotalPrice - cake.quantity * cake.details.price)
    }

    const cartItemQty = (ref, id) => {
      const foundItem = cartItems.find(item => item.index === id)
      if(ref.current.className.includes("fa-plus")){
        const updateCartItem = cartItems.map((item) => {
          if(foundItem.index === id) {
            return {
              ...item,
              quantity: item.quantity + 1
            }
          }
        })
        setCartItems(updateCartItem)
        setTotalPrice(prevTotalPrice => prevTotalPrice + parseInt(foundItem.details.price))
      } else if(ref.current.className.includes("fa-minus")){
        const updateCartItem = cartItems.map((item) => {
          if(foundItem.index === id) {
            return {
              ...item,
              quantity: item.quantity - 1
            }
          }
        })
        console.log(ref)
        setCartItems(updateCartItem)
        setTotalPrice(prevTotalPrice => prevTotalPrice - parseInt(foundItem.details.price))
      }
      console.log(ref)
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
        cartItemQty,
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