import "./navBar.css";
export default function NavBar() {
  return (
    <div className="navbar">
      <div className="emptyDiv"></div>
      <nav>
        <div className="top" id="simple_arc">
          <h2>THE WORLD FAMOUS</h2>
        </div>
        <div className="middle">
          <h1 className="kenton-club"> Kenton Club</h1>
        </div>
        <div className="bottom">
          <h2> DINING </h2>
          <i className="fa-solid fa-star"></i>
          <h2>DANCING</h2>
          <i className="fa-solid fa-star"></i>
          <h2>LOUNGE</h2>
        </div>
      </nav>
      <div className="lottery">
        <img alt="oregon lottery" className="lotto" src="./oregonLottery.png" />
      </div>
    </div>
  );
}

//<img alt="tagline" className="tagline" src="../MBR.png" />
