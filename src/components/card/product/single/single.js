import React, { useEffect, useState } from "react";
import axios from "axios";
import { cdnUrl } from "../../../../cdnUrl";
const SingleProduct = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const { data } = await axios.get("/product");
      setProduct(data.result);
      setLoading(false);
    };
    getProduct();
  }, []);

  return (
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
  );
};

export default SingleProduct;
