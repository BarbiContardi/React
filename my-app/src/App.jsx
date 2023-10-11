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

function App() {
  function handleShowTime() {
    alert("Current time:" + new Date());
  }
  return (
    <div className="App">
      <Hello />
      <Message />
      <Welcome name={"Barbara"} />
      <AlertClock handleClick={handleShowTime} />
      <Counter />
      <Clock />
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
