import React from 'react'
import styles from '../Cta/Cta.module.scss';

const Cta = () => {
  return (
    <div className={styles.cta}>
        <section className={styles.ctaWrapper}>
            <h2>Be the first to know about our<br/>offers & workshops.</h2>
                <form className={styles.ctaForm}>
                    <input type="text" name="email" placeholder="Enter your email address"/>
                    <button>Subscribe</button>
                </form>
        </section>
        <div className={styles.whiteOverlay}></div>
    </div>
  )
}

export default Cta