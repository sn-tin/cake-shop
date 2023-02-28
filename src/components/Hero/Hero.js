import styles from '../Hero/Hero.module.scss';
// import image
import slideImg1 from '../../assets/cake-header-1.jpeg';

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.heroWrapper}>
                <div className={styles.heroContent}>
                    <h1>Where dedication<br/>& perfection meet.</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod!</p>
                    <button>Shop Now</button>
                </div>
                <div className={styles.imageWrapper}>
                    <img src={slideImg1} alt="Cake for hero section"/>
                    <div className={styles.gradientOverlay}></div>
                </div>
            </div>
        </section>
    )
}

export default Hero