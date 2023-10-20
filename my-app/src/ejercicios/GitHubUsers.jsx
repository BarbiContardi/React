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
  }, []);

  const handleUserClick = (username) => {
    setSelectedUser(username);
  };

  return (
    <div>
      <h1>Lista de Usuarios de GitHub</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id} onClick={() => handleUserClick(user.login)}>
           {user.login}
          </li>
        ))}
      </ul>
      {selectedUser && (
         <Link to={selectedUser}>Ver Perfil de: {selectedUser}</Link>)}
         <Outlet/>
    </div>
  );
}
