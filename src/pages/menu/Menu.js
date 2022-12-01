import "./menu.scss";

export default function Menu() {
  return (
    <div id="menu" className="container">
      <div className="menu-wrapper">
        <div className="menu-item">
          <h2>Menu</h2>
          <span> Fish N Chips $10</span>
          <span> Chicken Strips $10</span>
          <span> Hot Wings $6</span>
          <span> Zucchini Sticks $6</span>
          <span> Corn Dogs 2 for $5</span>
          <span> Pork Potstickers $5</span>
          <span> Veggy Spring Rolls $5</span>
          <span> Fries $5</span>
          <div className="disclaimer">
            ***Due to a labor shortage, Breakfast has been put on hold
          </div>
        </div>
      </div>
    </div>
  );
}
