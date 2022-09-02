import React, { useState, useEffect }  from 'react'
import ItemListContainer from '../ItemListContainer/ItemListContainer';


export default function Producto ({item, color, consoleHolaMundo}) {
 
 console.log( 'render producto' );
 
//  let contador = 0;
const[contador, setContador]= useState(0);

useEffect(()=>{

},[])


 return (
    <div style={{ backgroundColor: color , marginTop:'5px' }}>
    <h1>contador:{contador}</h1>
    <button onClick={ ()=>{
    //   contador= contador + 1;
    setContador(contador + 1);
    }}> sumar contaor </button>
    <h2>{item.name}</h2>
    <h2> precio ${item.price}</h2>
    <br />
    </div>
  )
}
