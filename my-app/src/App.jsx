import Welcome from "./ejercicios/Welcome";
import Counter from "./ejercicios/Counter";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ShowGithubUser from "./ejercicios/ShowGithubUser";

function App() {
  // function handleShowTime() {
  //   alert("Current time:" + new Date());
  // }
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Welcome name="Barbara" />} />
      <Route path="/counter" element={<Counter />}/>
      <Route path="/users/:username" element={<ShowGithubUser/>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
