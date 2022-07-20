import React, { useEffect, useState } from "react";
// import "./partner.css";
import Slider from "react-slick";
import axios from "axios";
import { cdnUrl } from "../../../cdnUrl";
const Partner = () => {
  const [brandList, setBrandList] = useState([]);
  useEffect(() => {
    const getBrand = async () => {
      const { data } = await axios.get("brand");
      setBrandList(data.data);
    };
    getBrand();
  }, []);
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
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
      <h2 class="text-center text-2xl">Шилдэг борлуулалттай брэнд</h2>
      <Slider {...settings}>
        {brandList.map((row) => (
          <div key={row.id}>
            <img
              class="h-full w-full object-cover	"
              src={`${cdnUrl}/${row.link}`}
              alt=""
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Partner;
