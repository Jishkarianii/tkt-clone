import "./style.scss";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
import BlockSliderItem from "../BlockSliderItem";

function BlockSlider({
  title,
  subText,
  data,
  slidesPerView,
  navigation = true,
}) {
  return (
    <div data-aos="fade-up">
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
            <div data-aos="fade-up" data-aos-delay={idx * 200}>
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
    </div>
  );
}

export default BlockSlider;
