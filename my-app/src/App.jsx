import Welcome from "./ejercicios/Welcome";
import Counter from "./ejercicios/Counter";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import ShowGithubUser from "./ejercicios/ShowGithubUser";

function App() {
  // function handleShowTime() {
  //   alert("Current time:" + new Date());
  // }
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/counter">Contador</Link>
          </li>
          <li>
            <Link to="/users/barbicontardi">Usuario de GitHub</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Welcome name="Barbara" />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/users/:username" element={<ShowGithubUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
