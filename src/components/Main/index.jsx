import "./style.scss";
import { useState } from "react";
import {
  promoSliderData,
  popularEvents,
  banners,
  today,
  newEvents,
  flights,
  railway
} from "../../data";
import PromoSlider from "../PromoSlider";
import BlockSlider from "../BlockSlider";
import Banner from "../Banner";
import NoHoverSlider from "../NoHoverSlider";

function Main() {
  const [isOpen, setIsOpen] = useState(true);

  const accordionHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <main className="container">
      <div className="side-bar">
        <ul className="list">
          <li className="item">
            <span className="icon-home-active active"></span>
            <p>მთავარი</p>
          </li>
          <li className="accordion-cont">
            <div className="wrapper" onClick={accordionHandler}>
              <span className="icon-event"></span>
              <p>ღონისძიებები</p>
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
      </div>
      <div className="content">
        <PromoSlider data={promoSliderData} />
        <BlockSlider
          title="პოპულარული ღონისძიებები"
          subText="ყველა"
          data={popularEvents}
          slidesPerView={3}
        />
        <Banner img={banners[0].img} />
        <BlockSlider title="დღეს" data={today} slidesPerView={3} />
        <BlockSlider
          title="ახალი ღონისძიებები"
          subText="ყველა"
          data={newEvents}
          slidesPerView={3}
        />
        <Banner img={banners[1].img} />
        <NoHoverSlider
          title="ფრენები"
          data={flights}
          slidesPerView={3}
        />
        <Banner img={banners[2].img} />
        <NoHoverSlider
          title="რკინიგზა"
          subText="ყველა მიმართულება"
          data={railway}
          slidesPerView={3}
          navigation={false}
        />
      </div>
    </main>
  );
}

export default Main;
