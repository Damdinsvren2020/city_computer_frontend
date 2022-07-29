import React from "react";
import Header from "../../components/header/header";
import Homebanner from "../../components/carousel/home_banner/home_banner";
import Homecategory from "../../components/carousel/home_category/home_category";
import Homeminibanner from "../../components/banner/home_banner/home_banner";
import Homeproductcarousel from "../../components/carousel/home_product_carousel/home_product_carousel";
import News from "../../components/carousel/home_news/home_news";
// import Homebanner1 from "../../components/carousel/home_banner/home_banner_1";
import Partner from "../../components/carousel/partner/partner";
import Footer from "../../components/footer/footer";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="mt-[20px]">
        <Homebanner />
      </div>
      <div className="mt-[20px]">
        <Homecategory />
      </div>
      <div className="mt-[20px]">
        <Homeminibanner />
      </div>
      <div className="mt-[20px]">
        <Homeproductcarousel />
      </div>
      <div className="mt-[20px]">
        <News />
      </div>
      <div className="mt-[20px]">
        <Partner />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
