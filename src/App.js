import logo from './logo.svg';
import './App.css';
import { red } from '@material-ui/core/colors';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer } from './components/Footer/Footer';
import ItemLIst from './components/ItemList/ItemLIst';

function App() {
  const saludo = "Hola Chicos!!"
  const stock = 10;
  
  
  return (<>
      <BrowserRouter>
          <NavBar />
        <Routes>
            <Route path='/' element= { <ItemListContainer/> } />
            <Route path='/categoria/:categoriaId' element= { <ItemListContainer/> } />
            <Route path='/detalle/:id' element= { <ItemDetailContainer/> }/>
        </Routes>
          <Footer/>
      </BrowserRouter>
      {/* 
      <h1>HOLA MUNDO</h1>
      <p>algo mas para chamuyar</p>
      <ItemListContainer 
      data={"Data"} 
      saludo={saludo} 
      greetings="Darle estilos" 
      />
      <Producto 
      item={"producto1"} 
      color={"coral"} 
      consoleHolaMundo={"consoleHolaMundo"}
      />
      <ItemCount inicial={1}  stock={5} />
     <ItemDetailContainer/>
     <Event/> */}
    </>
  );
}

export default App;
