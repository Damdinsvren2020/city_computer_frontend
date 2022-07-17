import React from "react";
import Slider from "react-slick";

import axios from "axios";
import { cdnUrl } from "../../../../cdnUrl";
const Online_zahialga_product = () => {
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
    <div>
      <div class="mt-4">
        <div>
          <div>
            <img src="https://citycomputer.mn/wp-content/uploads/2021/10/245166987_397598101864996_7610874419585783863_n.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Online_zahialga_product;
