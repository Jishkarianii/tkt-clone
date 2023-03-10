import "./style.scss"

function NoHoverSliderItem({ img, title }) {
  return (
    <div className="no-hover-slider-item">
        <div className="bg"></div>
        <img src={img} alt={title} />
        <p>{title}</p>
    </div>
  )
}

export default NoHoverSliderItem