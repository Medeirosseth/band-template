import { Link } from "react-router-dom";
import "./showList.scss";
import { projectFirestore } from "../firebase/config";
import { useState } from "react";

export default function ShowList({ shows }) {
  const [allShows, setAllShows] = useState(false);
  if (shows.length === 0) {
    return <div>No shows found matching that criteria</div>;
  }

  const sortShows = (shows) => {
    let sortedArray = shows.sort(function (a, b) {
      return new Date(a.date) - new Date(b.date);
    });
    return sortedArray;
  };

  ////figure this out
  const showTime = (sT) => {
    const myArray = sT.split("");
    let hourString = myArray[0] + myArray[1];
    let hour = parseInt(hourString);
    let amOrPm = hour >= 12 ? "pm" : "am";
    let modulo = hour % 12 || 12;
    let prettyShowTime = modulo + myArray[2] + myArray[3] + myArray[4] + amOrPm;

    return prettyShowTime;
  };

  const deleteOldShows = (ourShowDate) => {
    // gets current date
    const currentDate = new Date();
    if (ourShowDate <= currentDate) {
      console.log("alreadyHappened");
    } else if (ourShowDate > currentDate) {
      console.log("still to come");
    } else {
      // console.log("nothing happened");
    }
    const currentDayOfMonth = currentDate.getDate();
    const currentMonth = currentDate.getMonth(); // Be careful! January is 0, not 1
    const currentYear = currentDate.getFullYear();
    const dateString =
      currentMonth + 1 + "-" + currentDayOfMonth + "-" + currentYear;

    console.log("ours", ourShowDate);
    console.log(dateString);

    //gets current show date
  };

  const handleDelete = (id) => {
    projectFirestore.collection("shows").doc(id).delete();
  };

  if (allShows === true) {
    return (
      <div className="show-list">
        {sortShows(shows).map((show) => (
          // <h2 key={show.id}>{show.name}</h2>
          <div key={show.id}>
            <div className="show">
              <div className="showCard">
                <i
                  onClick={() => handleDelete(show.id)}
                  className="fa-solid fa-xmark"
                ></i>

                <div className="cardTop">
                  <h3 className="showCardDate">
                    {" "}
                    {show.date[5]}
                    {show.date[6]}/{show.date[8]}
                    {show.date[9]}
                  </h3>
                  <h4 className="showCardPresents">
                    {" "}
                    The World Famous Kenton Club Presents{" "}
                  </h4>
                </div>
                <div className="cardMiddle">
                  <div className="showInfo">
                    <div className="showInfoLeft">
                      <div className="showPhoto">
                        <img alt="Headliner" src={show.photo} />
                      </div>
                    </div>
                    <div className="showInfoRight">
                      <h1 className="showCardName"> {show.name} </h1>
                      <p></p>
                      {/* <h2 className="showCardSupport"> {show.support}</h2> */}
                      <h2 className="showCardSupport"> {show.support[0]}</h2>
                      <h3 className="showCardSupport"> {show.support[1]}</h3>
                      <h4 className="showCardSupport"> {show.support[2]}</h4>
                      <h4 className="showCardSupport"> {show.support[3]}</h4>
                    </div>
                  </div>
                </div>
                <div className="cardBottom">
                  <div className="showCardDateTime">
                    🚪: {showTime(show.time)}, {show.price}
                  </div>
                </div>
                <div className="manage-show-details">
                  <Link className="details" to={`/show/${show.id}`}>
                    Info
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
        <button onClick={() => setAllShows(false)}>show less</button>
      </div>
    );
  } else {
    let firstThreeShows = sortShows(shows).slice(0, 3);
    return (
      <div className="show-list">
        {firstThreeShows.map((show) => (
          // <h2 key={show.id}>{show.name}</h2>
          <div key={show.id}>
            <div className="show">
              <div className="showCard">
                <button className="daddy" onClick={deleteOldShows(show.date)}>
                  CLICK ME DADDY
                </button>
                <i
                  onClick={() => handleDelete(show.id)}
                  className="fa-solid fa-xmark"
                ></i>
                <div className="cardTop">
                  <h3 className="showCardDate">
                    {" "}
                    {show.date[5]}
                    {show.date[6]}/{show.date[8]}
                    {show.date[9]}
                  </h3>
                  <h4 className="showCardPresents">
                    {" "}
                    The World Famous Kenton Club Presents{" "}
                  </h4>
                </div>
                <div className="cardMiddle">
                  <div className="showInfo">
                    <div className="showInfoLeft">
                      <div className="showPhoto">
                        <img alt="Headliner" src={show.photo} />
                      </div>
                    </div>
                    <div className="showInfoRight">
                      <h1 className="showCardName"> {show.name} </h1>
                      <p></p>
                      {/* <h2 className="showCardSupport"> {show.support}</h2> */}
                      <h2 className="showCardSupport"> {show.support[0]}</h2>
                      <h2 className="showCardSupport"> {show.support[1]}</h2>
                      <h2 className="showCardSupport"> {show.support[2]}</h2>
                      <h2 className="showCardSupport"> {show.support[3]}</h2>
                    </div>
                  </div>
                </div>
                <div className="cardBottom">
                  <div className="showCardDateTime">
                    🚪{showTime(show.time)}: , {show.price}${" "}
                  </div>
                </div>
                <div className="manage-show-details">
                  <Link className="details" to={`/show/${show.id}`}>
                    Info
                  </Link>
                  <span
                    onClick={() => handleDelete(show.id)}
                    className="delete"
                  >
                    Delete
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
        <button onClick={() => setAllShows(true)}>See MOre</button>
      </div>
    );
  }
}
