import { useState } from "react";
// eslint-disable-next-line react/prop-types
export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const isButtonDisabled = !(username && password);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && password.length > 8) {
      console.log(username, password);
    } else {
      alert("Contraseña incorrecta");
    }
  };
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <p>Username:</p>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div>
          <p>Password:</p>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div>
          <button type="submit" disabled={isButtonDisabled}>Login</button>
        </div>
      </form>
    </div>
  );
}
