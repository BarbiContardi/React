export default function UncontrolledLogin() {
    function handleFormSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = {
            username : formData.get('username'),
            password : formData.get('password'),
            session : formData.get('session') === 'on' ? true : false,
        }
        console.log(data)
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

//FormData Api es una herramienta útil para recopilar y enviar datos de formularios 
//de manera eficiente, especialmente en aplicaciones que utilizan formularios HTML estándar,
//como desventaja puede no ser compatible con navegadores mas antiguos
