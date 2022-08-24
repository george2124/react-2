import logo from './logo.svg';
import './App.css';
import { red } from '@material-ui/core/colors';
import NavBar from './components/NavBar';

function App() {
  let i = 0;
  // i = i + 1;
  // i++;
  i == 0 ? console.log("increible la i es 0") : console.log("la i no es 0");;
  console.log(i);
  let estilos = {color: "#ff005"  };
  return (
    <div className="App">
      <NavBar />
      <h1>HOLA MUNDO</h1>
      <p>algo mas para chamuyar</p>
     
    </div>
  );
}

export default App;
