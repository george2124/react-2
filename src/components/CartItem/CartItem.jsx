import React from 'react'
import { useCart } from '../../Context/CartContext'

export const CartItem = ({compra}) => {
    const{removeItem}=useCart()
  return (
    <div   style={{ display:'flex', justifyContent:'space-around', alignItems:'center', padding:'2rem'}}>
              <img src={compra.img} alt={compra.name}/>
              <span>{compra.name}</span>
              <span>{compra.quantity} </span>
              <span>{compra.price}</span>
              <button onClick={removeItem(compra.id)}>X</button>
    </div>
  )
}
