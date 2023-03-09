import "./style.scss";

function BlockSliderItem({ date, img, price, title, location, time }) {
  return (
    <div className="block-slider-item" title={title}>
      <div className="date">{date}</div>
      <div className="img-cont">
        <div className="bg"></div>
        <img src={img} alt="promo" />
        <div className="price">{price}</div>
      </div>
      <h4 className="title">{title}</h4>
      <p className="location">{location}</p>
      <p className="time">{time}</p>
    </div>
  );
}

export default BlockSliderItem;
