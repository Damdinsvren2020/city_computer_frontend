import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "axios";
import { cdnUrl } from "../../../cdnUrl";

const Home_category = () => {
  const [angilal, setAngilal] = useState([]);
  useEffect(() => {
    const getBanner = async () => {
      const { data } = await axios.get("/angilal");
      console.log("daaaa", data);
      setAngilal(data.data);
    };
    getBanner();
  }, []);
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
    <div class="p-[40px]">
      <Slider {...settings}>
        {angilal.map((row) => (
          <div key={row.id}>
            <img class="object-contain" src={cdnUrl + row.link} alt="" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Home_category;
