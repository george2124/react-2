import React from 'react'
import { useNavigate } from 'react-router-dom';

import { useCart } from '../../Context/CartContext';
import { CartItem } from '../CartItem/CartItem';

 const Cart = () => {
    //forma larga
    // const{cart}= useContext(CartContext)
    const{cart, cartTotal, clear}= useCart()
    const navegar = useNavigate()
   
  return (
    <div>
      {
        !cart.length
        ?<div>
          <h2>Tu carrito esta vacio!</h2>
          <h4>Te invitamos a ver nuestros productos</h4>
          <button onClick={() => navegar('/')}>Ir a comprar</button>  
        </div>
        :<div>
         <h2>Tu carrito</h2>
         {cart.map((compra)=> <CartItem key={compra.div} compra={compra}/>)}
         <span>Total a pagar : ${cartTotal()} </span>
         <button onClick={clear}>Vaciar Carrito</button>
         <button>Terminar compra</button>
        </div>
      }
    </div>
  )
}
export default Cart