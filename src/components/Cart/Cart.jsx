import React from 'react'
import { useContext } from 'react';
import { CartContext, useCart } from '../../Context/CartContext';

 const Cart = () => {
    //forma larga
    // const{cart}= useContext(CartContext)
    const{cart}= useCart()
    console.log('carrito', Cart)
  return (
    <div>Cart</div>
  )
}
export default Cart