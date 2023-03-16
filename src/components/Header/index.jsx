import "./style.scss";
import logo from "../../assets/icons/logo.svg";
import geo from "../../assets/icons/geo.svg";
import eng from "../../assets/icons/eng.svg";
import tnetlogounhovered from "../../assets/icons/tnet-logo-unhovered.svg";
import { useEffect, useState } from "react";

let scrollY = 0;

function Header() {
  const [menu, setMenu] = useState(false);
  const [isOpen, setIsOpen] = useState(true);
  const [searchInp, setSearchInp] = useState("");
  const [isHide, setIsHide] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  const scrollHandler = () => {
    if (window.scrollY < 70) return;
    window.scrollY > scrollY ? setIsHide(true) : setIsHide(false);
    scrollY = window.scrollY;
  };

  const accordionHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header data-aos="fade-down">
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
      <div className="responsive-header">
        <div className={`bg ${menu ? "show" : ""}`} onClick={() => setMenu(false)}></div>
        <div className={`menu ${menu ? "show" : ""}`}>
          <div className="lang-cont">
            <div className="lang active">
              <img src={geo} alt="geo" />
              <span>ქართული</span>
            </div>
            <div className="lang">
              <img src={eng} alt="eng" />
              <span>English</span>
            </div>
          </div>
          <div className="direction-cont">
            <ul className="list">
              <li className="accordion-cont">
                <div className="wrapper" onClick={accordionHandler}>
                  <div className="inner-cont">
                    <span className="icon-event"></span>
                    <p>ღონისძიებები</p>
                  </div>
                  <i className={`icon-arrow ${isOpen ? "open" : ""}`}></i>
                </div>
                <ul className={`accordion ${isOpen ? "open" : ""}`}>
                  <li>
                    <span className="icon-concerts"></span>
                    <p>კონცერტები</p>
                  </li>
                  <li>
                    <span className="icon-transport"></span>
                    <p>ტრანსპორტი</p>
                  </li>
                  <li>
                    <span className="icon-theatre"></span>
                    <p>თეატრი</p>
                  </li>
                  <li>
                    <span className="icon-opera"></span>
                    <p>ოპერა</p>
                  </li>
                  <li>
                    <span className="icon-sport"></span>
                    <p>სპორტი</p>
                  </li>
                  <li>
                    <span className="icon-other"></span>
                    <p>სხვა</p>
                  </li>
                </ul>
              </li>
              <li className="item">
                <span className="icon-movie"></span>
                <p>კინო</p>
              </li>
              <li className="item">
                <span className="icon-railway"></span>
                <p>რკინიგზა</p>
              </li>
              <li className="item">
                <span className="icon-flights"></span>
                <p>ფრენები</p>
              </li>
              <li className="item">
                <span className="icon-winter"></span>
                <p>მთა</p>
              </li>
            </ul>
            <div className="info">
              <div className="list">
                <p>ბლოგი</p>
                <p>ორგანიზატორებისთვის</p>
                <p>FAQ</p>
                <p>TKT Club-ის შესახებ</p>
                <p>წესები და პირობები</p>
                <p>ჩატარებული ღონისძიებები</p>
              </div>
              <div className="contact">
                <i className="icon-facebook"></i>
                <i className="icon-messenger"></i>
                <i className="icon-mail"></i>
                <i className="icon-call"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="top">
          <div className="inner-cont container">
            <i className="icon-menu" onClick={() => setMenu(true)}></i>
            <img src={logo} alt="tkt logo" />
            <div className="right">
              <i className="icon-avatar"></i>
              <img src={tnetlogounhovered} alt="tnet logo" />
            </div>
          </div>
        </div>
        <div className={`bottom ${isHide ? "hide" : ""}`}>
          <div className="inner-cont container">
            <div className="left">
              <span className="icon-event"></span>
              <span className="icon-movie"></span>
              <span className="icon-railway"></span>
              <span className="icon-winter"></span>
            </div>
            <div className="right">
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
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
