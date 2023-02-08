import styles from '../Navbar/Navbar.module.scss';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <section className={styles.navWrapper}>
                <div className={styles.rightLinks}>
                    <div>About</div>
                    <div>Contact</div>
                    <div>Cakes</div>
                </div>
                <div className={styles.navMenu}>
                    <span></span>
                    <span></span>
                </div>
                <div className={styles.navMenuList}>
                        <div>About</div>
                        <div>Contact</div>
                        <div>Cakes</div>
                        <div>Login</div>
                        <button>Register</button>
                    </div>
                <div className={styles.logoWrapper}>
                    <div className={styles.navLogo}>
                        <i className="fa-solid fa-cake-candles"></i>
                    </div>
                    <h1 className={styles.navLogoName}>Cake Shop</h1>
                </div>
                <div className={styles.leftLinks}>
                    <div className={styles.login}>Login</div>
                    <div className={styles.register}>Register</div>
                    <div className={styles.cart}>
                        <i className="fa-solid fa-cart-shopping fa-xl"></i>
                        <div className={styles.cartCounter}>10+</div>
                    </div>
                </div>
            </section>
        </nav>
    )
}

export default Navbar