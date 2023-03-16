import "./style.scss";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
import NoHoverSliderItem from "../NoHoverSliderItem";
import { useEffect, useState } from "react";

function resizeWindow() {
  const width = window.innerWidth;
  return width < 600;
}

function NoHoverSlider({
  title,
  subText,
  data,
  slidesPerView,
  navigation = true,
}) {
  const [respView, setRespView] = useState(resizeWindow());

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);
    return () => window.addEventListener("resize", resizeHandler);
  }, []);

  const resizeHandler = () => {
    setRespView(resizeWindow());
  };

  return (
    <div data-aos="fade-up">
      {!respView ? (
        <Swiper
          className="no-hover-slider"
          spaceBetween={20}
          slidesPerView={slidesPerView}
          simulateTouch={navigation}
          speed={500}
          navigation={navigation}
          modules={[Navigation]}
        >
          <div className={`head ${!navigation ? "full" : ""}`}>
            <h3>{title}</h3>
            {subText && <p>{subText}</p>}
          </div>
          {data.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div data-aos="fade-up" data-aos-delay={idx * 200}>
                <NoHoverSliderItem img={item.img} title={item.title} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className="mobile-slider">
          <div className="head">
            <h3>{title}</h3>
          </div>
          <div className="slider-cont">
            {data.map((item, idx) => (
              <div className="slide" key={idx}>
                <div data-aos="fade-up" data-aos-delay={idx * 200}>
                  <NoHoverSliderItem img={item.img} title={item.title} />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default NoHoverSlider;
