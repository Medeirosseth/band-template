import "./navBar.css";
import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <div className="navbar">
      <nav>
        <Link to="/" className="brand">
          <h1 className="kenton-club"> Kenton Club</h1>
          <img alt="tagline" className="tagline" src="../MBR.png" />
        </Link>
        <Link to="/create">Add Show</Link>
      </nav>
    </div>
  );
}
