import React, { createContext, useContext, useEffect, useState } from 'react'

export const StateContext = createContext()

export default function StateContextProvider({children}) {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [quantity, setQuantity] = useState(1)
    const [totalQty, setTotalQty] = useState(0)
    const [showCart, setShowCart] = useState(false);
    const [cake, setCake] = useState(null)
    const [cartItems, setCartItems] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
      if(totalQty === 0) {
        setTotalPrice(0)
      }
    },[totalQty])
    
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
                  ...item
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
      setTotalPrice(prevTotalPrice => prevTotalPrice + (product.details.price * quantity))
      setTotalQty(prevTotalQuantities => prevTotalQuantities + quantity)
      setQuantity(1)
    }
    
    const handleRemoveCart = (cake) => {
      const deleteItem = cartItems.filter(item => item.index !== cake.index)
      setCartItems(deleteItem)
      setTotalPrice(prevTotalPrice => prevTotalPrice - (cake.quantity * cake.details.price))
      setTotalQty(prevTotalQuantities => prevTotalQuantities - cake.quantity)
    }

    const cartItemQty = (value, id) => {
      const foundItem = cartItems.find(item => item.index === id)
      if(value === "inc"){
        const updateCartItem = cartItems.map((item) => {
          if(item.index === id) {
            return {
              ...item,
              quantity: item.quantity + 1
            }
          } else {
            return {
              ...item,
            }
          }
        })
        setCartItems(updateCartItem)
        setTotalPrice(prevTotalPrice => (prevTotalPrice + foundItem.details.price))
        setTotalQty(prevTotalQuantities => prevTotalQuantities + 1)
      }
      if(value === "dec"){
        const updateCartItem = cartItems.map((item) => {
          if(item.index === id) {
            if(item.quantity > 1){
            setTotalPrice(prevTotalPrice => (prevTotalPrice - foundItem.details.price))
            setTotalQty(prevTotalQuantities => prevTotalQuantities - 1)
            return {
              ...item,
              quantity: item.quantity - 1
            }
          } else {
            return {
              ...item,
              quantity: 1
            }
          }
        } else {
            return {
              ...item,
            }
          }
        })
        setCartItems(updateCartItem)
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
        cartItemQty,
        cake,
        displayCakeDetails,
        quantity,
        totalQty,
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