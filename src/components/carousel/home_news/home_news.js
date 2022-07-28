import React, { useEffect, useState } from "react";
import axios from "axios";
import { cdnUrl } from "../../../cdnUrl";
import "./home_news.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const Home_news = () => {
  const [newslist, setNewslist] = useState([]);
  useEffect(() => {
    const getnewlist = async () => {
      const { data } = await axios.get("/news");
      setNewslist(data.result);
    };
    getnewlist();
  }, []);
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
      <div className="w-full">
        {/* <h2 className="ml-[10px]">Мэдээ мэдээлэл</h2> */}
      </div>
      <Slider {...settings}>
        {newslist.map((row, index) => (
          <Link key={index} to={"/S/" + row.name}>
            <div>
              <img
                className="w-[450px] h-[350px] object-cover"
                src={`${cdnUrl}/${row.link}`}
              />
              <h2>{row.name}</h2>
              {/* <h2>{row.description}</h2> */}
            </div>
          </Link>
        ))}
      </Slider>
    </div>
  );
};

export default Home_news;
