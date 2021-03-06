import React, { useEffect, useState } from "react";
import axios from "axios";
import { cdnUrl } from "../../../cdnUrl";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const Home_category = () => {
  const [picturesList, setPictureList] = useState([]);
  const [angilal, setAngilal] = useState([]);

  useEffect(() => {
    const getBanner = async () => {
      const { data } = await axios.get("/angilal");
      setAngilal(data.data);
      console.log(data.data);
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
    <div className="max-w-[1370px] mx-auto">
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
      <Slider {...settings}>
        {angilal.map((row, index) => (
          <Link key={index} to={"/D/" + row.name}>
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

export default Home_category;
