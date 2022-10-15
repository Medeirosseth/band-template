import { useState, useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { projectFirestore, app } from "../../firebase/config";
import { useLogout } from "../../hooks/useLogout";
import "./create.scss";

export default function Create() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [price, setPrice] = useState("");
  const [photo, setPhoto] = useState(null);
  const [support, setSupport] = useState([]);
  const [newSupport, setNewSupport] = useState("");
  const supportInput = useRef(null);
  const { logout } = useLogout();
  // const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const doc = { name, date, time, price, photo, support };

    try {
      await projectFirestore.collection("shows").add(doc);
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

  const onFileChange = async (e) => {
    const file = e.target.files[0];
    const storageRef = app.storage().ref();
    console.log("AAAAA", storageRef);
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    setPhoto(await fileRef.getDownloadURL());
  };

  return (
    <div className="create">
      <form id="newShow-form" className="newShowForm" onSubmit={handleSubmit}>
        <div className="bandNameLabel">
          <input
            type="text"
            placeholder="Group"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
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
          </div>
        </div>
        <div className="supportingActs">
          <p>
            Supporting Acts:{" "}
            {support.map((band) => (
              <span className="supportName">
                <em key={band}>{band}</em>.{" "}
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
            required
          />
        </div>
        <div className="timeLabel">
          <input
            placeholder="Time"
            type="time"
            onChange={(e) => setTime(e.target.value)}
            value={time}
            required
          />
        </div>
        <div className="priceLabel">
          <input
            placeholder="Price"
            type="text"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            required
          />
        </div>
        <div className="photoLabel">
          <input
            placeholder="photo"
            type="file"
            onChange={onFileChange}
            required
          />
        </div>

        <button type="submit">submit</button>
      </form>
      <button className="btn" onClick={logout}>
        Logout
      </button>
    </div>
  );
}
