import logo from './logo.svg';
import './App.css';
import { red } from '@material-ui/core/colors';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Producto from './components/Productos/Producto';
import ItemCount from './ItemCount/ItemCount';

function App() {
  const saludo = "Hola Chicos!!"
  
  const onAdd = (quantity) => {
    console.log('Compraste {quantity} unidades');
  }
  return (
    <div className="App">
      <NavBar />
      <h1>HOLA MUNDO</h1>
      <p>algo mas para chamuyar</p>
      <ItemListContainer data={'Data'} saludo={saludo} greetings='Darle estilos' />
      <Producto item={'producto1'} color={'coral'} consoleHolaMundo={'consoleHolaMundo'}/>
      <ItemCount inicial={1}  stock={5}  onAdd={onAdd} />
     
    </div>
  );
}

export default App;
