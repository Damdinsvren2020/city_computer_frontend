import React from "react";
import "./home_news.css";
import News from "../../card/news/news";
import Slider from "react-slick";

const Home_news = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
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
    <div class="w-full h-full">
      <Slider {...settings}>
        <div>
          <News />
        </div>
        <div>
          <News />
        </div>
        <div>
          <News />
        </div>
        <div>
          <News />
        </div>
      </Slider>
    </div>
  );
};

export default Home_news;
