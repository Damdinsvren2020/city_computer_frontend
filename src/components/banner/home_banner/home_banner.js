import React from "react";
import Banner_image from "../../../images/category/1-2.jpeg";
import "./home_banner.css";
const Home_banner = () => {
  return (
    <div className="home_banner">
      <img src={Banner_image} alt-="image" />
    </div>
  );
};

export default Home_banner;
