import React, { useState } from "react";

const Wishlist = () => {
  return (
    <div class="p-10 w-[850px]  h-[400px] bg-white border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <div className="jusify-center">
        <div className="justify-center flex">
          <img
            className="w-[150px] h-[150px]"
            src="https://shoppy.mn/5802883e67028c24304a683c22304275.svg"
          />
        </div>
        <h4 className="text-center">
          Таны "Миний сонголт" жагсаалт хоосон байна
        </h4>
        <p className="text-center">
          Та өөрт таалагдсан бараагаа хүслийн жагсаалтад хийснээр хямдрал
          зарлагдах үед нь цаг алдалгүй мэдээлэл авах, бусадтай хуваалцах
          боломжтой
        </p>
      </div>
    </div>
  );
};

export default Wishlist;
