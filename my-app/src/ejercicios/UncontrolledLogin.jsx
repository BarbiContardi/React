export default function UncontrolledLogin() {
    function handleFormSubmit(event) {
        event.preventDefault();
        const username = event.target.elements.username.value; //utilizo Api DOM para acceder a los datos del formulario
        const password = event.target.elements.password.value;
        const data = { username, password };
        console.log(data);
      }

  return (
    <form onSubmit={handleFormSubmit}>
      <h1>My Uncontrolled Form</h1>
      <input type="text" name="username" />
      <input type="password" name="password" />
      <input type="checkbox" name="session" />
      <button>Login</button>
      <button type="reset">Reset</button>
    </form>
  );
}
//la API estándar de React DOM es fundamental para interactuar con el DOM en aplicaciones React,
// pero también existen API no estándar, como las bibliotecas de manejo de formularios Formik o react-hook-form,
// que pueden ser útiles para acceder y gestionar datos de formularios de manera más eficiente.