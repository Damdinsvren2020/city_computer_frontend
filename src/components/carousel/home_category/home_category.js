import React from "react";
import "./home_category.css";
import Slider from "react-slick";
import Category_1 from "../../../images/category/display_card.png";
import Category_2 from "../../../images/category/gaming_latop.png";
import Category_3 from "../../../images/category/gaming_setup.png";
import Category_4 from "../../../images/category/ram_disk.png";
import Category_5 from "../../../images/category/ssd-hard.png";
import Category_6 from "../../../images/category/tejeeliin_blok.png";

const Home_category = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="home_category_container">
      <Slider className="home_category_slider" {...settings}>
        <div>
          <img src={Category_1} alt="Category_1" />
        </div>
        <div>
          <img src={Category_2} alt="Category_2" />
        </div>
        <div>
          <img src={Category_3} alt="Category_3" />
        </div>
        <div>
          <img src={Category_4} alt="Category_4" />
        </div>
        <div>
          <img src={Category_5} alt="Category_5" />
        </div>
        <div>
          <img src={Category_6} alt="Category_5" />
        </div>
      </Slider>
    </div>
  );
};

export default Home_category;
