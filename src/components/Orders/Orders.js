import React, { useEffect } from 'react';
import { useCart, useDispatchCart } from '../../context/ReducerProvider';
import { useStateContext } from '../../context/StateContextProvider';
import styles from '../Orders/Orders.module.scss';
import EmptyState from './EmptyState';

export default function Orders() {
  const { handleCartClick } = useStateContext();
  const items = useCart();
  const dispatch = useDispatchCart();

  // const handleRemoveCart = (index) => {
  //   dispatch({ type: "REMOVE", index})
  // }

  return (
    <section className={styles.orders}>
      <div className={styles.ordersContainer}>
        <div className={styles.ordersHeader}>
            <i className="fa-solid fa-chevron-left" onClick={handleCartClick}></i>
            <span>Orders (0)</span>
        </div>
        {
          items.length !== 0 ? (
            items.map((cake, index) => (
              <div key={index} >
                <i className="fa-solid fa-x"></i>
                <img src={cake?.images[0]} alt={`${cake?.cakeName}`} />
                <h1>{cake?.cakeName}</h1>
                <p>{cake?.category}</p>
                <p>{cake?.price}</p>
              </div>
            ))
          )
          : <EmptyState />
        }
        <div className={styles.totalSummary}>
            <span>Subtotal</span>
            <span>Php 0.00</span>
        </div>
      </div>
    </section>
  )
}
