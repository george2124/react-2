import Item from '../Item/Item';
import React from 'react'

 const ItemLIst = ({productList}) => {
  return (
    <div className='cardContainer'>
        {productList.map((product) => <Item  key={product.id} product={product}/>)}
    </div>
  ) 
};
export default ItemLIst;