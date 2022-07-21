import React, { Component } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

import ProductImageMagnify from "../../magnify/magnify";

const Product_image_gallery = () => {
  function myRenderItem({ props }) {
    return <ProductImageMagnify {...props} />;
  }
  const properties = {
    thumbnailPosition: "left",
    useBrowserFullscreen: false,
    showPlayButton: false,
    renderItem: myRenderItem,
    items: [
      {
        original: "https://placeimg.com/640/480/any/1",
        thumbnail: "https://placeimg.com/250/150/any/1",
      },
      {
        original: "https://placeimg.com/640/480/any/2",
        thumbnail: "https://placeimg.com/250/150/any/2",
      },
      {
        original: "https://placeimg.com/640/480/any/3",
        thumbnail: "https://placeimg.com/250/150/any/3",
      },
    ],
  };

  return <ImageGallery {...properties} />;
};

export default Product_image_gallery;
