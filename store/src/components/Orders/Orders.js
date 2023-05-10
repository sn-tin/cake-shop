import React from 'react';
import { useStateContext } from '../../context/StateContextProvider';
import styles from './Orders.module.scss';
import EmptyState from './EmptyState';

export default function Orders() {
  const { cartItems, handleRemoveCart, handleCartClick, totalPrice, cartItemQty, totalQty, formatPrice } = useStateContext()

  const checkout = async () => {
    await fetch('https://cakeit-shop.vercel.app/checkout', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({items: cartItems})
    }).then((response) => {
        return response.json();
    }).then((response) => {
        if(response.url) {
            window.location.assign(response.url); // Forwarding user to Stripe
        }
    });
  }

  return (
    <section className={styles.orders}>
      <div className={styles.ordersContainer}>
        <div className={styles.ordersHeader}>
            <i className="fa-solid fa-chevron-left" onClick={handleCartClick}></i>
            <span>Orders ({totalQty})</span>
        </div>
        <div className={styles["orders-wrapper"]}>
        {
          totalQty !== 0 ? (
            cartItems?.map((cake, index) => (
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
                    <i className="fa-solid fa-minus fa-xs" onClick={() => cartItemQty("dec", cake.index)}></i>
                    <span>{cake.quantity}</span>
                    <i className="fa-solid fa-plus fa-xs" onClick={() => cartItemQty("inc", cake.index)}></i>
                  </div>
                </div>
                <p className={styles["order-price"]}>${formatPrice(cake.details.price)}</p>
              </div>
            ))
          )
          : <EmptyState />
        }
        </div>
        <div className={styles.totalSummary}>
            <span>Subtotal</span>
            <span>${formatPrice(totalPrice)}</span>
        </div>
        { totalQty !== 0 && <button className={styles["order__payment"]} onClick={checkout}>Pay with Stripe</button> }
      </div>
    </section>
  )
}
