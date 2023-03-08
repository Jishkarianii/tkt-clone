import "./style.scss";
import logo from "../../assets/icons/logo.svg";
import eng from "../../assets/icons/eng.svg";
import tnetlogounhovered from "../../assets/icons/tnet-logo-unhovered.svg";
import { useState } from "react";

function Header() {
  const [searchInp, setSearchInp] = useState("");

  return (
    <header>
      <div className="header-top-line"></div>
      <div className="header-cont">
        <div className="white-space"></div>
        <div className="header-middle-cont">
          <div className="left">
            <img src={logo} alt="tkt logo" />
            <div className="search-bar">
              <input
                type="text"
                placeholder="ძიება..."
                value={searchInp}
                onChange={(e) => {
                  setSearchInp(e.target.value);
                }}
              />
              {searchInp.length > 0 ? (
                <i
                  className="icon-remove-in-circle-fill"
                  onClick={() => setSearchInp("")}
                ></i>
              ) : (
                <i className="icon-search"></i>
              )}
            </div>
          </div>
          <div className="category-list">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="20.7 0 120 70"
              className="active-category"
              color="#fff"
              width="120"
              height="70"
              style={{
                transition: "all 0.45s ease-in-out 0s",
                willChange: "transform",
                flexShrink: "0",
              }}
            >
              <path
                fill="#fff"
                d="M 158.4 0 L 158.4 70 L 142.5 70 C 138.545 70 134.749 69.335 131.215 68.113 C 123.285 65.369 116.677 59.816 112.565 52.656 C 109.66 47.598 108 41.737 108 35.5 C 108 19.8 95.3 7.1 79.6 7.1 C 63.9 7.1 51.2 19.8 51.2 35.5 C 51.2 41.43 49.7 47.02 47.055 51.903 C 43.22 58.983 36.98 64.58 29.418 67.581 C 25.486 69.141 21.195 70 16.7 70 L 0 70 L 0 0 L 158.4 0 Z"
              ></path>
            </svg>
            <div className="other-categorys"></div>
            <div className="list-cont">
              <div className="list-item active">
                <span className="icon-home-active"></span>
              </div>
              <div className="list-item">
                <span className="icon-event"></span>
              </div>
              <div className="list-item">
                <span className="icon-movie"></span>
              </div>
              <div className="list-item">
                <span className="icon-railway"></span>
              </div>
              <div className="list-item">
                <span className="icon-flights"></span>
              </div>
              <div className="list-item">
                <span className="icon-winter"></span>
              </div>
            </div>
          </div>
          <div className="right">
            <button>ავტორიზაცია</button>
            <img className="eng" src={eng} alt="eng" />
            <img src={tnetlogounhovered} alt="tnet logo" />
          </div>
        </div>
        <div className="white-space"></div>
      </div>
    </header>
  );
}

export default Header;
