import React, { useEffect, useState } from "react";
import axios from "axios";
import { cdnUrl } from "../../cdnUrl";
import "./delgets.css";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Checkbox from "../../components/filter/checkbox/checkbox";
import Pagination_detail from "../../components/filter/pagination/pagination";

import "./delgets.css";
import Product_detail from "../product_detail/product_detail";
const Home = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [seeProduct, setSeeProducts] = useState("");
  const [pagination, setPagination] = useState({});
  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const { data } = await axios.get("/product");
      setProduct(data.result);
      setPagination(data.pagination);
      setLoading(false);
    };
    getProduct();
  }, []);

  const getProductById = async (id) => {
    try {
      setLoading(true);
      console.log(seeProduct);
      const { data } = await axios.post(
        `http://localhost:3001/api/productAngilal/${id}`
      );
      setProduct(data.result);
      setLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <Header getProductById={(id) => getProductById(id)} />
      <div
        class="relative max-w-[1400px] mx-auto md:flex p-[40px]"
        data-dev-hint="container"
      >
        <aside
          id="test"
          class="bg-white-800 text-white-100 md:w-64 w-3/4 space-y-6 pt-6 px-0 absolute inset-y-0 left-0 transform md:relative md:translate-x-0 transition duration-200 ease-in-out  md:flex md:flex-col md:justify-between overflow-y-auto 
         hidden sm:hidden md:flex"
          data-dev-hint="test; px-0 for frameless; px-2 for visually inset the navigation"
        >
          <div>
            <Checkbox
              getProductById={(id) => getProductById(id)}
              seeProducts={setSeeProducts}
            />
          </div>
        </aside>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-2 m-4">
          {product.length !== 0 &&
            product?.map((item, index) => (
              <div className="h-auto w-full bg-[#ddd]">
                <div className="border flex flex-col">
                  <div className="w-full relative">
                    <div className="flex flex-row">
                      <div className="h-[30px] w-[30px] absolute mt-[8px] ml-[8px]">
                        <img
                          className="h-[350px] max-h-[100%]  w-auto object-cover"
                          src={`${cdnUrl}/${item?.brand?.link}`}
                        />
                      </div>
                      {item.offer ? (
                        <div className="absolute mt-[8px] right-0 mr-[8px] text-white border-[2px] bg-[red] border-[red] px-[10px] py-[3px] rounded-md bg-[#fff] text-[12px]">
                          <h1 className="font-bold">
                            {item.offer && item.offer + "%"}
                          </h1>
                        </div>
                      ) : (
                        <div className="absolute mt-[8px] right-0 mr-[8px] border-[2px] border-[red] px-[10px] py-[3px] rounded-md bg-[#fff] text-[12px]">
                          <p>шинэ</p>
                        </div>
                      )}
                    </div>
                    <div className="w-full">
                      <img
                        className="h-[350px] max-h-[100%]  w-full object-cover"
                        src={`${cdnUrl}/${item.avatar}`}
                      />
                    </div>
                  </div>
                  <div className="bg-[#fff] flex flex-col py-2 px-[8px]">
                    <div>
                      <h2 className="font-bold text-[14px] text-[#000] text-[#444444]">
                        {item.name}
                      </h2>
                      <h4 className="text-[11px] text-[ #666666]">product</h4>
                    </div>
                    <div className="flex w-full items-between justify-between">
                      <p
                        className={`font-bold py-4 text-[#333333] text-[14px] ${
                          item.offer && "line-through"
                        }`}
                      >
                        {item.price} ₮
                      </p>
                      <p className="font-bold py-4 text-[#333333] text-[14px] text-red-500 ">
                        {item.offer &&
                          item.price - (item.price * item.offer) / 100 + "₮"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className="flex justify-center">
        <Pagination_detail total={pagination.pageCount} />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
