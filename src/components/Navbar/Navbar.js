import styles from '../Navbar/Navbar.module.scss';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <section className={styles.navWrapper}>
                <div className={styles.rightLinks}>
                    <div>Home</div>
                    <div>About</div>
                    <div>Contact</div>
                    <div>Cakes</div>
                </div>
                <div className={styles.logoWrapper}>
                    <div className={styles.logo}>
                        <i className="fa-solid fa-cake-candles"></i>
                    </div>
                    <h1 className={styles.logoName}>Cake Shop</h1>
                </div>
                <div className={styles.leftLinks}>
                    <div>Login</div>
                    <div>Register</div>
                    <div>
                        <i className="fa-solid fa-cart-shopping"></i>
                    </div>
                </div>
            </section>
        </nav>
    )
}

export default Navbar