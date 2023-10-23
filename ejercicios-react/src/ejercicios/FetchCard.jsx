/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import axios from "axios";

function Card({ user }) {
  return (
    <div style={{border: '2px solid white'}}>
      <p>ID: {user.id}</p>
      <h1>Nombre: {user.first_name}</h1>
      <img src={user.avatar} alt={user.first_name} />
    </div>
  );
}

export default function FetchCard() {
  const [users, setUsers] = useState([]);
  
  const fetchData = () => {
    axios
      .get('https://random-data-api.com/api/users/random_user?size=4') // Obtén los primeros 4 usuarios
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener datos:", error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleClick = () => {
    fetchData();
  };

  return (
    <div>
      <button onClick={handleClick}>Random Users</button>
      <div>
        {users.map((user) => (
          <Card key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}
