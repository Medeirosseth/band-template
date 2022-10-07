import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { projectFirestore } from "../../firebase/config";

import "./show.scss";

export default function Shows() {
  const [show, setShow] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    setIsPending(true);

    projectFirestore
      .collection("shows")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setIsPending(false);
          setShow(doc.data());
        } else {
          setIsPending(false);
          setError("Could not find that show");
        }
      });
  }, [id]);

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
