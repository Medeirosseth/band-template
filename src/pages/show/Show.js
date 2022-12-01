import { useParams } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { projectFirestore, app } from "../../firebase/config";
import "./show.scss";

export default function Shows() {
  const [show, setShow] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [price, setPrice] = useState("");
  const [photo, setPhoto] = useState(null);
  const [support, setSupport] = useState([]);
  const [newSupport, setNewSupport] = useState("");
  const supportInput = useRef(null);
  const [updateMode, setUpdateMode] = useState(false);
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

  const handleUpdate = async (e) => {
    e.preventDefault();
    const doc = { name, date, time, price, photo, support };

    try {
      await projectFirestore.collection("shows").doc(id).update(doc);
      // history.push("/");
    } catch (err) {
      console.log(err);
    }
    // document.getElementById("newShow-form").reset();
  };

  const handleSupport = (e) => {
    e.preventDefault();
    const sup = newSupport.trim();

    if (sup && !support.includes(sup)) {
      setSupport((prevSupport) => [...prevSupport, sup]);
    }
    setNewSupport("");
    supportInput.current.focus();
  };

  const handleRemoveSupport = (e) => {
    e.preventDefault();

    const last = support[support.length - 1];
    const deleteSup = support.pop();
    console.log("AAAA", support.pop());

    if (support.length >= 0) {
      setSupport(support.pop());
      console.log(support);
    }
  };

  const onFileChange = async (e) => {
    const file = e.target.files[0];
    const storageRef = app.storage().ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    setPhoto(await fileRef.getDownloadURL());
  };
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
              <h3 className="supportName">{show.support}</h3>
              <span>
                <img alt="headliner" src={show.photo} />
              </span>
              <h4>
                {show.time} // {show.price}
              </h4>
            </div>
          </div>
        </>
      )}
      <form id="newShow-form" className="newShowForm" onSubmit={handleUpdate}>
        <div className="bandNameLabel">
          <input
            type="text"
            placeholder="Group"
            onChange={(e) =>
              !null ? setName(e.target.value) : setShow({ ...show.name })
            }
            value={name}
          />
        </div>
        <div className="supportLabel">
          <div className="additional-bands">
            <input
              type="text"
              placeholder="Supporting Acts"
              onChange={(e) => setNewSupport(e.target.value)}
              value={newSupport}
              ref={supportInput}
            />
            <button onClick={handleSupport} className="btn">
              add
            </button>
            <button onClick={handleRemoveSupport} className="btn">
              remove
            </button>
          </div>
        </div>
        <div className="supportingActs">
          <p>
            Supporting Acts:{" "}
            {support.map((band) => (
              <span className="supportName">
                <em key={band.id}>{band}</em>.{" "}
              </span>
            ))}
          </p>
        </div>
        <div className="dateLabel">
          <input
            placeholder="Date"
            type="date"
            onChange={(e) => setDate(e.target.value)}
            value={date}
          />
        </div>
        <div className="timeLabel">
          <input
            placeholder="Time"
            type="time"
            onChange={(e) => setTime(e.target.value)}
            value={time}
          />
        </div>
        <div className="priceLabel">
          <input
            placeholder="Price"
            type="text"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />
        </div>
        <div className="photoLabel">
          <input placeholder="photo" type="file" onChange={onFileChange} />
        </div>

        <button type="submit">submit</button>
      </form>
    </div>
  );
}
