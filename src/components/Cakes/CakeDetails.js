import styles from './Cakes.module.scss';
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import cakeData from '../../cakeData';

const CakeDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [cake, setCake] = useState(null)
  
  let findCake = cakeData.find(cake => cake.slug === slug);
  useEffect(() => {
    setCake(findCake)
  }, [findCake])

  const [cakeImage, setCakeImage] = useState(0)

  const handleClickImage = (e) => {
    setCakeImage(e.target.id)
  }
  return (
    <div style={{height: "100vh", marginTop: "100px"}}>
      <button onClick={() => navigate(-1)}>back</button>
      {
        cake && (
          <div className={styles.cakeDetails}>
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
                        alt={`Additional reference photos for ${cake.name}`}
                        onClick={handleClickImage}
                      />
                    )
                  })
                }
              </div>
            </div>
            <div>
              <h1>{cake.cakeName}</h1>
              <p>Php {cake.details.price}.00</p>
              <button>Add to Cart</button>
              <button>Buy Now</button>
              <h3>Details</h3>
              <ul>
                { cake.details.description.map(desc => <li key={desc}>{desc}</li>) }
              </ul>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default CakeDetails