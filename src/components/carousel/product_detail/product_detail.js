import React, { useEffect, useState } from "react";
import axios from "axios";
import { cdnUrl } from "../../../cdnUrl";
import Slider from "react-slick";
import "./product_detail.css";
import ReactImageMagnify from "react-image-magnify";
// import DemoImage from "./50PUT8215-98.jpeg";
// import ZoomImage from "./1200px.png";

const Product_detail = ({ productImages }) => {

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
            <div className="">
              <ReactImageMagnify
                {...{
                  smallImage: {
                    alt: "Wristwatch by Ted Baker London",
                    isFluidWidth: true,
                    src: `${cdnUrl}/${productImages?.imagesProduct[item]}`,
                    width: 100,
                    height: 250,
                  },
                  largeImage: {
                    src: `${cdnUrl}/${productImages?.imagesProduct[item]}`,
                    width: 1200,
                    height: 1800,
                  },
                }}
              />
            </div>
          );
        }}
        dotsClass="slick-dots custom-indicator"
      >
        {/* {picturesList.map((item) => ( */}

        {/* <ReactImageMagnify
              {...{
                smallImage: {
                  alt: "Wristwatch by Ted Baker London",
                  isFluidWidth: true,
                  src: `${cdnUrl}/${item.thumbnail}`,
                },
                largeImage: {
                  src: `${cdnUrl}/${item.thumbnail}`,
                  width: 1200,
                  height: 1800,
                },
              }}
            /> */}

        {/* ))} */}

        {productImages?.imagesProduct?.map(
          (row) => (
            <div key={row._id}>
              <img
                class="h-full w-full object-cover	"
                src={`${cdnUrl}/${row}`}
                alt=""
              />
            </div>
          )
        )}
      </Slider>
      {/* <div className="w-[342px] h-[512px]">
        <ReactImageMagnify
          {...{
            smallImage: {
              alt: "Wristwatch by Ted Baker London",
              isFluidWidth: true,
              src: DemoImage,
            },
            largeImage: {
              src: ZoomImage,
              width: 1200,
              height: 1800,
            },
          }}
        />
      </div> */}
    </div>
  );
};

export default Product_detail;
