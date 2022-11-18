import "./topBar.css";
import { Link } from "react-router-dom";
import Home from "../pages/home/Home";
import Carousel from "./carousel/Carousel";

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
          <h6 className="location"> 2025 N Kilpatrick St Portland, OR 97217</h6>
          <h6 className="hours">Current Hours noon to midnight</h6>
        </nav>
        <div className="lottery"></div>
      </div>
      <Carousel />
    </>
  );
}

//<img alt="tagline" className="tagline" src="../MBR.png" />
