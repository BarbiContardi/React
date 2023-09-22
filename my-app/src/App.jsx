import Hello from "./ejercicios/Hello";
import Message from "./ejercicios/Message";
import Welcome from "./ejercicios/Welcome";

function App() {
    return (
      <div className="App">
        <Hello/>
        <Message/>
        <Welcome name= "Barbara" age={33}/>
      </div>
    );
  }
  
  export default App;