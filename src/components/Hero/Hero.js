import styles from '../Hero/Hero.module.scss';
// import image
import slideImg1 from '../../assets/cake-header-1.jpeg';

const Hero = () => {
    return (
        <div className={styles.hero}>
            <section className={styles.heroWrapper}>
                <div className={styles.heroContent}>
                    <h1>Where dedication<br/>& perfection meet.</h1>
                    <p>Where designs meet cakes. Same delivery<br/>around Bacoor, Cavite!</p>
                    <button>Shop Now</button>
                </div>
                <div className={styles.imageWrapper}>
                    <img src={slideImg1} alt="Cake for hero section"/>
                    <div className={styles.gradientOverlay}></div>
                </div>
            </section>
        </div>
    )
}

export default Hero