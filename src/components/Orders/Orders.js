import React from 'react';
import { useStateContext } from '../../context/StateContextProvider';
import styles from '../Orders/Orders.module.scss';
import EmptyState from './EmptyState';

export default function Orders() {
  const { cartItems, handleRemoveCart, handleCartClick, totalPrice, cartItemQtyIncrease } = useStateContext()

  return (
    <section className={styles.orders}>
      <div className={styles.ordersContainer}>
        <div className={styles.ordersHeader}>
            <i className="fa-solid fa-chevron-left" onClick={handleCartClick}></i>
            <span>Orders ({cartItems.length})</span>
        </div>
        <div className={styles["orders-wrapper"]}>
        {
          cartItems.length !== 0 ? (
            cartItems.map((cake, index) => (
              <div key={index} className={styles["order-content"]}>
                <i className="fa-solid fa-x" onClick={() => handleRemoveCart(cake)}></i>
                <div className={styles["order-img-wrapper"]}>
                  <img src={cake.images[0]} alt={`${cake.cakeName}`} />
                </div>
                <div className="order-details">
                  <div className={styles["cakeName-category"]}>
                    <h3>{cake.cakeName}</h3>
                    <p>{cake.category} Cake</p>
                  </div>
                  <div className={styles.quantity}>
                    <i className="fa-solid fa-minus fa-xs" ></i>
                    <span>{cake.quantity}</span>
                    <i className="fa-solid fa-plus fa-xs" onClick={cartItemQtyIncrease}></i>
                  </div>
                </div>
                <p className={styles["order-price"]}>{cake.details.price}.00</p>
              </div>
            ))
          )
          : <EmptyState />
        }
        </div>
        <div className={styles.totalSummary}>
            <span>Subtotal</span>
            <span>Php {totalPrice}</span>
        </div>
      </div>
    </section>
  )
}
