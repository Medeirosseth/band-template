import "./navBar.css";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
export default function NavBar() {
  return (
    <div className="navbar">
      <nav>
        <Link to="/" className="brand">
          <h1> Kenton Club</h1>
        </Link>
        <SearchBar />
        <Link to="/create">Add Show</Link>
      </nav>
    </div>
  );
}
