import { Link, NavLink } from 'react-router-dom';
import { useStateContext } from '../../context/StateContextProvider';
import styles from '../Navbar/Navbar.module.scss';


const Navbar = () => {
    const { cartItems, handleCartClick, isNavOpen, handleNavMenu, totalQty } = useStateContext()

    const handleClick = (anchor) => () => {
        const id = `${anchor}-section`;
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        };
    }
    return (
        <nav className={styles.navbar}>
            <section className={styles.navWrapper}>
                <div className={styles.rightLinks}>
                    <NavLink to="/#cakes" onClick={handleClick("cakes")}>Cakes</NavLink>
                    <NavLink to='/about'>About</NavLink>
                    <NavLink to="#contact" onClick={handleClick("contact")}>Contact</NavLink>
                </div>
                <div className={styles.navMenu} onClick={handleNavMenu}>
                    <span></span>
                    <span></span>
                </div>
                <div style={{display: isNavOpen ? "block" : "none"}} className={styles.navMenuList}>
                    <NavLink to="/#cakes" onClick={handleClick("cakes")}>Cakes</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <a href="#contact" onClick={handleClick("contact")}>Contact</a>
                    <div>Login</div>
                    <button>Register</button>
                </div>
                <Link to="/">
                    <div className={styles.logoWrapper}>
                        <div className={styles.navLogo}>
                            <i className="fa-solid fa-cake-candles"></i>
                        </div>
                        <h1 className={styles.navLogoName}>Cake Shop</h1>
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