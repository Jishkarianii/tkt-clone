import "./style.scss";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

function PromoSlider({ data }) {
  return (
    <div data-aos="fade">
      <Swiper
        className="promo-slider"
        simulateTouch={false}
        speed={500}
        loop={true}
        navigation={true}
        modules={[Navigation]}
      >
        {data.map((item, idx) => (
          <SwiperSlide key={idx}>
            <img src={item.img} alt="promo" />
          </SwiperSlide>
        ))}
        <svg className="curve" viewBox="0 0 180 72">
          <path d="M180,0v72H0c16.6,0,30-13.4,30-30c0-8.3,3.3-15.8,8.8-21.2C44.2,15.3,51.7,12,60,12h108C174.6,12,180,6.6,180,0z" />
        </svg>
        <div className="dot"></div>
      </Swiper>
    </div>
  );
}

export default PromoSlider;
