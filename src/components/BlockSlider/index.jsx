import "./style.scss";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
import BlockSliderItem from "../BlockSliderItem";

function BlockSlider({ title, subText, data, slidesPerView, navigation = true }) {
  return (
    <Swiper
      className="block-slider"
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
          <BlockSliderItem
            date={item.date}
            img={item.img}
            price={item.price}
            title={item.title}
            location={item.location}
            time={item.time}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default BlockSlider;
