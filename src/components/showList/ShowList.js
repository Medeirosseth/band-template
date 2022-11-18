import { Link } from "react-router-dom";
import "./showList.scss";
import { projectFirestore } from "../../firebase/config";
import { useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import Create from "../../pages/create/Create";
import { useEffect } from "react";

export default function ShowList({ shows }) {
  const { user } = useAuthContext();
  const [allShows, setAllShows] = useState(false);
  const [count, setCount] = useState(0);

  // useEffect(() => {
  //   setInterval(() => {
  //     for (let i = 0; i <= 2; i++) {
  //       const oldShowBtn = document.getElementById("oldShows");
  //       oldShowBtn.click();
  //       console.log("CLICKED", i);
  //     }
  //   }, 20000);
  // }, []);

  ////removed Link to Info --- didnt know if it was necessary
  // <Link className="details" to={`/show/${show.id}`}>
  //   Info
  //</Link>

  if (shows.length === 0) {
    return <div>No shows found matching that criteria</div>;
  }

  // function clearShows() {
  //   console.log("ourint");
  // }
  // const interval = setInterval(clearShows, 3000);

  // console.log("interval", interval);

  const sortShows = (shows) => {
    let sortedArray = shows.sort(function (a, b) {
      return new Date(a.date) - new Date(b.date);
    });
    return sortedArray;
  };

  // refactored show time
  const showTime = (sT) => {
    const myArray = sT.split("");
    let hourString = myArray[0] + myArray[1];
    let hour = parseInt(hourString);
    let amOrPm = hour >= 12 ? "pm" : "am";
    let modulo = hour % 12 || 12;
    let prettyShowTime = modulo + myArray[2] + myArray[3] + myArray[4] + amOrPm;

    return prettyShowTime;
  };

  function deleteOldShows(ourShowDate, id) {
    const currentDate = new Date();
    const prettyDate = new Date(ourShowDate + " 23:59:59.999");
    console.log("ourshowdate: ", ourShowDate);
    console.log("current date: ", currentDate);
    console.log("prettyDate: ", prettyDate);
    console.log(ourShowDate);
    if (prettyDate < currentDate) {
      handleDelete(id);
    } else if (prettyDate >= currentDate) {
      // console.log("still to come");
    } else {
      // console.log("nothing happened");
    }
  }

  const handleDelete = (id) => {
    projectFirestore.collection("shows").doc(id).delete();
  };

  if (allShows === true) {
    console.log("USER LOGIN: ", user);
    return (
      <div className="show-list">
        {sortShows(shows).map((show) => (
          // <h2 key={show.id}>{show.name}</h2>
          <div key={show.id}>
            <div className="show">
              <div className="showCard">
                {!user && (
                  <i
                    onClick={() => handleDelete(show.id)}
                    className="fa-solid fa-xmark"
                  ></i>
                )}

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
                    Door: {showTime(show.time)}, {show.price}
                  </div>
                </div>
                <div className="manage-show-details"></div>
              </div>
            </div>
          </div>
        ))}
        <div className="show-less">
          <button onClick={() => setAllShows(false)}>show less</button>
        </div>
      </div>
    );
  } else {
    let firstThreeShows = sortShows(shows).slice(0, 3);
    return (
      <div className="show-list">
        {firstThreeShows.map((show) => (
          // <h2 key={show.id}>{show.name}</h2>
          <div key={show.id}>
            <button
              data-show={show.date}
              data-id={show.id}
              onClick={() => deleteOldShows(show.date, show.id)}
              id="oldShows"
            >
              DELETE OLD SHOWS
            </button>
            <div className="show">
              <div className="showCard">
                {user && (
                  <div
                    className="deleteIconContainer"
                    onClick={() => handleDelete(show.id)}
                  >
                    <i className="fa-solid fa-xmark"></i>
                  </div>
                )}
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
                    Door: {showTime(show.time)} | ${""}
                    {show.price}
                  </div>
                </div>
                <div className="manage-show-details"></div>
              </div>
            </div>
          </div>
        ))}
        <div className="seeMoreBtn">
          <button onClick={() => setAllShows(true)}>See MOre</button>
        </div>
        {user && <Create />}
      </div>
    );
  }
}
