import React from 'react';
import styles from '../Navbar/Navbar.module.scss';

const Footer = () => {
  return (
    <footer>
        <section>
            <div>
                <h1>
                    <div className={styles.logo}>
                        <i className="fa-solid fa-cake-candles"></i>
                    </div>
                    Cake Shop
                </h1>
                <div>
                    <i class="fa-brands fa-square-instagram"></i>
                    <i class="fa-brands fa-square-facebook"></i>
                    <i class="fa-brands fa-blogger"></i>
                </div>
            </div>
            <div>
                <h3>Contact Us</h3>
                <div>
                    <p>957 Roberts Dr Elgin, South Carolina(SC), 29045</p>
                    <p>401-102-7063</p>
                    <p>example@gmail.com</p>
                    <p>Operating Hours:<br/>Mon - Sun 10:30am - 6pm<br/>Tuesday: Closed</p>
                </div>
            </div>
            <div>
                <h3>Quick Links</h3>
                <div>
                    <p>About Us</p>
                    <p>FAQs</p>
                    <p>Shipping & Returns</p>
                    <p>Terms & Conditions</p>
                </div>
            </div>
            <div>
                <h3>Resources</h3>
                <div>
                    <p>Help Center</p>
                    <p>Privacy terms</p>
                    <p>Directory</p>
                </div>
            </div>
            <small>Copyright © 2023 by Cake Shop, Inc, All rights reserved.</small>
            <div>Design and Developed by Krsitine de Jesus</div>
        </section>
    </footer>
  )
}

export default Footer