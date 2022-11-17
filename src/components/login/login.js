import { useLogin } from "../../hooks/useLogin";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isPending } = useLogin();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clicked");
    login(email, password);
    console.log("email: ", email, "CLICKED");
  };

  return (
    <form onSubmit={handleSubmit} className="login">
      <h2>Admin Login</h2>
      <label>
        <input
          placeholder="email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </label>
      <label>
        <input
          placeholder="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </label>
      {!isPending && (
        <Link to="/">
          <button onClick={handleSubmit} className="btn">
            Login
          </button>
        </Link>
      )}
      {isPending && (
        <button className="btn" disabled>
          loading
        </button>
      )}
      {error && <p>{error}</p>}
    </form>
  );
}
