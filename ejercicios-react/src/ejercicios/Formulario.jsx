import { useState } from "react";

function Formulario() {
  const [formData, setFormData] = useState("");
  const [submittedData, setSubmittedData] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
  };

  return (
    <div>
      <h1>Completa el formulario:</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <p>Nombre:</p>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />

          <p>Email:</p>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />

          <p>Mensaje:</p>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
      {submittedData && (
        <div>
          <h2>Datos ingresados:</h2>
          <p>Nombre: {submittedData.name}</p>
          <p>Email: {submittedData.email}</p>
          <p>Mensaje: {submittedData.message}</p>
        </div>
      )}
    </div>
  );
}

export default Formulario;
