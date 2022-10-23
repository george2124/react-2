import { collection, doc, getDoc } from 'firebase/firestore';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../../firebase/firebase';
import { data } from '../../mocks/mockData';
import Item from '../Item/Item';
import  ItemDetail  from '../ItemDetail/ItemDetail';

export default function ItemDetailContainer(){
  const [Detalle, setDetalle] = useState({});
  const [loading, setLoading] = useState(true)
  const{id} = useParams()

  //firebasse
  useEffect(()=>{
    const coleccionProductos = collection(db, "products")
    const referenciaDoc = doc(coleccionProductos, id)
    getDoc(referenciaDoc)
    .then((result)=>{
      setDetalle({
        id:result.id,
        ...result.data()
      })
    })
    .catch((error)=> console.log(error))
    .finally(()=> setLoading(false))
  }, [id])

  // useEffect(() => {
  //    data
  //   .then((res) => setDetalle(res.find((Item)=> Item.id === id)))
  //   .catch((error)=> console.log(error))
  //   .finally(()=> setLoading(false))
  // },[id]);


    

    return (
    <div>
       {loading ? <p>Cargando...</p>: <ItemDetail Detalle={Detalle} />}
    </div>
  );
}
