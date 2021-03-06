import React, { useEffect, useState } from "react";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import { useParams, useNavigate } from "react-router-dom";
// import Breadcrumb from "../../components/filter/breadcrumb/breadcrumb";
import Home_Product_detail from "../../components/carousel/home_product_carousel/home_product_detail";
import Product_detail_tab from "../../components/tab/product_detail/product_detail_tab";
// import { Rocket, CreditCard, MessageCircle2 } from "tabler-icons-react";
import Product_details from "../../components/carousel/product_detail/product_detail";
// import Product_image_gallery from "../../components/carousel/product_image_gallery/product_image_gallery";
import Singular_Product from "../../components/carousel/singular_product/singular_product";
import axios from "axios";
import Swal from "sweetalert2";

const Product_detail = () => {
  const [singleProduct, setSingleProduct] = useState([]);
  const [saveSubID, setSaveSubID] = useState("");

  const { name } = useParams();
  useEffect(() => {
    if (name) {
      const getProduct = async () => {
        const { data } = await axios.get("/singleProduct/" + name);
        if (data.success) {
          setSingleProduct(data.result);
          setSaveSubID(data.result?.SubID);
        }
      };
      getProduct();
    }
  }, [name]);

  const [refresh, setRefresh] = useState(0);
  const [user, setUser] = useState([]);

  const history = useNavigate();

  const user_token = localStorage.getItem("user-token");
  useEffect(() => {
    if (user_token) {
      const authorize = async () => {
        try {
          const { data } = await axios.get("authorize", {
            headers: {
              authorization: "Bearer " + user_token,
            },
          });
          if (data.success) {
            setUser(data.user);
          }
        } catch (error) {
          console.log(error);
        }
      };
      authorize();
    }
  }, [history, refresh]);

  const addToCart = async () => {
    const price = singleProduct.offer
      ? singleProduct.price - (singleProduct.price * singleProduct.offer) / 100
      : singleProduct.price;
    const { data } = await axios.post("/customer/cart", {
      userID: user._id,
      cartItems: {
        price: price,
        quantity: 1,
        product: singleProduct._id,
      },
    });
    if (data.success) {
      setRefresh((old) => old + 1);
      Swal.fire({
        icon: "success",
      });
    }
  };

  const addToWishList = async () => {
    let formdata = new FormData()
    formdata.append("productID", singleProduct._id)
    formdata.append("userID", user._id)
    const { data } = await axios.post("/customer/wishlist", formdata);
    if (data.success) {
      setRefresh((old) => old + 1);
      Swal.fire({
        icon: "success",
      });
    }
  }

  // console.log(singleProduct.SubID._id)

  return (
    <div>
      <Header refreshIt={refresh} />
      <div className="max-w-[1200px] mx-auto mt-[30px]  ">
        <div className="w-full flex">
          <div className="w-[500px] h-[500px]">
            <Product_details productImages={singleProduct} />
          </div>
          <div className="w-[850px] h-[500px] ">
            <Home_Product_detail
              addToCart={() => addToCart()}
              addToWishList={() => addToWishList()}
              detail={singleProduct}
            />
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
