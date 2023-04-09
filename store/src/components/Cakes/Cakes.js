import { Grid } from "@mui/material"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import data from "../../cakeData"
import { useStateContext } from "../../context/StateContextProvider"
import styles from "./Cakes.module.scss"
import { AnimatePresence, motion } from "framer-motion"
import { easeAnimate, fadeInUp, imageZoomHover } from "../../animations/animation"

const CakeList = () => {
    const { formatPrice, scrollToTop } = useStateContext();
    const [cakes, setCakes] = useState(data);
    const categoryList = ["All", "Wedding", "Vintage", "Monogram"]
    const [cakeCategory, setcakeCategory] = useState("All");
    const handleCakecCategory = (e) => {
        setcakeCategory(e.target.innerText)
    }
    /* Filter Cakes */ 
    const filterCake = () => {
        if(cakeCategory === "All") {
            setCakes(data)
        } else {
            setCakes(data.filter(cake => cake.category.includes(cakeCategory.toLowerCase())))
        }
    }

    useEffect(() => {
        filterCake()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cakeCategory])
    return (
        <section id="cakes-section" className={styles.cakesMenu}>
            <div className={styles.cakesWrapper}>
                <h2>Our Cakes</h2>
                <div className={styles.cakeCategory}>
                    { categoryList.map((category, index) =>  <span key={index} className={cakeCategory === category ? `${styles.activeCategory}` : null } onClick={handleCakecCategory}>{category}</span> ) }
                </div>
                <div className={styles.dividerLine}><div></div></div>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 3 }}>
                    { cakes.map((cake, index) => (
                        <Grid key={index} item xs={6} md={4} mb={5}>
                            <motion.div variants={easeAnimate} initial="start" whileInView="end" viewport={{ once: true, amount: 0.8 }}>
                                <Link to={`/cakes/${cake.slug}`} className={styles.cardLink} onClick={scrollToTop}>
                                    <div className={styles.cakeImage}>
                                        <motion.div variants={imageZoomHover} initial="start" whileHover="end" style={{
                                            backgroundImage: `url(${cake.images[0]})`,
                                            backgroundSize: "contain",
                                            backgroundRepeat: "no-repeat"
                                        }}></motion.div>
                                    </div>
                                    <div className={styles.cakeDetails}>
                                        <p className={styles.cakeName}>{cake.cakeName}</p>
                                        <p className={styles.cakePrice}>${formatPrice(cake.details.price)}</p>
                                    </div>
                                </Link>
                            </motion.div> 
                        </Grid>
                    )) }
                </Grid>
            </div>
        </section>
    )
}

export default CakeList