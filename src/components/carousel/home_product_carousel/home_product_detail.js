import React from "react";
import { HeartOutlined } from "@ant-design/icons";
import { ShareSocial } from "react-share-social";

const Home_Product_detail = () => {
  const style = {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    borderRadius: 3,
    border: 0,
    color: "white",
    padding: "0 30px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  };
  return (
    <div class="p-[20px]">
      <div class="w-[1000px]">
        <div>
          <div className="flex gap-[1.75rem]">
            <div>
              <img
                className="object-fit h-[350px] w-[350px]"
                src="https://bestcomputers.mn/uploads/product-image-20/450c257db605aec72be62d293d0eaf36.jpg"
              />
            </div>
            <div className="w-[57%]">
              <h1 className="font-sizep-[14px]">
                ASUS ROG STRIX SCAR G17 G733ZW-LL115W Intel core i9-12900H, DDR5
                4800Mhz 16GB RAM, 1TB M.2 NVMe PCIe 4.0 SSD, NV RTX3070Ti 8Gb,
                240Hz WQHD IPS 17.3", Win11 home
              </h1>
              <div className="flex mt-15">
                <p>
                  Брэнд: <a href="#"></a>
                </p>
                <b style={{ color: "#690" }}>Байгаа</b>
                SKU:23074
              </div>
              <div className="flex mt-[19px]">
                <h4 style={{ color: "#690" }}>8,998,000₮</h4>
                <del>8,338,000₮</del>
              </div>
              <div className="flex">
                <div>
                  <button
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
                <div className="ml-[12px] mt-[10px] flex">
                  <HeartOutlined />
                  <h2>Хүсэл нэмэх</h2>
                </div>
              </div>
              <div className="mt-[20px]">
                <hr />
              </div>
              <div>
                <h2 className="mt-[20px]">Барааны код:3900</h2>
              </div>
              {/* <ShareSocial
                style={style}
                url="url_to_share.com"
                socialTypes={["facebook", "twitter", "reddit", "linkedin"]}
              /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home_Product_detail;
