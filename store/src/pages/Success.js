import React from 'react';
import styles from "./Confirmation.module.scss";

function Success() {
  return (
    <section className={styles.confirmation}>
      <i className="fa-solid fa-circle-check fa-xl"></i>
      <h1>THANK YOU<br/><span>FOR YOUR PURCHASE</span></h1>
      <p>A receipt of orders will be sent to your email.</p>
      <small>Having trouble? Contact Us</small>
      <button>Continue to Homepage</button>
    </section>
  )
}

export default Success