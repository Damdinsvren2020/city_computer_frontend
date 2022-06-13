import React from "react";
import "./partner.css";
import Slider from "react-slick";

const Partner = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
  };
  return (
    <div className="Partner_container">
      <h2 style={{ textAlign: " center " }}>Шилдэг борлуулалттай брэнд</h2>
      <Slider {...settings}>
        <div>
          <img
            src="https://citycomputer.mn/wp-content/uploads/2021/10/sumsung0101-300x169.png"
            alt="Banner_1"
          />
        </div>
        <div>
          <img
            src="https://citycomputer.mn/wp-content/uploads/2021/10/dell01-300x169.png"
            alt="Banner_2"
          />
        </div>
        <div>
          <img
            src="https://citycomputer.mn/wp-content/uploads/2021/10/lenove-300x169.png"
            alt="Banner_3"
          />
        </div>
        <div>
          <img
            src="https://citycomputer.mn/wp-content/uploads/2021/10/aser0102-1-300x169.png"
            alt="Banner_3"
          />
        </div>
        <div>
          <img
            src="https://citycomputer.mn/wp-content/uploads/2021/10/aser0102-1-300x169.png"
            alt="Banner_3"
          />
        </div>
        <div>
          <img
            src="https://citycomputer.mn/wp-content/uploads/2021/10/aser0102-1-300x169.png"
            alt="Banner_3"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Partner;
