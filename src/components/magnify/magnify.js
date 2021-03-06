import React, { Component } from "react";

import ReactImageMagnify from "react-image-magnify";

const Magnify = () => {
  return (
    <ReactImageMagnify
      {...{
        smallImage: {
          alt: "Wristwatch by Ted Baker London",
          isFluidWidth: true,
          src: "https://placeimg.com/640/480/any",
        },
        largeImage: {
          src: "https://placeimg.com/640/480/any",
          width: 640,
          height: 480,
        },
        enlargedImagePortalId: "myPortal",
      }}
    />
  );
};

export default Magnify;
