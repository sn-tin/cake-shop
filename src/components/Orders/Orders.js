import React from 'react';
import { useStateContext } from '../../context/StateContextProvider';
import styles from '../Orders/Orders.module.scss';
import EmptyState from './EmptyState';

export default function Orders() {
  const { handleCartClick } = useStateContext()
  return (
    <section className={styles.orders}>
      <div className={styles.ordersContainer}>
        <div className={styles.ordersHeader}>
            <i className="fa-solid fa-chevron-left" onClick={handleCartClick}></i>
            <span>Orders (0)</span>
        </div>
        <EmptyState />
        <div className={styles.totalSummary}>
            <span>Subtotal</span>
            <span>Php 0.00</span>
        </div>
      </div>
    </section>
  )
}
