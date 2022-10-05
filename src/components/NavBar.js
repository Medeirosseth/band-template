import "./navBar.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="navbar">
      <nav>
        <Link to="/" className="brand">
          <h1> Kenton Club</h1>
        </Link>
        <Link to="/create">Add Show</Link>
      </nav>
    </div>
  );
}
