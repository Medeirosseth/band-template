import { useState, useRef } from "react";
import "./create.css";

export default function Create() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [price, setPrice] = useState("");
  const [photo, setPhoto] = useState("");
  const [support, setSupport] = useState([]);
  const [newSupport, setNewSupport] = useState("");
  const supportInput = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, time, price, support, date);
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
      <form onSubmit={handleSubmit}>
        <label>
          <span>Band Name</span>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />
        </label>

        <label>
          <span>Date</span>
          <input
            type="text"
            onChange={(e) => setDate(e.target.value)}
            value={date}
            required
          />
        </label>

        <label>
          <span>Time</span>
          <input
            type="text"
            onChange={(e) => setTime(e.target.value)}
            value={time}
            required
          />
        </label>

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
        <p>
          Supporting Acts:{" "}
          {support.map((band) => (
            <em key={band}>{band}, </em>
          ))}
        </p>

        <label>
          <span>Show Price:</span>
          <input
            type="text"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            required
          />
        </label>

        <label>
          <span>Photo:</span>
          <input
            type="text"
            onChange={(e) => setPhoto(e.target.value)}
            value={photo}
            required
          />
        </label>
        <button type="submit">submit</button>
      </form>
    </div>
  );
}
