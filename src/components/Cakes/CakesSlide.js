import { Grid } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import cakes from "../../cakeData";
import styles from "./Cakes.module.scss";

const CakesSlide = ({currentCake, formatPrice}) => {
    console.log("current cake list:", currentCake)
  return (
    <section style={{width: "100%", maxWidth: "1500px", margin: "auto", textAlign: "center"}}>
        <h3>You may also like</h3>
        <div>
            <Grid container direction="row" columnSpacing={{xs: "5"}} wrap="nowrap" whiteSpace="nowrap">
            {
                currentCake && 
                cakes.filter(list => list.slug !== currentCake.slug).map(lists => {
                    return (
                        <>
                            <Grid item>
                                <Link to={`/cakes/${lists.slug}`} className={styles.cardLink}>
                                    <img className={styles.cakeImage} src={lists.images[0]} alt={lists.cakeName} />
                                    <div className={styles.cakeDetails}>
                                        <p className={styles.cakeName}>{lists.cakeName}</p>
                                        <p className={styles.cakePrice}>Php {formatPrice(lists.details.price)}.00</p>
                                    </div>
                                </Link>
                            </Grid>
                        </>
                    )
                })
            }
            </Grid>
        </div>
    </section>
  )
}

export default CakesSlide;