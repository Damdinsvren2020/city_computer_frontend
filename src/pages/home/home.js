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
      <div className="mt-[5px]">
        <Homebanner />
      </div>
      <div>
        <Homecategory />
      </div>
      <div>
        <Homeminibanner />
      </div>
      <div>
        <Homeproductcarousel />
      </div>
      <div className="mt-[10px]">
        <News />
      </div>
      <div>
        <Partner />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
