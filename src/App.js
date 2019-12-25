import React from "react";
import Rellax from "rellax";

import "./App.css";
import top from "./pbgtop.png";
import bottom from "./pbg.png";

class App extends React.Component {
  componentDidMount() {
    this.rellax = new Rellax(".rellax");
  }
  render() {
    return (
      <div className="ctn">
        <div className="img">
          <img className="rellax" id="top" data-rellax-speed="1.5" src={top} />
          <div className="rellax img-text" data-rellax-speed="-4">
            PARALLAX
          </div>
          <img
            id="bottom"
            className="rellax"
            data-rellax-speed="4"
            src={bottom}
            style={{ zIndex: "1000" }}
          />
        </div>
        <div className="stars rellax" data-rellax-speed="2">
          <div className="grid">
            <div
              id="star1"
              className="rellax"
              data-rellax-speed="8"
              style={{ transform: "rotate(45deg)" }}
            ></div>
          </div>
          <div className="grid">
            <div
              id="star2"
              className="rellax"
              data-rellax-speed="3"
              style={{ transform: "rotate(45deg)" }}
            ></div>
          </div>
          <div className="grid">
            <div
              id="star3"
              className="rellax"
              data-rellax-speed="1"
              style={{ transform: "rotate(45deg)" }}
            ></div>
          </div>
          <div className="grid">
            <div
              id="star4"
              className="rellax"
              data-rellax-speed="1"
              style={{ transform: "rotate(45deg)" }}
            ></div>
          </div>
          <div className="grid">
            <div
              id="star5"
              className="rellax"
              data-rellax-speed="5"
              style={{ transform: "rotate(45deg)" }}
            ></div>
          </div>
          <div className="grid-txt1 rellax" data-rellax-speed="1">
            <div>Ut at dapibus</div>
            Fusce ut feugiat justo. Aliquam erat volutpat. Donec sodales ante id
            ex dictum aliquam. Mauris sit amet lorem condimentum, venenatis
            purus aliquam, varius quam. Vivamus euismod nunc sit amet mi
            tristique
          </div>
          <div className="grid-txt2 rellax" data-rellax-speed="1">
            <div>Nam arcu risus</div>
            Donec eu hendrerit urna. Morbi rutrum quam hendrerit diam varius
            varius. Etiam at dui scelerisque, faucibus mauris ut, euismod elit.
            Vivamus et justo viverra, laoreet arcu ut, fringilla ligula.
            Vestibulum ante ipsum primis
          </div>
          <div id="p" className="rellax" data-rellax-speed="3">
            PARALLAX
          </div>
        </div>
      </div>
    );
  }
}

export default App;
