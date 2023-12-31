import Welcome from "./ejercicios/Welcome";
import Counter from "./ejercicios/Counter";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import GithubUsers from "./ejercicios/GitHubUsers";
import ShowGithubUser from "./ejercicios/ShowGithubUser";
import { SWRConfig } from "swr";
import axios from "axios";

const fetcher = url => axios.get(url).then(resp => resp.data);

function App() {
  return (
   <SWRConfig value={{fetcher}}> 
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
            <Link to="/users">Usuario de GitHub</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Welcome name="Barbara" />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/users/" element={<GithubUsers />} >
        <Route path=":username" element={<ShowGithubUser />} />
        <Route index element={<p>Add a user and select it</p>} />
        </Route>
        <Route path="*" element={<h1>NotFound</h1>} />
      </Routes>
    </BrowserRouter>
    </SWRConfig>
  );
}

export default App;
