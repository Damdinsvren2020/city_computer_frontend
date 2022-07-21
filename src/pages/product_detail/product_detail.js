import React, { useEffect, useState } from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import { useParams } from "react-router-dom";
// import Breadcrumb from "../../components/filter/breadcrumb/breadcrumb";
import Home_Product_detail from "../../components/carousel/home_product_carousel/home_product_detail";
import Product_detail_tab from "../../components/tab/product_detail/product_detail_tab";
// import { Rocket, CreditCard, MessageCircle2 } from "tabler-icons-react";
import Product_details from "../../components/carousel/product_detail/product_detail";
// import Product_image_gallery from "../../components/carousel/product_image_gallery/product_image_gallery";
import Singular_Product from "../../components/carousel/singular_product/singular_product";
import axios from "axios";

const Product_detail = () => {

  const [singleProduct, setSingleProduct] = useState([])
  const [saveSubID, setSaveSubID] = useState('')

  const { name } = useParams()
  useEffect(() => {
    if (name) {
      const getProduct = async () => {
        const { data } = await axios.get("/singleProduct/" + name)
        if (data.success) {
          setSingleProduct(data.result)
          setSaveSubID(data.result?.SubID)
          console.log(data.result.SubID)
        }
      }
      getProduct()
    }
  }, [name])

  // console.log(singleProduct.SubID._id)

  return (
    <div>
      <Header />
      <div className="max-w-[1200px] mx-auto mt-[30px]">
        <div className="w-full flex">
          <div className="w-[500px] h-[500px]">
            <Product_details productImages={singleProduct} />
            {/* <Product_image_gallery /> */}
          </div>
          <div className="w-[850px] h-[500px] ">
            <Home_Product_detail detail={singleProduct} />
          </div>
        </div>
        <Product_detail_tab tabDetail={singleProduct} />
        <Singular_Product subId={saveSubID} />
      </div>
      <Footer />
    </div>
  );
};

export default Product_detail;
