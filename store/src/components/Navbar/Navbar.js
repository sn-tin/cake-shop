import { Link, NavLink } from 'react-router-dom';
import { useStateContext } from '../../context/StateContextProvider';
import styles from '../Navbar/Navbar.module.scss';


const Navbar = () => {
    const { handleCartClick, isNavOpen, handleNavLinks, handleNavMenu, totalQty } = useStateContext()

    return (
        <nav className={styles.navbar}>
            <section className={styles.navWrapper}>
                <div className={styles.rightLinks}>
                    <NavLink to="/#cakes" onClick={handleNavLinks("cakes")}>Cakes</NavLink>
                    <NavLink to='/about'>About</NavLink>
                    <NavLink to="#contact" onClick={handleNavLinks("contact")}>Contact</NavLink>
                </div>
                {
                    isNavOpen ? 
                    <i className="fa-solid fa-x" onClick={handleNavMenu}></i> :
                    <div className={styles.navMenu} onClick={handleNavMenu}>
                        <span></span>
                        <span></span>
                    </div>
                }
                <div style={{display: isNavOpen ? "block" : "none"}} className={styles.navMenuList}>
                    <NavLink to="/#cakes" onClick={handleNavLinks("cakes")}>Cakes</NavLink>
                    <NavLink to="/about" onClick={handleNavLinks("about")}>About</NavLink>
                    <a href="#contact" onClick={handleNavLinks("contact")}>Contact</a>
                    <div>Login</div>
                    <button>Register</button>
                </div>
                <Link to="/">
                    <div className={styles.logoWrapper}>
                        <div className={styles.navLogo}>
                            <i className="fa-solid fa-cake-candles"></i>
                        </div>
                        <h1 className={styles.navLogoName}>Cake It</h1>
                    </div>
                </Link>
                <div className={styles.leftLinks}>
                    <div className={styles.login}>Login</div>
                    <div className={styles.register}>Register</div>
                    <div className={styles.cart}>
                        <i className="fa-solid fa-cart-shopping fa-xl" onClick={handleCartClick}></i>
                        <div className={styles.cartCounter}>{totalQty}</div>
                    </div>
                </div>
            </section>
        </nav>
    )
}

export default Navbar