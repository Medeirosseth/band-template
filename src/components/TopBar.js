import "./topBar.css";
import { Link } from "react-router-dom";
import Home from "../pages/home/Home";

export default function TopBar() {
  return (
    <>
      <div className="topbar">
        <div className="emptyDiv"></div>
        <nav>
          <Link className="link" to={`/`}>
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
          </Link>
        </nav>
        <div className="lottery">
          <img
            alt="oregon lottery"
            className="lotto"
            src="./oregonLottery.png"
          />
        </div>
      </div>
    </>
  );
}

//<img alt="tagline" className="tagline" src="../MBR.png" />
