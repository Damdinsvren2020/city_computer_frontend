import React, { useEffect, useState } from "react";
import axios from "axios";
import { cdnUrl } from "../../../cdnUrl";
const Home_banner = () => {
  const [picturesList, setPictureList] = useState([]);
  useEffect(() => {
    const getBanner_image = async () => {
      const { data } = await axios.get("/bannerimages");
      setPictureList(data.result);
    };
    getBanner_image();
  }, []);
  return (
    <div>
      {picturesList.map(
        (row) =>
          row.orders === 3 && (
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
  );
};

export default Home_banner;
