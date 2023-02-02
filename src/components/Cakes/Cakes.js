import { Grid } from "@mui/material"
import { useState } from "react"
import data from "../../cakeData"
import styles from "./Cakes.module.scss"

const CakeList = () => {
    const cakeCategory = ["All", "Wedding Cake", "Vintage Cake", "Monogram Cake"];
    const [cakes, setCakes] = useState(data)
    const formatPrice = (value) => value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return (
        <section className={styles.cakesMenu}>
            <div className={styles.cakesWrapper}>
                <h2>Our Cakes</h2>
                <div className={styles.cakeCategory}>
                    { cakeCategory.map(menu => <span key={menu}>{menu}</span>) }
                </div>
                <hr/>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 1, md: 3 }}>
                    { cakes.map(data => (
                        <Grid item xs={6} md={4} mb={5}>
                            <img className={styles.cakeImage} src={data.imgSrc} alt={data.cakeName} />
                            <div className={styles.cakeDetails}>
                                <p className={styles.cakeName}>{data.cakeName}</p>
                                <p className={styles.cakePrice}>Php {formatPrice(data.details.price)}.00</p>
                            </div>
                        </Grid>
                    )) }
                </Grid>
            </div>
        </section>
    )
}

export default CakeList