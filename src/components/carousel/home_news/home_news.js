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
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };
  return (
    <div class="w-full h-full">
      <div className="w-full">
        <h2 className="text-center">Мэдээ</h2>
      </div>
      <Slider {...settings}>
        {newslist.map((row, index) => (
          <Link key={index} to={"/S/" + row.name}>
            <div className="w-full flex  justify-evenly">
              <div key={row.id} class="w-[300px] px-[20px] ">
                <div className="h-auto w-full">
                  <div className="border flex flex-col">
                    <div className="w-full relative">
                      <div className="w-full">
                        <img
                          className="h-[250px] max-h-[250px] w-full object-cover"
                          src={`${cdnUrl}/${row.link}`}
                        />
                      </div>
                    </div>
                    <div className="bg-[#fff] flex flex-col py-2 px-[8px] flex justify-between">
                      <div>
                        <h2 className="font-bold text-[14px] text-[#000] text-[#444444] text-center">
                          {row.name}
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </Slider>
    </div>
  );
};

export default Home_news;
