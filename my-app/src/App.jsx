import AlertClock from "./ejercicios/AlertClock";
import Clock from "./ejercicios/Clock";
import Counter from "./ejercicios/Counter";
import Hello from "./ejercicios/Hello";
import Message from "./ejercicios/Message";
import MouseClicker from "./ejercicios/MouseClicker";
import Welcome from "./ejercicios/Welcome";

function App() {
    return (
      <div className="App">
        <Hello/>
        <Message/>
        <Welcome name={'Barbara'}/>
        <AlertClock />
        <Counter/>
        <Clock/>
        <MouseClicker/>
      </div>
    );
  }
  
  export default App;