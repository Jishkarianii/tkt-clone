import "./style.scss";

function Banner({ img }) {
  return (
    <div className="banner" data-aos="fade-left">
      <img src={img} alt="banner" />
    </div>
  );
}

export default Banner;
