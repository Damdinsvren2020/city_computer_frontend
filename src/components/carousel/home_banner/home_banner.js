import React from "react";
import "./home_banner.css";
import Slider from "react-slick";
import Banner_1 from "../../../images/tom1.jpg";
import Banner_2 from "../../../images/tomapple.jpg";
import Banner_3 from "../../../images/tomsamsung.jpg";

const Home_banner = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="home_banner_container">
      <Slider {...settings}>
        <div>
          <img src={Banner_2} alt="Banner_1" />
        </div>
        <div>
          <img src={Banner_1} alt="Banner_2" />
        </div>
        <div>
          <img src={Banner_3} alt="Banner_3" />
        </div>
      </Slider>
    </div>
  );
};

export default Home_banner;
