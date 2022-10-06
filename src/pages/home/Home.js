import { projectFirestore } from "../../firebase/config";
import { useEffect, useState } from "react";
//styles
import "./home.css";

//components
import ShowList from "../../components/ShowList";

export default function Home() {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsPending(true);

    projectFirestore
      .collection("shows")
      .get()
      .then((snapshot) => {
        if (snapshot.empty) {
          setError("no shows to load");
          setIsPending(false);
        } else {
          let results = [];
          snapshot.docs.forEach((doc) => {
            results.push({ id: doc.id, ...doc.data() });
          });
          setData(results);
          setIsPending(false);
        }
      })
      .catch((err) => {
        setError(err.message);
        setIsPending(false);
      });
  }, []);

  return (
    <div className="home">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">loading...</p>}
      {data && <ShowList shows={data} />}
    </div>
  );
}
