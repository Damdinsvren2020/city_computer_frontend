import React from "react";
import { HeartOutlined } from "@ant-design/icons";

const Home_Product_detail = ({ detail, addToCart, addToWishList }) => {
  const style = {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    borderRadius: 3,
    border: 0,
    color: "white",
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  };

  return (
    <div className="w-[57%]">
      <h1 className="font-sizep-[14px]">{detail.name}</h1>
      <div className="flex mt-15 flex-col">
        <p>Брэнд: {detail?.brand?.name}</p>
        <b style={{ color: "#690" }}>{detail.quantity !== 0 && "Байгаа"}</b>
        SKU:{detail.SKU}
      </div>
      {detail.offer ? (
        <div className="flex mt-[19px]">
          <h4 style={{ color: "#690" }}>
            {Math.round(detail.price - (detail.price * detail.offer) / 100)}₮
          </h4>
          <del>{detail.price}₮</del>
        </div>
      ) : (
        <div className="flex mt-[19px]">
          <h4 style={{ color: "#690" }}>{detail.price}₮</h4>
        </div>
      )}

      <div className="flex">
        <div>
          <button
            onClick={addToCart}
            type="button"
            class="inline-block  px-6 py-2.5 bg-gray-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out"
          >
            Сагсанд нэмэх
          </button>
        </div>
        <div className="ml-[10px]">
          <button
            type="button"
            class="inline-block  px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Худалдаж авах
          </button>
        </div>
        <div onClick={addToWishList} className="ml-[12px] mt-[10px] flex cursor-pointer">
          <HeartOutlined />
        </div>
      </div>
      <div className="mt-[20px]">
        <hr />
      </div>
    </div>
  );
};

export default Home_Product_detail;
