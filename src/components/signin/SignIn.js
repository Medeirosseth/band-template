import { useState } from "react";
import { useSignup } from "../../hooks/useSignup";
import "./signIn.css";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const { signup, isPending, error } = useSignup();

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(email, password, displayName);
    console.log(email, password, displayName);
  };

  return (
    <div className="sign-in">
      <form onSubmit={handleSubmit} className="formStyle">
        <h2>Kenton Show Admin </h2>
        <div className="sign-in-email">
          <input
            placeholder="Email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="sign-in-email">
          <input
            placeholder="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <div className="sign-in-email">
          <input
            placeholder="Display Name"
            type="text"
            onChange={(e) => setDisplayName(e.target.value)}
            value={displayName}
          />
          {!isPending && <button className="btn">Sign up</button>}
          {isPending && (
            <button className="btn" disabled>
              loading
            </button>
          )}
          {error && <p>{error}</p>}
        </div>
      </form>
    </div>
  );
}
