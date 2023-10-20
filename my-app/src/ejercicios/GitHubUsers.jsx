import axios from "axios";
import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

export default function GithubUsers() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    function fetchData() {
      axios
        .get(`https://api.github.com/users`)
        .then((response) => setUsers(response.data))
        .catch((e) => console.error("Error de llamada", e));
    }
    fetchData();
  }, [selectedUser]);

  const handleUserClick = (username) => {
    setSelectedUser(username);
  };

  return (
    <div>
      <h1>Lista de Usuarios de GitHub</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id} onClick={() => handleUserClick(user.login)}>
            {<Link to={user.login}>Ver Perfil de: {user.login}</Link>}
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
}
