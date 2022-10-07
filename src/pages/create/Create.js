import { useState, useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { projectFirestore } from "../../firebase/config";

import "./create.scss";

export default function Create() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [price, setPrice] = useState("");
  const [photo, setPhoto] = useState("");
  const [support, setSupport] = useState([]);
  const [newSupport, setNewSupport] = useState("");
  const supportInput = useRef(null);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const doc = { name, date, time, price, photo, support };

    try {
      await projectFirestore.collection("shows").add(doc);
      history.push("/");
    } catch (err) {
      console.log(err);
    }
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

  return (
    <div className="create">
      <h2 className="addBand">Add Band</h2>
      <form className="newShowForm" onSubmit={handleSubmit}>
        <div className="bandNameLabel">
          <label>
            <span>Band Name</span>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
          </label>
        </div>
        <div className="dateLable">
          <label>
            <span>Date</span>
            <input
              type="text"
              onChange={(e) => setDate(e.target.value)}
              value={date}
              required
            />
          </label>
        </div>
        <div className="timeLabel">
          <label>
            <span>Time</span>
            <input
              type="text"
              onChange={(e) => setTime(e.target.value)}
              value={time}
              required
            />
          </label>
        </div>
        <div className="supportLabel">
          <label>
            <span>Support</span>
            <div className="additional-bands">
              <input
                type="text"
                onChange={(e) => setNewSupport(e.target.value)}
                value={newSupport}
                ref={supportInput}
              />
              <button onClick={handleSupport} className="btn">
                add
              </button>
            </div>
          </label>
        </div>
        <div className="supportingActs">
          <p>
            Supporting Acts:{" "}
            {support.map((band) => (
              <em key={band}>{band}, </em>
            ))}
          </p>
        </div>
        <div className="priceLabel">
          <label>
            <span>Show Price:</span>
            <input
              type="text"
              onChange={(e) => setPrice(e.target.value)}
              value={price}
              required
            />
          </label>
        </div>
        <div className="photoLabel">
          <label>
            <span>Photo:</span>
            <input
              type="text"
              onChange={(e) => setPhoto(e.target.value)}
              value={photo}
              required
            />
          </label>
        </div>
        <button type="submit">submit</button>
      </form>
    </div>
  );
}
