import React from 'react';
import { useNavigate } from "react-router-dom";
import styles from "./Confirmation.module.scss";

function Success() {
  const navigate = useNavigate();
  return (
    <section className={styles.confirmation}>
      <h1>Thank you for your purchase!</h1>
      <p>A receipt of orders will be sent to your email.<br/> It will be delivered 2-5 business days.</p>
      <p>Email at  <a href="https://mail.google.com/mail/?view=cm&fs=1&href=kristinemaydj.work@gmail.com" target="_blank" rel="noreferrer">cakeit@gmail.com</a> with any questions or suggestions.
      </p>
      <br/>
      <button onClick={() => navigate('/')}>Continue to Homepage</button>
    </section>
  )
}

export default Success