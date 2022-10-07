import { Link } from "react-router-dom";
import "./showList.scss";
import { projectFirestore } from "../firebase/config";

export default function ShowList({ shows }) {
  if (shows.length === 0) {
    return <div>No shows found matching that criteria</div>;
  }

  const handleDelete = (id) => {
    projectFirestore.collection("shows").doc(id).delete();
  };
  return (
    <div className="show-list">
      {shows.map((show) => (
        // <h2 key={show.id}>{show.name}</h2>
        <div key={show.id}>
          <div className="show">
            <div className="showCard">
              <h3 className="showCardDate"> {show.date} </h3>
              <h4 className="showCardPresents">
                {" "}
                The World Famous Kenton Club Presents:{" "}
              </h4>
              <h1 className="showCardName"> {show.name} </h1>
              <p>and</p>
              <h2 className="showCardSupport"> {show.support}</h2>
              <div className="showPhoto">{show.photo}</div>
              <div className="showCardDateTime">
                {show.time},{show.price}
              </div>
              <Link to={`/show/${show.id}`}>Show</Link>
              <span onClick={() => handleDelete(show.id)} className="delete">
                X
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
