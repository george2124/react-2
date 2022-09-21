import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../Context/CartContext';
import ItemCount from '../../ItemCount/ItemCount';


export default function ItemDetail ( {Detalle} ) {
    const {name, description, price, stock, img, id}= Detalle
    const [count, setcount] = useState(1);
    const [comprar, setComprar]= useState(false)
    const navegar= useNavigate()
    const {addItem}= useCart()

    const onAdd = () => {
       let purchase ={
        id,
        name,
        price,
        stock,
        img,
        quantity:count
       }
        setComprar(true)
        addItem(purchase)
      }
  
  return(
  <div>
    <h1>Detalle de Producto</h1>
    <h2>{name}</h2>
    <img src={img} alt={name} style={{width:'25rem'}} />
    <h2>{description} </h2>
    <p>${price}</p>
    {!comprar
      ? <ItemCount stock={stock} inicial={1} onAdd={onAdd} count={count} setcount={setcount} />
      : <div style={{display:'flex', justifyContent:'space-around', alignItems:'center', color:'blue'}} className="ButtonCart">
          <button className='Carrito' onClick={()=>navegar('/cart')}>Ir al carrito</button>
          <button className='Seguircompra' onClick={()=>navegar('/')}> Seguir Comprando</button>
       </div>
    }
    
      
       

  </div>
  );
}
