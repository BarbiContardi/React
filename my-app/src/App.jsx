import Welcome from "./ejercicios/Welcome";
import Counter from "./ejercicios/Counter";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  // function handleShowTime() {
  //   alert("Current time:" + new Date());
  // }
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Welcome name="Barbara" />} />
      <Route path="/counter" element={<Counter />}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
