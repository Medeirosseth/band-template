import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

import "./show.scss";

export default function Shows() {
  const { id } = useParams();
  const url = " http://localhost:3000/shows/" + id;
  const { error, isPending, data: show } = useFetch(url);

  return (
    <div className="show">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {show && (
        <>
          <div className="showDetailContainer">
            <h1>Show details</h1>
            <div className="showDetail">
              <div className="showDetailDate">
                <p>date: </p>
                <p>{show.date}</p>
              </div>
              <div className="showDetailName">
                <p>headliner: </p>
                <p>{show.name}</p>
              </div>
              <div className="showDetailSupport">
                <p>support: </p>
                <p>{show.support}</p>
              </div>
              <div className="showDetailPhoto">
                <p>photo: </p>
                <p>{show.photo}</p>
              </div>
              <div className="showDetailTime">
                <p>time: </p>
                <p>{show.time}</p>
              </div>
              <div className="showDetailPrice">
                <p>price: </p>
                <p>{show.price}</p>
              </div>
              <div className="showDetailId">
                <p>showID: </p>
                <p>{show.id}</p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
