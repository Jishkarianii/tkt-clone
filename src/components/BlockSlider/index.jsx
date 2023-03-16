import "./style.scss";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
import BlockSliderItem from "../BlockSliderItem";
import { useEffect, useState } from "react";

function resizeWindow() {
  const width = window.innerWidth;
  return width < 600;
}

function BlockSlider({
  title,
  subText,
  data,
  onPageLoad,
  slidesPerView,
  navigation = true,
}) {
  const [anim, setAnim] = useState(false);
  const [respView, setRespView] = useState(resizeWindow());

  // Run animation on page load
  useEffect(() => {
    if (onPageLoad) {
      setTimeout(() => {
        setAnim(true);
      }, 200);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);
    return () => window.addEventListener("resize", resizeHandler);
  }, []);

  const resizeHandler = () => {
    setRespView(resizeWindow());
  };

  return (
    <div className={`aos-init ${anim ? "aos-animate" : ""}`} data-aos="fade-up">
      {!respView ? (
        <Swiper
          className="block-slider"
          spaceBetween={20}
          slidesPerView={slidesPerView}
          simulateTouch={navigation}
          speed={500}
          navigation={navigation}
          modules={[Navigation]}
        >
          <div className="head">
            <h3>{title}</h3>
            {subText && <p>{subText}</p>}
          </div>
          {data.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div
                className={`aos-init ${anim ? "aos-animate" : ""}`}
                data-aos="fade-up"
                data-aos-delay={idx * 200}
              >
                <BlockSliderItem
                  date={item.date}
                  img={item.img}
                  price={item.price}
                  title={item.title}
                  location={item.location}
                  time={item.time}
                />
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
                <div
                  className={`aos-init ${anim ? "aos-animate" : ""}`}
                  data-aos="fade-up"
                  data-aos-delay={idx * 200}
                >
                  <BlockSliderItem
                    date={item.date}
                    img={item.img}
                    price={item.price}
                    title={item.title}
                    location={item.location}
                    time={item.time}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default BlockSlider;
