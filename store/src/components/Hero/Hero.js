import styles from './Hero.module.scss';
import slideImg1 from '../../assets/cake-header-1.jpeg';
import { motion } from "framer-motion";
import { easeAnimate } from '../../animations/animation';

const Hero = () => {
    return (
        <motion.section variants={easeAnimate} initial="start" animate="end" className={styles.hero}>
            <div className={styles.heroWrapper}>
                <div className={styles.heroContent}>
                    <h1>Where dedication<br/>& perfection meet.</h1>
                    <p>Make your day even more special! Same day delivery within Bacoor, Cavite.</p>
                    <button>Shop Now</button>
                </div>
                <div className={styles.imageWrapper}>
                    <img src={slideImg1} alt="Cake for hero section"/>
                    <div className={styles.gradientOverlay}></div>
                </div>
            </div>
        </motion.section>
    )
}

export default Hero