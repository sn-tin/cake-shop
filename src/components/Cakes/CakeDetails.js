import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const CakeDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  return (
    <div style={{height: "100vh", marginTop: "100px"}}>
      <button onClick={() => navigate(-1)}>back</button>
      <p>Cake details: {slug} </p>
    </div>
  )
}

export default CakeDetails