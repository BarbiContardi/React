import { useEffect, useState } from "react";
import axios from "axios"; // Corrige la importación de Axios

export default function LlamadaFetch() {
  const [data, setData] = useState(null); // Inicializa data como null para evitar errores iniciales

  // Función para obtener un usuario aleatorio
  const fetchData = () => {
    axios
      .get("https://random-data-api.com/api/users/random_user")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error al obtener datos:", error);
      });
  };
  useEffect(() => {
    fetchData(); // Llama a fetchData() al cargar el componente
  }, []);

  // Función para manejar el clic en el botón y obtener un nuevo usuario
  const handleClick = () => {
    fetchData(); // Llama a fetchData() para actualizar el usuario
  };

  return (
    <div>
      {data && ( // Verifica si hay datos antes de renderizar
        <div>
          <h1>ID: {data.id}</h1>
          <p>Nombre: {data.first_name}</p>
          <img src={data.avatar} alt="avatar" /> {/* Corrige el atributo alt */}
        </div>
      )}
      <button onClick={handleClick}>Random User</button>
    </div>
  );
}
