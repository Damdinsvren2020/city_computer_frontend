import React, { useState, useEffect } from "react";
import Header from "../../../components/header/header";
import Footer from "../../../components/footer/footer";
import { HiMinus } from "react-icons/hi";
import { BsPlusLg } from "react-icons/bs";
import { useNavigate } from "react-router";
import axios from "axios";
import { cdnUrl } from "../../../cdnUrl";
import Swal from "sweetalert2";

const Card = ({ nextStep, prevStep, orderID }) => {
  let totalPrice = 0
  const [quantity, setQuantity] = useState(1);
  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevCount) => prevCount - 1);
    }
  };
  const handleIncrement = () => {
    if (quantity < 10) {
      setQuantity((prevCount) => prevCount + 1);
    }
  };

  const [user, setUser] = useState([])
  const [refresh, setRefresh] = useState(0)
  const [wishList, setWishList] = useState([])
  const [totalAmount, setTotalAmount] = useState(0)
  const [cartID, setCartID] = useState("")

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
            getWishList(data.user)
          }
        } catch (error) {
          console.log(error);
        }
      };
      authorize();
    }
  }, [history, refresh]);

  const getWishList = async (user) => {
    const { data } = await axios.get("/userCart/" + user._id)
    if (data.success) {
      setWishList(data.result.cartItems)
      setTotalAmount(data.result.totalPrice)
      setCartID(data.result._id)
      // console.log(data.result.cartItems)
    }
  }

  const removeProduct = async (singleProduct) => {
    const { data } = await axios.post("/customer/cart/remove", {
      userID: user._id,
      cartItems: {
        price: singleProduct.price,
        quantity: 1,
        product: singleProduct._id
      }
    })
    if (data.success) {
      setRefresh(old => old + 1)
    }
  }

  const addToCart = async (singleProduct) => {
    const price = singleProduct.offer ? (singleProduct.price - (singleProduct.price * singleProduct.offer / 100)) : singleProduct.price
    const { data } = await axios.post("/customer/cart", {
      userID: user._id,
      cartItems: {
        price: price,
        quantity: 1,
        product: singleProduct._id
      }
    })
    if (data.success) {
      setRefresh(old => old + 1)
    }
  }

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const createOrder = async () => {

    let formdata = new FormData()
    formdata.append("cartID", cartID)
    formdata.append("userID", user._id)
    formdata.append("Total", totalAmount ? totalAmount : totalPrice)
    const { data } = await axios.post("/createOrder", formdata)
    if (data.success) {
      Swal.fire({
        icon: "success"
      })
      orderID(data.orderID)
      nextStep(data.nextStep)

    }
  }



  return (
    <div>
      <div className="relative max-w-[1400px] mx-auto md:flex p-[40px] gap-2">
        <div className="w-[800px]">
          <div class="overflow-x-auto relative mt-[20px]">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="py-3 px-6">
                    Бүтээгдхүүн
                  </th>
                  <th scope="col" class="py-3 px-6">
                    Нэр
                  </th>
                  <th scope="col" class="py-3 px-6">
                    Үнэ
                  </th>
                  <th scope="col" class="py-3 px-6">
                    Тоо ширхэг
                  </th>
                  <th scope="col" class="py-3 px-6">
                    Дүн
                  </th>
                </tr>
              </thead>
              <tbody>
                {
                  wishList.length !== 0 ? wishList.map((item, index) => (
                    <tr key={index} class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th
                        scope="row"
                        class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white flex"
                      >
                        <img src={`${cdnUrl}/${item.product.avatar}`} className="w-24 h-24 object-contain" />
                      </th>
                      <td>
                        <h2 >{item.product.name}</h2>
                      </td>
                      <td class={`py-4 px-6 ${item.product.offer && "text-red-500"}`}>{numberWithCommas(item.product.offer ? (item.product.price - item.product.price * item.product.offer / 100) : item.product.price)} </td>
                      <td class="py-4 px-6">
                        <div class="flex">
                          <div className="form-control text-center flex justify-center">
                            <button onClick={() => removeProduct(item?.product)} className="mr-[10px]">
                              <h1>
                                <HiMinus />
                              </h1>
                            </button>
                            {item.quantity}
                            <button onClick={() => addToCart(item?.product)} className="ml-[10px]">
                              <BsPlusLg />
                            </button>
                          </div>
                        </div>
                      </td>
                      <td class="py-4 px-6">
                        {numberWithCommas(Math.round(item.quantity * (item.product.offer ? (item.product.price - item.product.price * item.product.offer / 100) : item.product.price)))}₮
                      </td>
                    </tr>
                  ))
                    :
                    <h1>хоосон байна</h1>
                }
              </tbody>
            </table>
          </div>
        </div>
        <div className="w-[600px]">
          <div className="mt-10 lg:mt-0">
            <div className="mt-4 bg-white border border-gray-200 rounded-lg shadow-sm">
              <dl className="border-t border-gray-200 py-6 px-4 space-y-6 sm:px-6">
                <h2 className="text-lg font-medium text-gray-900">
                  САГСАНД НИЙТ
                </h2>
                <div className="flex items-center justify-between border-t border-gray-200 pt-6 flex-col">
                  <dt className="text-base font-medium text-left w-full">Дүн</dt>
                  <dd className="text-base font-medium text-gray-900 text-right w-full">
                    {
                      wishList.length !== 0 ? wishList.map((item, index) => (
                        <h1 key={index}>
                          + {numberWithCommas(Math.round(item.quantity * (item.product.offer ? (item.product.price - item.product.price * item.product.offer / 100) : item.product.price)))}₮
                        </h1>
                      ))
                        :
                        <h1>0</h1>
                    }
                  </dd>
                </div>
                <div className="flex items-center justify-between  pt-6">
                  <dt className="text-base font-medium">Нийт дүн</dt>
                  <dd className="text-base font-medium text-gray-900">
                    {
                      wishList?.forEach(element => {
                        totalPrice = totalPrice + (element.quantity * (element.product.offer ? (element.product.price - element.product.price * element.product.offer / 100) : element.product.price))
                        return totalPrice
                      })
                    }
                    {
                      totalAmount ? numberWithCommas(totalAmount) : numberWithCommas(totalPrice)

                    }
                    ₮
                  </dd>
                </div>
              </dl>

              <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                <button
                  onClick={() => createOrder()}
                  type="submit"
                  className="w-full bg-red-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-red-500"
                >
                  Худалдаж авах
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
