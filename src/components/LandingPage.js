import React from 'react'
import { useStateContext } from '../context/StateContextProvider'
import CakeList from './Cakes/Cakes'
import Hero from './Hero/Hero'
import Orders from './Orders/Orders'

const LandingPage = () => {
  const { showCart } = useStateContext()
  return (
    <>
        { showCart && <Orders /> }
        <Hero />
        <CakeList />
    </>
  )
}

export default LandingPage