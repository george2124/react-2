import React, { useState } from 'react'
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { useCart } from '../../Context/CartContext';

export const Comprar = () => {
    const [nombre, setNombre] = useState('');
    const [telefono, setTelefono] = useState('');
    const [email, setEmail] = useState('');
    const {cart, cartTotal} = useCart()
    const [idCompra, setIdCompra] = useState('')
    const [cartelito, setCartelito ] = useState('')
    
    const [apagarBoton, setApagarBoton] = useState(false)

    function terminarCompra(){
        if (!nombre || !telefono || !email) {
            setCartelito('Controla tus datos');
            return;
        }
        setApagarBoton(true)
       console.log(email ,nombre ,telefono )

       let order = {
        buyer : { name: nombre, phone: telefono, email: email}, 
        carrito: cart,
        total: cartTotal
     };
    
     const db = getFirestore();
     const miCollection = collection (db, 'orders');
     
     addDoc(miCollection, order).then(({id})=>{
        setIdCompra(id);
        console.log(id)
     }).catch((e)=>{
        setApagarBoton(false)
     })
    }

  return (
    <div>
        <h3>Ingrese sus Dato, para Termina la Compra</h3>
        <input value={nombre} onChange={(e)=> setNombre(e.target.value)} placeholder='Ingrese su Nombre y Apellido' type="text" />
        <br />
        <input value={telefono} onChange={(e)=> setTelefono(e.target.value)} placeholder='Ingrese su Telefono' type="text" />
        <br />
        <input value={email} onChange={(e)=> setEmail(e.target.value)} placeholder='Ingrese su Email' type="text" />
        <br />
        {!idCompra && !apagarBoton ? <button onClick={terminarCompra}>TERMINAR COMPRA</button> : <p> Gracias por tu compra tu numero de ticket es:  {idCompra} </p> }
        
    </div>
  )
}
