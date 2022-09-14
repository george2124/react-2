import React, { useState, useEffect } from 'react';
import ItemCount from '../../ItemCount/ItemCount';

export default function ItemDetail ( {Detalle} ) {
    const {name, description, price, stock, img}= Detalle
    const onAdd = () => {
        console.log(`Compraste unidades`);
      }
  return(
  <div>
    <h1>Detalle de Producto</h1>
    <h2>{name}</h2>
    <img src={img} alt={name} style={{width:'25rem'}} />
    <h2>{description} </h2>
    <p>${price}</p>
    <ItemCount stock={stock} inicial={1} onAdd={onAdd}  />
  </div>
  );
}
