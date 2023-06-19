import React from 'react'
import { useParams } from 'react-router-dom'

const Description = (items) => {
  const {id}=useParams()
  const product=items.find(el=>el.id==id)
  return (
    <div>
       <h1>{product.name}</h1>
        <img src={product.pic} alt={product.name} />
        <h3>{product.rating}</h3>
        <h3>{product.date}</h3>
    </div>
  )
}

export default Description