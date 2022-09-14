import React, { useState, useEffect } from 'react';
import './ItemCount.css';
export default function ItemCount( {stock, inicial, onAdd}) {

  const [count, setcount] = useState(parseInt(inicial));

  const decrease = () => {
    setcount(count - 1);
  };

  const increase = () => {
    setcount(count + 1);
  };

 
  useEffect(()=>{
    setcount(parseInt(inicial));
  }, [inicial])
 
  
  return (
    <div className='counter'>
      <button disabled={count <=1} onClick={decrease}>
        -
      </button>
      <span>
        <span>
          <span>
            <span></span> {count} <span></span>
          </span>
        </span>
      </span>
      <button disabled={count >= stock} onClick={increase}>
        +
      </button>
      <div>
        <button disabled={stock <=0} onClick={() => onAdd()}>
          agregar al carrito
        </button>
      </div>
    </div>
  );
}
