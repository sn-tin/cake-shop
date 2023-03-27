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
    console.log(index)
  }
  
  return (
    <section className={styles.orders}>
      <div className={styles.ordersContainer}>
        <div className={styles.ordersHeader}>
            <i className="fa-solid fa-chevron-left" onClick={handleCartClick}></i>
            <span>Orders ({items.length})</span>
        </div>
        <div className={styles["orders-wrapper"]}>
        {
          items.length !== 0 ? (
            items.map((cake, index) => (
              <div key={index} className={styles["order-content"]}>
                <i className="fa-solid fa-x" onClick={() => handleRemoveCart(cake?.index)}></i>
                <div className={styles["order-img-wrapper"]}>
                  <img src={cake?.images[0]} alt={`${cake?.cakeName}`} />
                </div>
                <div className="order-details">
                  <div className={styles["cakeName-category"]}>
                    <h3>{cake?.cakeName}</h3>
                    <p>{cake?.category} Cake</p>
                  </div>
                  <div className={styles.quantity}>
                    <i className="fa-solid fa-minus fa-xs" ></i>
                    <span>1</span>
                    <i className="fa-solid fa-plus fa-xs" ></i>
                  </div>
                </div>
                <p className={styles["order-price"]}>{cake?.details.price}.00</p>
              </div>
            ))
          )
          : <EmptyState />
        }
        </div>
        <div className={styles.totalSummary}>
            <span>Subtotal</span>
            <span>Php 0.00</span>
        </div>
      </div>
    </section>
  )
}
