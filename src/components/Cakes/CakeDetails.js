import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import cakeData from '../../cakeData';

const CakeDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [cake, setCake] = useState(null)
  
  let findCake = cakeData.find(cake => cake.slug === slug);
  useEffect(() => {
    setCake(findCake)
    console.log(cake)
  }, [findCake])
  return (
    <div style={{height: "100vh", marginTop: "100px"}}>
      <button onClick={() => navigate(-1)}>back</button>
      {
        cake && (
          <div>
            <h1>{cake.cakeName}</h1>
            <p>Php {cake.details.price}.00</p>
            <button>Add to Cart</button>
            <button>Buy Now</button>
            <h3>Details</h3>
            <hr/>
            <ul>
              { cake.details.description.map(desc => <li key={desc}>{desc}</li>) }
            </ul>
          </div>
        )
      }
    </div>
  )
}

export default CakeDetails