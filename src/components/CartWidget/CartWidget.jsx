import React from 'react'
import { useCart } from "../../Context/CartContext";


export default function CartWidget({}) {
 const{cartQuantity} = useCart()
 
  return (
       <div>
        🛒
       <span>{cartQuantity() || ''}</span>
       </div>
  );
}

