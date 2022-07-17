import React, { useEffect, useState } from "react";
import axios from "axios";
import { cdnUrl } from "../../../../cdnUrl";
const Delgets = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const getProduct = async () => {
      const { data } = await axios.get("/product");
      setProduct(data.result);
    };
    getProduct();
  }, []);
  return (
    <div class="grid grid-cols-3 gap-4">
      <div class="...">
        {product.length !== 0 &&
          product?.map((item, index) => (
            <div>
              <div class="max-w-2xl mx-auto product_card gap-y-1">
                <div class="bg-white shadow-md rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700 relative">
                  <div class="absolute z-10 right-0 top-[40px]">
                    <div class=" px-2 py-1 bg-[#ED1B24] rounded-[5px] text-center text-white">
                      <p class="font-bold">3232</p>
                    </div>
                  </div>
                  <a href="#">
                    <div class="w-full h-[350px]">
                      <img
                        class="rounded-t-lg w-full h-full object-contain"
                        src={`${cdnUrl}/${item.avatar}`}
                        alt="product image"
                      />
                    </div>
                  </a>
                  <div class="px-5 pb-5">
                    <a href="#">
                      <h3 class="text-gray-900 font-semibold text-xl tracking-tight dark:text-white">
                        {item.name}
                      </h3>
                    </a>
                    <div class="flex items-center justify-between">
                      <span class="text-1xl font-bold  dark:text-white">
                        {item.price} ₮
                      </span>
                      <span class="line-through ">4500000 ₮</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Delgets;
