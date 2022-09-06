import React, { useState, useEffect } from 'react';
import  ItemDetail  from '../ItemDetail/ItemDetail';

export default function ItemDetailContainer(){
  const [Detalle, setDetalle] = useState({});


  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/1')

    .then((res) => res.json())
    .then((pokemon) => setDetalle(pokemon));
  },[]);

    return (
    <div>
        <ItemDetail Detalle={Detalle} />
    </div>
  );
}
