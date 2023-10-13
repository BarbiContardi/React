import AlertClock from "./ejercicios/AlertClock";
import Clock from "./ejercicios/Clock";
import Colors from "./ejercicios/Colors";
import Counter from "./ejercicios/Counter";
import Container from "./ejercicios/Container";
import FocusableInput from "./ejercicios/FocusableInput";
import Hello from "./ejercicios/Hello";
import InteractiveWelcome from "./ejercicios/InteractiveWelcome";
import Login from "./ejercicios/Login";
import Message from "./ejercicios/Message";
import MouseClicker from "./ejercicios/MouseClicker";
import MultiButton from "./ejercicios/MultiButton";
import StrictMode from "./ejercicios/StrictMode";
import TodoList from "./ejercicios/TodoList";
import UncontrolledLogin from "./ejercicios/UncontrolledLogin";
import Welcome from "./ejercicios/Welcome";
import { createContext, useState } from "react";

export const LanguageContext = createContext('en')
function App() {
  function handleShowTime() {
    alert("Current time:" + new Date());
  }
  const [language, setLanguage] = useState("en");

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <div className="App">
      <Hello />
      <Message />
      <Welcome name={"Barbara"} />
      <AlertClock handleClick={handleShowTime} />
      <Counter />
      <LanguageContext.Provider value={language}>
      <div>
        <h1>Aplicación Reloj</h1>
        <select value={language} onChange={handleLanguageChange}>
          <option value="en">Inglés</option>
          <option value="es">Español</option>
        </select>
        <Clock />
      </div>
      </LanguageContext.Provider>
      {/* Eliminar el Context Provider que proporciona datos al componente Clock hace que el reloj deje de funcionar correctamente.
       Dependerá tambien de la lógica que apliquemos en la aplicación para tratar esta falta de datos. */}
      <MouseClicker />
      <MultiButton />
      <InteractiveWelcome />
      <Login />
      <StrictMode />
      <Colors />
      <TodoList />
      <Container title={<h1>This is a Container!</h1>}>
        <UncontrolledLogin />
        <FocusableInput />
      </Container>
    </div>
  );
}

export default App;
