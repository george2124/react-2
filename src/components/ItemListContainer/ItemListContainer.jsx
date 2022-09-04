import React, { useState, useEffect } from 'react';
import ItemCount from '../../ItemCount/ItemCount';
import ItemLIst from '../ItemList/ItemLIst';


const films = [
  {
    id: 1, 
    image:
    "https://www.apmusicales.com/category/apm/anuario/digital-final/assets/downloads/ANUARIO%20APM%202020.pdf?cid=132&shop=pesas+rusas+oferta&xi=6&xc=23&pr=90.99&you=0" , 
    title:"Pesas Rusas",
   },
  {
    id: 2, 
    image:
    "https://mirfitness.com.ar/producto/par-de-mancuernas-hexagonales-de-caucho-mir/" , 
    title:"Pesa Hexagonales", 
  },
  {
    id: 3,
    image:
     "https://www.gadnic.com.ar/pesas-y-mancuernas/par-de-mancuerna-acero-pintado-ajustable-35kg", 
     title:"Mancuernas" 
  },
]; 

export default function ItemListContainer (props) {
  const [data, setData] = useState([]);

  useEffect(() => {
      const getData = new Promise((resolver) => {
        setTimeout(() => {
          resolver(films);
        }, 2000);
      });
      getData.then((res) => setData(res));
  }, []);
  
  return (
    <>
        <p>{props.saludo}</p>
        <p> {props.greetings}</p>  
        <ItemLIst data={data}/> 
    </>
  );
};
