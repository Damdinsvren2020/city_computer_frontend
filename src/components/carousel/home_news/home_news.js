import React from "react";
import "./home_news.css";
import News from "../../card/news/news";
import Slider from "react-slick";

const Home_news = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div className="Home_news_container">
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
