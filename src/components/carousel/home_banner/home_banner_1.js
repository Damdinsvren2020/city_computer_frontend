import React, { useEffect, useState } from "react";
import axios from "axios";
import { cdnUrl } from "../../../cdnUrl";
import Slider from "react-slick";

const Home_banner_1 = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  const [picturesList, setPictureList] = useState([]);
  useEffect(() => {
    const getBanner_image = async () => {
      const { data } = await axios.get("/bannerimages");
      setPictureList(data.result);
    };
    getBanner_image();
  }, []);
  return (
    <div class="p-[40px]">
      <h2 style={{ textAlign: " center " }}>Цахим тасалбар</h2>
      <Slider {...settings}>
        {picturesList.map(
          (row) =>
            row.orders === 4 && (
              <div key={row.id}>
                <img
                  class="h-full w-full object-cover	"
                  src={`${cdnUrl}/${row.thumbnail}`}
                  alt=""
                />
              </div>
            )
        )}
      </Slider>
    </div>
  );
};

export default Home_banner_1;
