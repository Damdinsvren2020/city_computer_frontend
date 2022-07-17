import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "axios";
import { cdnUrl } from "../../../cdnUrl";

const Home_banner = () => {
  const [picturesList, setPictureList] = useState([]);
  useEffect(() => {
    const getBanner = async () => {
      const { data } = await axios.get("banner/getAll");
      setPictureList(data.data);
    };
    getBanner();
  }, []);
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
        {picturesList.map((row) => (
          <div key={row.id}>
            <img
              class="h-full w-full object-cover	"
              src={cdnUrl + row.link}
              alt=""
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Home_banner;
