import { useState } from "react";

export default function TodoList() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddItem = () => {
    setItems([...items, inputValue]);
    setInputValue("");
  };

  return (
    <div>
      <h2>Lista de Tareas</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleAddItem}>Agregar</button>
      </div>
    </div>
  );
}
