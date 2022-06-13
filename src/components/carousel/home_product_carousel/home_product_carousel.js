import React from "react";
import Ticket_product from "../../../components/card/product/ticket_product/ticket_product";
import Slider from "react-slick";

import "./home_product_carousel.css";
const Home = () => {
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
    <div className="Home_product_carousel">
      <Slider {...settings}>
        <div>
          <Ticket_product />
        </div>
        <div>
          <Ticket_product />
        </div>
        <div>
          <Ticket_product />
        </div>
        <div>
          <Ticket_product />
        </div>
        <div>
          <Ticket_product />
        </div>
      </Slider>
    </div>
  );
};

export default Home;
