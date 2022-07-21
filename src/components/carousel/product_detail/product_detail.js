import React, { useEffect, useState } from "react";
import axios from "axios";
import { cdnUrl } from "../../../cdnUrl";
import Slider from "react-slick";
import "./product_detail.css";

const Product_detail = () => {
  const [picturesList, setPictureList] = useState([]);
  useEffect(() => {
    const getBanner_image = async () => {
      const { data } = await axios.get("/bannerimages");
      setPictureList(data.result);
    };
    getBanner_image();
  }, []);
  return (
    <div style={{ margin: "30px" }} className="carousel">
      <Slider
        autoplay
        autoplaySpeed={2000}
        dots
        initialSlide={2}
        infinite
        customPaging={(item) => {
          return (
            <div>
              <img
                src={`${cdnUrl}/${picturesList[item].thumbnail}`}
                alt="image"
                style={{
                  width: "50px",
                  height: "50px",
                  objectFit: "cover",
                }}
              />
            </div>
          );
        }}
        dotsClass="slick-dots custom-indicator"
      >
        {picturesList.map((item) => (
          <div>
            <img
              src={`${cdnUrl}/${item.thumbnail}`}
              alt=""
              style={{ width: "100%", height: "40vh" }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Product_detail;
