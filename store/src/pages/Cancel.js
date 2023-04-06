import React from 'react';
import { useNavigate } from "react-router-dom";
import styles from "./Confirmation.module.scss";;

function Cancel() {
  const navigate = useNavigate();
  return (
    <section className={styles.confirmation}>
      <h1>Until next time</h1>
      <p>We're sorry to see you cancelled your Stripe payment. See you on your next purchase!</p>
      <button onClick={() => navigate('/')}>Continue to Homepage</button>
    </section>
  )
}

export default Cancel