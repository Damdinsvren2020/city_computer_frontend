import React, { useEffect, useState } from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import { useParams, useNavigate } from "react-router-dom";
import NewsCarousel from "../../components/carousel/home_news/home_news";
import NewsDetail from "../../components/card/news/news";
import axios from "axios";

const News = () => {
  const [singleNews, setSingleNews] = useState([]);
  const [newsID, setNewsId] = useState("");
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      const getNEws = async () => {
        const { data } = await axios.get("/singlenews/" + id);
        if (data.success) {
          setSingleNews(data.data);
          setNewsId(data.data._id);
        }
      };
      getNEws();
    }
  }, [id]);

  return (
    <div>
      <Header />
      <div className="max-w-[1200px] mx-auto mt-[30px]">
        <div className="w-full flex">
          <div className="w-[850px] h-[500px]">
            {/* <NewsCarousel detail={singleNews} /> */}
            <NewsDetail newsDetail={singleNews} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default News;
