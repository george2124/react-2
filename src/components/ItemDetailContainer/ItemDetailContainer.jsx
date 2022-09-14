import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { data } from '../../mocks/mockData';
import Item from '../Item/Item';
import  ItemDetail  from '../ItemDetail/ItemDetail';

export default function ItemDetailContainer(){
  const [Detalle, setDetalle] = useState({});
  const [loading, setLoading] = useState(true)
  const{id} = useParams()

  useEffect(() => {
     data
    .then((res) => setDetalle(res.find((Item)=> Item.id === id)))
    .catch((error)=> console.log(error))
    .finally(()=> setLoading(false))
  },[id]);


    

    return (
    <div>
       {loading ? <p>Cargando...</p>: <ItemDetail Detalle={Detalle} />}
    </div>
  );
}
