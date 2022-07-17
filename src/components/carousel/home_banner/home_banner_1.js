import React from "react";
import Slider from "react-slick";

const Home_banner_1 = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div class="p-[40px]">
      <h2 style={{ textAlign: " center " }}>Цахим тасалбар</h2>
      <Slider {...settings}>
        <div>
          <img
            class="w-full h-full object-contain"
            src="https://cdn5.shoppy.mn/img/124014/821x0xwebp/event-ice-top.jpg?h=589e2d069506767096a79d94dce78b0f1707386c"
            alt="Banner_1"
          />
        </div>
        <div>
          <img
            class="w-full h-full object-contain"
            src="https://cdn5.shoppy.mn/img/121350/437x0xwebp/event-ibiza.jpg?h=8beaa660274174c03714227ad1f3b47706fb116c"
            alt="Banner_2"
          />
        </div>
        <div>
          <img
            class="w-full h-full object-contain"
            src="https://cdn5.shoppy.mn/img/125421/437x0xwebp/event-nft.jpg?h=8beaa660274174c03714227ad1f3b47706fb116c"
            alt="Banner_3"
          />
        </div>
        <div>
          <img
            class="w-full h-full object-contain"
            src="https://cdn5.shoppy.mn/img/120219/437x0xwebp/hewtee-event-banner-pt.jpg?h=8beaa660274174c03714227ad1f3b47706fb116c"
            alt="Banner_3"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Home_banner_1;
