import React from 'react';
import styles from '../Orders/Orders.module.scss';
import emptyCart from '../../assets/empty-cart.png';
import { useStateContext } from '../../context/StateContextProvider';

export default function EmptyState() {
  const { handleScrollToProducts } = useStateContext();
  return (
    <div className={styles.ordersEmpty}>
        <img src={emptyCart} alt="Illustration of empty cart" />
        <p>Oh no.. your cart is empty<br/>
        <span>but it doesn't have to be</span></p>
        <button onClick={handleScrollToProducts}>Shop Now</button>
    </div>
  )
}
