import "./style.scss";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
import NoHoverSliderItem from "../NoHoverSliderItem";

function NoHoverSlider({
  title,
  subText,
  data,
  slidesPerView,
  navigation = true,
}) {
  return (
    <div data-aos="fade-up">
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
    </div>
  );
}

export default NoHoverSlider;
