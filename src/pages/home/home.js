import React from "react";
import "./home.css";
import Header from "../../components/header/header";
import Home_banner from "../../components/carousel/home_banner/home_banner";
import Home_category from "../../components/carousel/home_category/home_category";
import Home_mini_banner from "../../components/banner/home_banner/home_banner";
import Home_product_carousel from "../../components/carousel/home_product_carousel/home_product_carousel";
import Home_banner_1 from "../../components/carousel/home_banner/home_banner_1";
import Home_news from "../../components/carousel/home_news/home_news";
import Partner from "../../components/carousel/partner/partner";

const Home = () => {
  return (
    <div className="Home_container">
      <Header />
      <Home_banner />
      <div className="Home_category">
        <Home_category />
      </div>
      <div className="Home_banner">
        <Home_mini_banner />
      </div>
      <div>
        <Home_product_carousel />
      </div>
      <div className="Home_banner1">
        <Home_banner_1 />
      </div>
      <div>
        <Home_product_carousel />
      </div>
      <div className="Home_news">
        <Home_news />
      </div>
      <div className="Home_news">
        <Partner />
      </div>
    </div>
  );
};

export default Home;
