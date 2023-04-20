import styles from './Cakes.module.scss';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import cakeData from '../../cakeData';
import CakesSlide from './CakesSlide';
import { useStateContext } from '../../context/StateContextProvider';

const CakeDetails = () => {
  const { cake, displayCakeDetails, quantity, increaseQty, decreaseQty, formatPrice, onAddClick } = useStateContext();
  const { slug } = useParams();
  const navigate = useNavigate();

  /* Scroll to top when selected from cakes selection */
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  let findCake = cakeData.find(cake => cake.slug === slug);
  useEffect(() => {
    displayCakeDetails(findCake)
  }, [displayCakeDetails, findCake])

  const [cakeImage, setCakeImage] = useState(0)

  const handleClickImage = (id) => {
    setCakeImage(id)
    console.log(id)
  }
  return (
    <>
    <div className={styles.cakeDetailsPage}>
      <button className={styles.goBackBtn} onClick={() => navigate(-1)}>Go Back</button>
      {
        cake && (
          <div className={styles.cakeDetailed}>
            <div>
              <div className={styles.cakeDetailsImage}>
                <img id={cakeImage} src={cake.images[cakeImage]} alt={`Reference photos for ${cake.cakeName}`}/>
              </div>
              <div className={styles.cakeImageReferences}>
                <img 
                  id={cake.index}
                  className={cakeImage === 0 ? styles.activeImage : undefined}
                  src={cake.images[0]} 
                  alt={`Additional reference photos`}
                  onClick={() => handleClickImage(0)}
                />
                <img 
                  id={cake.index}
                  className={cakeImage === 1 ? styles.activeImage : undefined}
                  src={cake.images[1]} 
                  alt={`Additional reference photos`}
                  onClick={() => handleClickImage(1)}
                />
              </div>
            </div>
            <div>
              <h2>{cake.cakeName}</h2>
              <p>${formatPrice(cake.details.price)}</p>
              <div className={styles.quantityCount}>
                <span>Qty: </span>
                <div className={styles.quantity}>
                  <i className="fa-solid fa-minus fa-xs" onClick={decreaseQty}></i>
                  <span>{quantity}</span>
                  <i className="fa-solid fa-plus fa-xs" onClick={increaseQty}></i>
                </div>
              </div>
              <button className={styles.addToCart} onClick={(e) => onAddClick(cake, e.target.innerText)}>Add to Cart</button>
              <button className={styles.buyNow} onClick={(e) => onAddClick(cake, e.target.innerText)}>Buy Now</button>
              <h3>Details</h3>
              <ul>
                { cake.details.description.map(desc => <li style={{listStylePosition: "inside"}} key={desc}>{desc}</li>) }
              </ul>
            </div>
          </div>
        )
      }
    </div>
    <CakesSlide currentCake={cake} formatPrice={formatPrice} />
    </>
  )
}

export default CakeDetails