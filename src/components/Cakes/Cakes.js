import { Grid } from "@mui/material"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import data from "../../cakeData"
import styles from "./Cakes.module.scss"

const CakeList = () => {
    const [cakes, setCakes] = useState(data);
    /* Cake Category*/ 
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

    const formatPrice = (value) => value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return (
        <section className={styles.cakesMenu}>
            <div className={styles.cakesWrapper}>
                <h2>Our Cakes</h2>
                <div className={styles.cakeCategory}>
                    { categoryList.map((category, index) =>  <span key={index} className={cakeCategory === category ? `${styles.activeCategory}` : null } onClick={handleCakecCategory}>{category}</span> ) }
                </div>
                <div className={styles.dividerLine}><div></div></div>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 3 }}>
                    { cakes.map(cake => (
                        <Grid item xs={6} md={4} mb={5}>
                            <Link to={`/cakes/${cake.slug}`} className={styles.cardLink}>
                                <img className={styles.cakeImage} src={cake.images[0]} alt={cake.cakeName} />
                                <div className={styles.cakeDetails}>
                                    <p className={styles.cakeName}>{cake.cakeName}</p>
                                    <p className={styles.cakePrice}>Php {formatPrice(cake.details.price)}.00</p>
                                </div>
                            </Link>
                        </Grid>
                    )) }
                </Grid>
            </div>
        </section>
    )
}

export default CakeList