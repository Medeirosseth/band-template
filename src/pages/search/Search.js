//styles
import "./search.css";

import React from "react";
import { useLocation } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import ShowList from "../../components/ShowList";

function Search() {
  const queryString = useLocation().search;
  const queryParams = new URLSearchParams(queryString);
  const query = queryParams.get("q");

  const url = " http://localhost:3000/shows?q=" + query;
  const { error, isPending, data } = useFetch(url);

  return (
    <div className="search">
      <h2 className="page-title">Shows Including "{query}"</h2>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">loading</p>}
      {data && <ShowList shows={data} />}
    </div>
  );
}

export default Search;
