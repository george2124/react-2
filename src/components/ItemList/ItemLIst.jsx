import Item from '../Item/Item';
import React from 'react'

 const ItemLIst = ({data = [] }) => {
  return data.map((film) => <Item key={film.id}  info={film}  />);
};
export default ItemLIst;