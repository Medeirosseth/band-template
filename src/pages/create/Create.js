import { useState } from "react";
import "./create.css";

export default function Create() {
  const [name, setName] = useState("");
  const [support, setSupport] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [price, setPrice] = useState("");
  const [photo, setPhoto] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, time, price, support, date);
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
          <input
            type="text"
            onChange={(e) => setSupport(e.target.value)}
            value={support}
            required
          />
        </label>

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
