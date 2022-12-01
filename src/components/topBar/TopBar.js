import "./topBar.scss";
import { Link } from "react-router-dom";
import Carousel from "../carousel/Carousel";

export default function TopBar() {
  return (
    <>
      <div className="topbar">
        <nav>
          <Link className="link" to={`/`}>
            <div className="top" id="simple_arc">
              <h2>THE WORLD FAMOUS</h2>
            </div>
            <div className="middle">
              <h1 className="kenton-club"> Kenton Club</h1>
            </div>
          </Link>
          <div className="bottom">
            <a href="#menu">
              <h2> DINING </h2>
            </a>
            <i className="fa-solid fa-star"></i>
            <h2>DANCING</h2>
            <i className="fa-solid fa-star"></i>
            <h2>LOUNGE</h2>
          </div>
        </nav>
        <div className="lottery"></div>
      </div>
    </>
  );
}

//<img alt="tagline" className="tagline" src="../MBR.png" />
