import "./style.scss";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
import NoHoverSliderItem from "../NoHoverSliderItem";

function NoHoverSlider({ title, subText, data, slidesPerView, navigation = true }) {
  return (
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
          <NoHoverSliderItem
            img={item.img}
            title={item.title}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default NoHoverSlider;
