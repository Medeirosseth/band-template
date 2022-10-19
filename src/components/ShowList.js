import { Link } from "react-router-dom";
import "./showList.scss";
import { projectFirestore } from "../firebase/config";

export default function ShowList({ shows }) {
  if (shows.length === 0) {
    return <div>No shows found matching that criteria</div>;
  }

  const sortShows = (shows) => {
    let sortedArray = shows.sort(function (a, b) {
      return new Date(a.date) - new Date(b.date);
    });
    return sortedArray;
  };

  const showTime = (shows) => {
    const ST = shows.time;
    const AMorPM = shows.time >= 12 ? "pm" : "am";
    const hours = shows.time % 12 || 12;
    const minutes = ST.getMinutes();
    const showTime = hours + ":" + minutes + " " + AMorPM;
    return showTime;
  };

  const handleDelete = (id) => {
    projectFirestore.collection("shows").doc(id).delete();
  };

  return (
    <div className="show-list">
      {sortShows(shows).map((show) => (
        // <h2 key={show.id}>{show.name}</h2>
        <div key={show.id}>
          <div className="show">
            <div className="showCard">
              <h3 className="showCardDate">
                {" "}
                {show.date[5]}
                {show.date[6]}/{show.date[8]}
                {show.date[9]}
              </h3>
              <h4 className="showCardPresents">
                {" "}
                The World Famous Kenton Club Presents:{" "}
              </h4>
              <h1 className="showCardName"> {show.name} </h1>
              <p>and</p>
              {/* <h2 className="showCardSupport"> {show.support}</h2> */}
              <h2 className="showCardSupport"> {show.support[0]}</h2>
              <h2 className="showCardSupport"> {show.support[1]}</h2>
              <h2 className="showCardSupport"> {show.support[2]}</h2>
              <h2 className="showCardSupport"> {show.support[3]}</h2>
              <div className="showPhoto">
                <img alt="Headliner" src={show.photo} />
              </div>
              <div className="showCardDateTime">
                {shows.time},{show.price}
              </div>
              <div className="manage-show-details">
                <Link className="details" to={`/show/${show.id}`}>
                  Info
                </Link>
                <span onClick={() => handleDelete(show.id)} className="delete">
                  Delete
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
