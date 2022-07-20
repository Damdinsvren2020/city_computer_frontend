import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "axios";
import { cdnUrl } from "../../../cdnUrl";

const Home_category = () => {
  const [angilal, setAngilal] = useState([]);
  const [picturesList, setPictureList] = useState([]);

  useEffect(() => {
    const getBanner = async () => {
      const { data } = await axios.get("/angilal");
      setAngilal(data.data);
    };
    getBanner();
  }, []);
  useEffect(() => {
    const getBanner_image = async () => {
      const { data } = await axios.get("/bannerimages");
      setPictureList(data.result);
    };
    getBanner_image();
  }, []);
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
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
    <div class="max-w-[1370px] mx-auto">
      <div className="w-full h-full">
        {picturesList.map(
          (row) =>
            row.orders === 2 && (
              <div key={row.id}>
                <img
                  class="h-full w-full object-cover	"
                  src={`${cdnUrl}/${row.thumbnail}`}
                  alt=""
                />
              </div>
            )
        )}
      </div>
      <div class="w-full flex  justify-evenly">
        <Slider {...settings}>
          {angilal.map((row) => (
            <div key={row.id} class="w-[300px] px-[20px] ">
              <div className="h-auto w-full bg-[#ddd]">
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
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Home_category;
