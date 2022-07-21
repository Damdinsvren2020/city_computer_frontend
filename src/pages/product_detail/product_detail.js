import React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
// import Breadcrumb from "../../components/filter/breadcrumb/breadcrumb";
import Home_Product_detail from "../../components/carousel/home_product_carousel/home_product_detail";
import Product_detail_tab from "../../components/tab/product_detail/product_detail_tab";
// import { Rocket, CreditCard, MessageCircle2 } from "tabler-icons-react";
import Product_details from "../../components/carousel/product_detail/product_detail";
// import Product_image_gallery from "../../components/carousel/product_image_gallery/product_image_gallery";
import Singular_Product from "../../components/carousel/singular_product/singular_product";

const Product_detail = ({ product }) => {
  return (
    <div>
      <Header />
      <div className="max-w-[1200px] mx-auto mt-[30px]">
        <div className="w-full flex">
          <div className="w-[500px] h-[500px]">
            <Product_details />
            {/* <Product_image_gallery /> */}
          </div>
          <div className="w-[850px] h-[500px] ">
            <Home_Product_detail />
          </div>
        </div>
        <Product_detail_tab />
        <Singular_Product />
      </div>
      <Footer />
    </div>
  );
};

export default Product_detail;
