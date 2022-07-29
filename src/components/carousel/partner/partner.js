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
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
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
    <div className="max-w[1370px] mx-auto">
      <h2 className="text-center">Хамтрагч байгууллагууд</h2>
      <Slider {...settings}>
        {brandList.map((row, index) => (
          <div className="w-full flex  justify-evenly">
            <div key={row.id} class="w-[300px] px-[20px] ">
              <div className="h-auto w-full">
                <div className="flex flex-col">
                  <div className="w-full relative">
                    <div className="w-full">
                      <img
                        className="h-[150px] w-[450px] w-full object-cover"
                        src={`${cdnUrl}/${row.link}`}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Partner;
