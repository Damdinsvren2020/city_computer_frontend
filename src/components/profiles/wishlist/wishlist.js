
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { cdnUrl } from "../../../cdnUrl";
import { BsPlusLg } from "react-icons/bs"
import { HiMinus } from "react-icons/hi"
import Swal from "sweetalert2";

const Wishlist = ({ userDetail }) => {
  const [wishlist, setWishList] = useState([])
  const [refreshKey, setRefreshKey] = useState(0)

  useEffect(() => {
    const getWishList = async () => {
      const { data } = await axios.get("/userWishlist/" + userDetail._id)
      if (data.success) {
        setWishList(data.result.products)
      }
    }
    getWishList()
  }, [refreshKey])

  const removeProduct = async (id) => {
    const { data } = await axios.post("/customer/wishlist/remove", { productID: id, userID: userDetail._id })
    if (data.success) {
      setRefreshKey(old => old + 1)
    }
  }

  const addToCart = async (singleProduct) => {
    const price = singleProduct.offer ? (singleProduct.price - (singleProduct.price * singleProduct.offer / 100)) : singleProduct.price
    const { data } = await axios.post("/customer/wishlist", {
      userID: userDetail._id,
      cartItems: {
        price: price,
        quantity: 1,
        product: singleProduct._id
      }
    })
    if (data.success) {
      setRefreshKey(old => old + 1)
    }
  }


  return (
    <div class="p-10 w-[850px] overflow-auto  h-full bg-white border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <div className="justify-center items-center flex w-[900px] h-full overflow-auto">
        {
          wishlist.length !== 0 ? wishlist.map((item, index) => (
            <div key={index} className="w-[200px] h-auto justify-center items-center mx-1">
              <Link to={"/P/" + item?.name}>
                <div className="h-auto w-full bg-[#ddd]">
                  <div className="border flex flex-col">
                    <div className="w-full relative">
                      <div className="flex flex-row">
                        <div className="h-[30px] w-[30px] absolute mt-[8px] ml-[8px]">
                          <img
                            className="h-[200px] max-h-[100%]  w-auto object-contain"
                            src={`${cdnUrl}/${item?.brand?.link}`}
                          />
                        </div>
                        {item?.product?.offer ? (
                          <div className="absolute mt-[8px] right-0 mr-[8px] border-[2px] text-white bg-red-400 border-[red] px-[10px] py-[3px] rounded-md bg-[#fff] text-[12px]">
                            <h1 className="font-bold">
                              {item?.offer && item?.offer + "%"}
                            </h1>
                          </div>
                        ) : (
                          <div className="absolute mt-[8px] right-0 mr-[8px] border-[2px] border-[red] px-[10px] py-[3px] rounded-md bg-[#fff] text-[12px]">
                            <p>????????</p>
                          </div>
                        )}
                      </div>
                      <div className="w-full">
                        <img
                          className="h-[250px] max-h-[100%]  w-full object-cover"
                          src={`${cdnUrl}/${item?.avatar}`}
                        />
                      </div>
                    </div>
                    <div className="bg-[#fff] flex flex-col py-2 px-[8px]">
                      <div>
                        <h2 className="font-bold text-[14px] text-[#000] text-[#444444]">
                          {item?.name}
                        </h2>
                        <h4 className="text-[11px] text-[ #666666]">product</h4>
                      </div>
                      <div className="flex w-full items-between justify-between">
                        <p
                          className={`font-bold py-4 text-[#333333] text-[14px] ${item?.offer && "line-through"
                            }`}
                        >
                          {item?.price} ???
                        </p>
                        <p className="font-bold py-4 text-[#333333] text-[14px] text-red-500 ">
                          {item?.offer && item?.price - (item?.price * item?.offer) / 100 + "???"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
              <div className="w-full justify-evenly items-center flex mx-auto bg-gray-300 h-10">
                <button onClick={() => removeProduct(item._id)} className="w-full h-full bg-red-500 text-lg text-white flex justify-center items-center" >
                  <h1>
                    <HiMinus />
                  </h1>
                </button>
              </div>
            </div>
          ))
            :
            <div>
              <div className="justify-center flex">
                <img
                  className="w-[150px] h-[150px]"
                  src="https://shoppy.mn/5802883e67028c24304a683c22304275.svg"
                />
              </div>
              <h4 className="text-center">
                ???????? ?????????????? ???????????????? ???????????? ??????????
              </h4>
              <p className="text-center">
                ???? ???????? ???????????????????? ???????????????? ?????????????? ???????????????????? ???????????????? ??????????????
                ?????????????????? ?????? ???? ?????? ???????????????? ???????????????? ????????, ???????????????? ??????????????????
                ??????????????????
              </p>
            </div>
        }
      </div>
    </div >
  );
};

export default Wishlist;
