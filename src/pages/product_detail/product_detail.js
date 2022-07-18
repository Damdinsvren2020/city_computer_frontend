import React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Breadcrumb from "../../components/filter/breadcrumb/breadcrumb";
import Home_Product_detail from "../../components/carousel/home_product_carousel/home_product_detail";
import Product_detail_tab from "../../components/tab/product_detail/product_detail_tab";
import { Rocket, CreditCard, MessageCircle2 } from "tabler-icons-react";

const Product_detail = () => {
  return (
    <div>
      <Header />
      <div className="p-[30px]">
        <Breadcrumb />
      </div>
      <div className="ml-10px] mr-[10px]">
        <div className="flex">
          <div class="w-[1000px]">
            <Home_Product_detail />
            <div>
              <Product_detail_tab />
            </div>
          </div>
          <div className="w-[400px]">
            <div className="w-[250px] h-[210px] bg-[#f1f1f1] p-[20px]">
              <div className="flex">
                <Rocket size={30} strokeWidth={1} color={"#bf404e"} />
                <h2 className="text-justify">Үнэгүй хүргэлт</h2>
                <h2 className="text-justify">100,000₮ дээш бараанд</h2>
              </div>
              <div className="flex">
                <CreditCard size={30} strokeWidth={1} color={"#bf404e"} />
                <h2 className="text-justify">Онлайн зээл</h2>
                <h2 className="text-justify">Хаан, Хас, Голомт банкны</h2>
              </div>
              <div className="flex">
                <MessageCircle2 size={30} strokeWidth={1} color={"#bf404e"} />
                <h2 className="text-justify">Онлайн туслах</h2>
                <h2 className="text-justify">Утас: 7575-6677</h2>
              </div>
            </div>
            <div>
              <img
                className="w-[250px] h-[250px] object-contain"
                src="https://bestcomputers.mn/uploads/promotion/6da654e9d8898704d0ac9894a7b164916d87de24.png"
              />
            </div>
            <div className="w-[250px] h-[250px] bg-[#ddd]">
              <div className="border flex flex-col">
                <div className="w-full h-[30px] relative">
                  <h2>Санал болгох</h2>
                </div>
              </div>
              <div className="w-[250px] h-[250px] bg-[#ddd]">
                <div className="border flex flex-col">
                  <div className="w-full relative">
                    <div className="flex flex-row">
                      <div className="h-[30px] w-[30px] absolute mt-[8px] ml-[8px]">
                        <img
                          className="h-[350px] max-h-[100%]  w-auto object-cover"
                          src="https://bestcomputers.mn/uploads/cover/86694b4d2936643950eea412b4a1f7ac.jpg"
                        />
                      </div>
                      <div className="absolute mt-[8px] right-0 mr-[8px] border-[2px] border-[red] px-[10px] py-[3px] rounded-md bg-[#fff] text-[12px]">
                        <p>шинэ</p>
                      </div>
                    </div>
                    <div className="w-full">
                      <img
                        className="h-[350px] max-h-[100%] w-full object-cover"
                        src="https://bestcomputers.mn/uploads/cover/86694b4d2936643950eea412b4a1f7ac.jpg"
                      />
                    </div>
                  </div>
                  <div className="bg-[#fff] flex flex-col py-2 px-[8px]">
                    <div>
                      <h2 className="font-bold text-[14px] text-[#000] text-[#444444]">
                        name
                      </h2>
                      <h4 className="text-[11px] text-[ #666666]">product</h4>
                    </div>
                    <p className="font-bold py-4 text-[#333333] text-[14px]">
                      1234567₮
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Product_detail;
