import styles from './Cakes.module.scss';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import cakeData from '../../cakeData';
import CakesSlide from './CakesSlide';
import { useStateContext } from '../../context/StateContextProvider';
import { useCart, useDispatchCart } from '../../context/ReducerProvider';

const CakeDetails = () => {
  const { quantity, increaseQty, decreaseQty, formatPrice, handleCartClick } = useStateContext();
  const dispatch = useDispatchCart();
  const { slug } = useParams();
  const navigate = useNavigate();

  const [cake, setCake] = useState(null)

  /* Scroll to top when selected from cakes selection */
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  let findCake = cakeData.find(cake => cake.slug === slug);
  useEffect(() => {
    setCake(findCake)
  }, [findCake])

  const item = useCart();

  const handleAddToCart = (product, button) => {
    if(button === "Buy Now") {
      dispatch({type: "ADD", product})
      handleCartClick()
    } else if(button === "Add to Cart") {
      dispatch({type: "ADD", product})
    } 
    console.log(item)
  }

  const [cakeImage, setCakeImage] = useState(0)

  const handleClickImage = (e) => {
    setCakeImage(e.target.id)
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
                <img i={cakeImage} src={cake.images[cakeImage]} alt={`Reference photos for ${cake.cakeName}`}/>
              </div>
              <div className={styles.cakeImageReferences}>
                {
                  cake.images?.map(img => {
                    return (
                      <img 
                        key={cake.images.indexOf(img)}
                        id={cake.images.indexOf(img)} 
                        style={{border: cakeImage == cake.images.indexOf(img) ? `2px solid #BA4D4A` : "none"}} 
                        src={img} 
                        alt={`Additional reference photos`}
                        onClick={handleClickImage}
                      />
                    )
                  })
                }
              </div>
            </div>
            <div>
              <h2>{cake.cakeName}</h2>
              <p>Php {formatPrice(cake.details.price)}.00</p>
              <div className={styles.quantityCount}>
                <span>Qty: </span>
                <div className={styles.quantity}>
                  <i className="fa-solid fa-minus fa-xs" onClick={decreaseQty}></i>
                  <span>{quantity}</span>
                  <i className="fa-solid fa-plus fa-xs" onClick={increaseQty}></i>
                </div>
              </div>
              <button className={styles.addToCart} onClick={(e) => handleAddToCart(cake, e.target.innerText)}>Add to Cart</button>
              <button className={styles.buyNow} onClick={(e) => handleAddToCart(cake, e.target.innerText)}>Buy Now</button>
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