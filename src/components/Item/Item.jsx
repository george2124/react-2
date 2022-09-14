import React from 'react'
import { useNavigate } from 'react-router-dom'

const Item = ({ product }) => {
    const{id, img, name, category, description, price, stock} = product
    const navegar = useNavigate()
  return (
    <div className='card' style={{width:'20rem', margin:'5rem'}}>
    <img src= {img} className='card-img-top' alt={name} />
    <div className='card-Body'>
       <p className='card-text'>{name}</p>
       <p className='card-text'>{description}</p>
       <p className='card-text'>${price} </p>
       <p className='card-text'>{stock} </p>
    </div>
    <button className='' onClick={()=> navegar(`/detalle/${id}`)}>ver mas</button>
 </div>
   
 )
}
export default Item;