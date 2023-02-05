import { Grid } from "@mui/material"
import { useEffect, useState } from "react"
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
    }, [cakeCategory])

    const formatPrice = (value) => value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return (
        <section className={styles.cakesMenu}>
            <div className={styles.cakesWrapper}>
                <h2>Our Cakes</h2>
                <div className={styles.cakeCategory}>
                    { categoryList.map((category, index) =>  <span key={index} className={styles.cakeCategoryActive} onClick={handleCakecCategory}>{category}</span> ) }
                </div>
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