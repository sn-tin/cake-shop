import React from 'react';
import { useCart, useDispatchCart } from '../../context/ReducerProvider';
import { useStateContext } from '../../context/StateContextProvider';
import styles from '../Orders/Orders.module.scss';
import EmptyState from './EmptyState';

export default function Orders() {
  const { handleCartClick } = useStateContext();
  const items = useCart(); /* data returned on state from useReducer */
  const dispatch = useDispatchCart();

  const handleRemoveCart = (index) => {
    dispatch({ type: "REMOVE", index})
  }
  
  return (
    <section className={styles.orders}>
      <div className={styles.ordersContainer}>
        <div className={styles.ordersHeader}>
            <i className="fa-solid fa-chevron-left" onClick={handleCartClick}></i>
            <span>Orders ({items.length})</span>
        </div>
        {
          items.length !== 0 ? (
            items.map((cake, index) => (
              <div key={index} >
                <i className="fa-solid fa-x" onClick={() => handleRemoveCart(cake?.index)}></i>
                <div className="order-img-wrapper">
                  <img src={cake?.images[0]} alt={`${cake?.cakeName}`} />
                </div>
                <div className="order-details">
                  <div>
                    <h1>{cake?.cakeName}</h1>
                    <p>{cake?.category} Cake</p>
                    <p>{cake?.details.price}</p>
                  </div>
                  <div className={styles.quantity}>
                    <i className="fa-solid fa-minus fa-xs" ></i>
                    <span>1</span>
                    <i className="fa-solid fa-plus fa-xs" ></i>
                  </div>
                </div>
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
