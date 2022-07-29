import React, { useEffect, useState } from "react";
import axios from "axios";
import { cdnUrl } from "../../../cdnUrl";
import { Parser } from "html-to-react";
import { Link } from "react-router-dom";

const SingleProduct = ({ newsDetail }) => {
  const [newslist, setNewslist] = useState([]);
  useEffect(() => {
    const getnewlist = async () => {
      const { data } = await axios.get("/news");
      setNewslist(data.result.reverse().slice(0, 3));
    };
    getnewlist();
  }, []);

  const convertDate = (date) => {
    let convertedDate = date.split("T");
    return convertedDate[0];
  };

  const convertTime = (date) => {
    let convertedDate = date.split("T");
    let convertTime = convertedDate[1].split(".");
    return convertTime[0];
  };

  return (
    <div className="max-w-[1200px] mx-auto mt-[30px] h-[full">
      <div className="w-full flex">
        <div className="w-[1100px] ml-[20px] h-[500px]">
          <div>
            <img
              className="w-[450px] h-[350px] object-cover"
              src={`${cdnUrl}/${newsDetail.link}`}
            />
            {Parser().parse(newsDetail.description)}
          </div>
        </div>
        <div className="w-[100px] h-[500px] ml-[10px] scroll-smooth hover:scroll-auto">
          <h5>Сүүлд нэмэгдсэн</h5>

          <div className="pt-[15px] mb-[30px] bg-[white] w-[380px] sm:block overflow-y-auto h-[600px] ">
            {newslist.map((item, index) => (
              <Link key={index} to={"/S/" + item.name}>
                <div className="flex mt-[15px] sm-hidden md-hidden">
                  <div className="flex ">
                    <img
                      className="w-48 h-48 object-contain"
                      src={`${cdnUrl}/${item.link}`}
                    />
                    <div className="ml-[10px] mt-[35px]">
                      <h2>
                        {convertDate(item.createdAt)}
                        {/* {convertDate(item.createdAt) +
                        "~" +
                        convertTime(item.createdAt)} */}
                      </h2>
                      <h2>{item.name}</h2>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
