import React, { useState, useEffect } from 'react';
import { ItemDetail } from '../ItemDetail/ItemDetail';

export default function ItemDetailContainer(){
 
    const [Detalle, setDetalle] = useState({});

  useEffect(() => {
      const getDetalle = new Promise((resolver) => {
        setTimeout(() => {
          resolver();
        }, 2000);
      });
      getDetalle.then((res) => setDetalle(res));
  }, []);
  

    return (
    <div>
        <ItemDetail/>
    </div>
  );
}
