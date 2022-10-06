import { useState } from "react";
import { useHistory } from "react-router-dom";
import "./searchBar.css";

export default function SearchBar() {
  const [searchInput, setSearchInput] = useState("");
  const history = useHistory();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);

    history.push(`/search?q=${searchInput}`);
  };

  return (
    <div className="searchbar">
      <form onSubmit={handleSearchSubmit}>
        <label htmlFor="search">Search:</label>
        <input
          type="text"
          id="search"
          onChange={(e) => setSearchInput(e.target.value)}
        ></input>
      </form>
    </div>
  );
}
