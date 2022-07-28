import React, { useEffect, useState } from "react";
import axios from "axios";
import { cdnUrl } from "../../../cdnUrl";
const SingleProduct = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getNews = async () => {
      setLoading(true);
      const { data } = await axios.get("/singlenews");
      setNews(data.result);
      setLoading(false);
    };
    getNews();
  }, []);

  return (
    <div className="max-w-[1200px] mx-auto mt-[30px] h-[full">
      <div className="w-full flex">
        <div className="w-[1100px] ml-[20px] h-[500px]">
          {news.map((row, index) => (
            <div>
              <img
                className="w-[450px] h-[350px] object-cover"
                src={`${cdnUrl}/${row.link}`}
              />
              <h2>{row.name}</h2>
              <h2>{row.description}</h2>
            </div>
          ))}
        </div>
        <div className="w-[100px] h-[500px] ml-[10px] scroll-smooth hover:scroll-auto">
          <div className="pt-[15px] mb-[30px] bg-[white] w-[380px] sm:block">
            <h5>Сүүлд нэмэгдсэн</h5>
            <div className="flex mt-[20px] sm-hidden md-hidden">
              <div>
                <img
                  className="w-[150px] h-[80px]"
                  src="https://cdn5.shoppy.mn/img/128771/80x60xwebp/naadam_niitlel-04.jpg?h=762357f34abced47a3a7de51413b114615adb922"
                />
              </div>
              <div>
                <h2 className="">2022/07/06</h2>
                <h2>WhyNaadam? | Монголчуудын ялгарах үндэсний брэнд Наадам</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
