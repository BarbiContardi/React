
import './App.css';
import Ejercicio01 from './ejercicios/Ejercicio01';
import Ejercicio02 from './ejercicios/Ejercicio02';
import Ejercicio03 from './ejercicios/Ejercicio03';
import Ejercicio04 from './ejercicios/Ejercicio04';
import Ejercicio05 from './ejercicios/Ejercicio05';

function App() {
  return (
    <div className="App">
      <Ejercicio01/>
      <Ejercicio02 name= "Barbara"/>
      <Ejercicio03/>
      <Ejercicio04/>
      <Ejercicio05/>
    </div>
  );
}

export default App;
