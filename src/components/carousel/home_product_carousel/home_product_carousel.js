import React, { useEffect, useState } from "react";
import axios from "axios";
import { cdnUrl } from "../../../cdnUrl";
import Slider from "react-slick";
const Home_Product = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const getProduct = async () => {
      const { data } = await axios.get("/product");
      setProduct(data.result);
    };
    getProduct();
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
      <h2 class="m-2.5 text-red-600 font-bold	">
        ЗӨВХӨН энэ 7 хоногт онлайнаар хямдралтай
      </h2>
      <hr class="bg-red-800		" />
      <Slider {...settings}>
        {product.length !== 0 &&
          product?.map((item, index) => (
            <div className="h-auto w-full bg-[#ddd]">
              <div className="border flex flex-col">
                <div className="w-full relative">
                  <div className="flex flex-row">
                    <div className="h-[30px] w-[30px] absolute mt-[8px] ml-[8px]">
                      <img
                        className="h-[350px] max-h-[100%]  w-auto object-cover"
                        src={`${cdnUrl}${item?.brand?.link}`}
                      />
                    </div>
                    <div className="absolute mt-[8px] right-0 mr-[8px] border-[2px] border-[red] px-[10px] py-[3px] rounded-md bg-[#fff] text-[12px]">
                      <p>шинэ</p>
                    </div>
                  </div>
                  <div className="w-full">
                    <img
                      className="h-[350px] max-h-[100%] w-full object-cover"
                      src={`${cdnUrl}/${item.avatar}`}
                    />
                  </div>
                </div>
                <div className="bg-[#fff] flex flex-col py-2 px-[8px]">
                  <div>
                    <h2 className="font-bold text-[14px] text-[#000] text-[#444444]">
                      {item.name}
                    </h2>
                    <h4 className="text-[11px] text-[ #666666]">product</h4>
                  </div>
                  <p className="font-bold py-4 text-[#333333] text-[14px]">
                    {item.price} ₮
                  </p>
                </div>
              </div>
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default Home_Product;
