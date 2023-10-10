import { useState } from "react";

// eslint-disable-next-line react/prop-types
function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const isButtonDisabled = !(username && password);

  const handleResetClick = () => {
    setUsername("");
    setPassword("");
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // se evita el comportamiento predeterminado con esta funcion
    if (username && password) {
      onLogin({ username, password });
    }
  };
  const MyStyle ={
    backgroundColor: password.length < 8 ? 'red' : 'green'
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <label>
          <input type="checkbox" name="rememberMe" onChange={onLogin} />
          Remember Me!
        </label>
        <div>
          <button type="button" onClick={handleResetClick}>
            Reset
          </button>
          <button type="submit" disabled={isButtonDisabled} style={MyStyle}>
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
