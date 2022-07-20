import React from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Breadcrumb from "../../components/filter/breadcrumb/breadcrumb";
import Home_Product_detail from "../../components/carousel/home_product_carousel/home_product_detail";
import Product_detail_tab from "../../components/tab/product_detail/product_detail_tab";
import { Rocket, CreditCard, MessageCircle2 } from "tabler-icons-react";
import Product_details from "../../components/carousel/product_detail/product_detail";

const Product_detail = ({ product }) => {
  return (
    <div>
      <Header />
      <div className="p-[30px]">
        <Breadcrumb />
      </div>
      <div className="w-[1200px]">
        <div clasName="w-[600px]">
          <Product_details />
        </div>
        <div className="w-[600px]">test</div>
      </div>
      <Footer />
    </div>
  );
};

export default Product_detail;
