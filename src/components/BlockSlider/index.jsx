import "./style.scss";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
import BlockSliderItem from "../BlockSliderItem";

function BlockSlider({ title, data }) {
  return (
    <Swiper
      className="block-slider"
      spaceBetween={20}
      slidesPerView={3}
      simulateTouch={false}
      speed={500}
      navigation={true}
      modules={[Navigation]}
    >
      <div className="head">
        <h3>{title}</h3>
        <p>ყველა</p>
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
