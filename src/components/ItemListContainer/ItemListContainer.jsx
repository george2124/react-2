import React, { useState, useEffect } from 'react';
import ItemCount from '../../ItemCount/ItemCount';
import ItemLIst from '../ItemList/ItemLIst';
import { data } from '../../mocks/mockData';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase/firebase';

const ItemListContainer =({ saludo, greetings}) =>{ 
 const [productList, setProductList] =useState([])
 const [loading, setLoading] =useState(false)
 const {categoriaId}= useParams()

 //firebase

 useEffect(() => {
   setLoading(true)
   const productos = categoriaId ?query(collection(db, "products"), where("category", "==", categoriaId) ): collection(db, "products")
 
   getDocs(productos)
   .then((result)=>{
    const lista = result.docs.map((product)=>{
      return{
        id:product.id,
        ...product.data()
      }
    })
    setProductList(lista)
   })
   .catch((error)=> console.log(error))
   .finally(()=>setLoading(false))
 }, [categoriaId])

 //mocks
  // useEffect(() => {
  //     setLoading(true)
  //     data
  //     .then((res) => {
  //       if(categoriaId){
  //         setProductList(res.filter((item)=> item.category === categoriaId)) 
  //       }else{
  //         setProductList(res)
  //       }
  //     })
  //     .catch((error) => console.log(error))
  //     .finally(() => setLoading(false))
  // }, [categoriaId]);
  
  return (
    <>
        <p>{saludo}</p>
        <p> {greetings}</p>  
        {loading ? <p>Cargando...</p>:<ItemLIst productList={productList}/>} 
    </>
  );
};

export default ItemListContainer