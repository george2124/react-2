
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer } from './components/Footer/Footer';
import Cart from './components/Cart/Cart';
import { CartProvider } from './Context/CartContext';
import { Comprar } from './components/Comprar/Comprar';


function App() {
  const saludo = "Hola Chicos!!"
  const stock = 10;
  
  
  return (
    <>
    <CartProvider>
      <BrowserRouter>
          <NavBar />
            <Routes>
              <Route path='/' element= { <ItemListContainer/> } />
              <Route path='/comprar' element= { <Comprar/> } />
              <Route path='/categoria/:categoriaId' element= { <ItemListContainer/> } />
              <Route path='/detalle/:id' element= { <ItemDetailContainer/> }/>
            <Route path='/cart' element= {<Cart/>}/>
            </Routes>
          <Footer/>
        </BrowserRouter>
    </CartProvider>
    </>
  );
}

export default App;
