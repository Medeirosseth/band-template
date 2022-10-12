import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { projectFirestore } from "../../firebase/config";

import "./show.css";

export default function Shows() {
  const [show, setShow] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    setIsPending(true);

    const unsubscribe = projectFirestore
      .collection("shows")
      .doc(id)
      .onSnapshot((doc) => {
        if (doc.exists) {
          setIsPending(false);
          setShow(doc.data());
        } else {
          setIsPending(false);
          setError("Could not find that show");
        }
      });

    return () => unsubscribe();
  }, [id]);

  // FLUSH PUT UPDATE IDEA
  // const handleEdit = (id) => {
  //   projectFirestore.collection("shows").doc(id).update({});
  // };

  return (
    <div className="show">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {show && (
        <>
          <div className="showDetailContainer">
            <div className="showDetailWrapper">
              <h2>{show.date}</h2>
              <h4>The World Famous Kenton Club Presents:</h4>
              <h1>{show.name}</h1>
              <h3>{show.support}</h3>
              <span>{show.photo}</span>
              <h4>
                {show.time} // {show.price}
              </h4>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
