import React, { useState } from "react";
import Header from "../../../components/header/header";
import Footer from "../../../components/footer/footer";
import { cdnUrl } from "../../../cdnUrl";
import axios from "axios";
import Swal from "sweetalert2";

const Checkout = ({ orderProduct, orderDetail }) => {

  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [address, setAddress] = useState("")
  const [address_detail, setAddress_detail] = useState("")
  const [number, setNumber] = useState("")
  const [email, setEmail] = useState("")
  const [paymentMethod, setPaymentMethod] = useState(false)

  const [firstNameValid, setFirstnameValid] = useState(false)


  const orderAddressCheck = async (event) => {
    event.preventDefault()
    if (firstname.trim() === "" || lastname.trim() === "" || address.trim() === "" || address_detail.trim() === "" || number.trim() === "" || email.trim() === "" || paymentMethod.trim() === "") {
      Swal.fire({
        icon: "warning",
        title: "Хэрэгтэй мэдээлэлүүдыг бөглөнө үү!"
      })
    } else {
      let formdata = new FormData()
      formdata.append("firstname", firstname)
      formdata.append("lastname", lastname)
      formdata.append("address", address)
      formdata.append("address_detail", address_detail)
      formdata.append("number", number)
      formdata.append("email", email)
      formdata.append("paymentMethod", paymentMethod)

      const { data } = await axios.put("/updateOrder/" + orderDetail._id, formdata)
      if (data.success) {
        Swal.fire({
          title: "Төлбөрөө төлөөд үргэлжлүүлнэ үү!",
          icon: "success",
          confirmButtonColor: "#e5222b"
        })
      }
    }
  }



  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <div>
      <main className="max-w-7xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto lg:max-w-none lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
          <h1 className="sr-only">Checkout</h1>
          <form className="">
            <div>
              <div className="border-t border-gray-200 pt-10">
                <h2 className="text-lg font-medium text-gray-900">
                  Тооцооны мэдээлэл
                </h2>
                <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Овог
                    </label>
                    <div className="mt-1">
                      <input
                        required
                        value={firstname}
                        onChange={(e) => setFirstname(e.target.value)}
                        type="text"
                        id="first-name"
                        className={`block w-full border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm p-2 border ${firstNameValid && "border-red-500"}`}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Нэр
                    </label>
                    <div className="mt-1">
                      <input
                        required
                        value={lastname}
                        onChange={(e) => setLastname(e.target.value)}
                        type="text"
                        id="last-name"
                        name="last-name"
                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm p-2 border"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Хаяг
                    </label>
                    <div className="mt-1">
                      <input
                        required
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        type="text"
                        name="address"
                        id="address"
                        autoComplete="street-address"
                        placeholder="Хороо,хороолол,гудамжны нэр..."
                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm p-2 border"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <div className="mt-1">
                      <input
                        required
                        value={address_detail}
                        onChange={(e) => setAddress_detail(e.target.value)}
                        type="text"
                        name="apartment"
                        id="apartment"
                        placeholder="Байрны дугаар,орцны дугаар,хэддүгээр давхар,тоот гэх мэт"
                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm p-2 border"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Утасны дугаар
                    </label>
                    <div className="mt-1">
                      <input
                        required
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                        type="number"
                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm p-2 border"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Имэйл хаяг
                    </label>
                    <div className="mt-1">
                      <input
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm p-2 border"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
          <div className="mt-10 lg:mt-0">
            <h2 className="text-lg font-medium text-gray-900">
              Захиалгын мэдээлэл
            </h2>
            <div className="mt-4 bg-white border border-gray-200 rounded-lg shadow-sm">
              <h3 className="sr-only">Items in your cart</h3>
              <ul role="list" className="divide-y divide-gray-200 overflow-auto h-96">
                {
                  orderProduct?.length !== 0 && orderProduct?.map((item, index) => (
                    <li key={index} className="flex py-6 px-4 sm:px-6">
                      <div className="flex-shrink-0">
                        <img
                          src={`${cdnUrl}/${item?.product?.avatar}`}
                          alt="image"
                          className="w-20 rounded-md"
                        />
                      </div>
                      <div className="ml-6 flex-1 flex flex-col">
                        <div className="flex">
                          <div className="min-w-0 flex-1">
                            <h4 className="text-sm">
                              <a
                                href="#"
                                className="font-medium text-gray-700 hover:text-gray-800"
                              >
                                {item?.product?.name}
                              </a>
                            </h4>
                          </div>
                        </div>
                        <div className="flex-1 pt-2 flex items-end justify-between">
                          <p className={`mt-1 text-sm font-medium text-gray-900 ${item?.product?.offer && "text-red-500"}`}>
                            {(item?.product?.offer ? item?.product?.price - (item?.product?.price * item?.product?.offer / 100) : item?.product?.price)}₮
                          </p>
                        </div>
                        <div className="text-right w-full">
                          x {item?.quantity}
                        </div>
                      </div>
                    </li>
                  ))
                }
              </ul>
              <dl className="border-t border-gray-200 py-6 px-4 space-y-6 sm:px-6">
                <div className="flex items-center justify-between border-t border-gray-200 pt-6">
                  <dt className="text-base font-medium">Нийт</dt>
                  <dd className="text-base font-medium text-gray-900">
                    {(orderDetail?.total)}₮
                  </dd>
                </div>
                <div className="flex">
                  <input value={paymentMethod === "Qpay" ? true : false} onChange={() => setPaymentMethod("Qpay")} type="checkbox" id="first-name" />
                  <label className="mt-[10px] ml-[10px]">Qpay</label>
                  <img
                    src="https://citycomputer.mn/wp-content/plugins/woocommerce-gateway-qpay//images/icon.png"
                    className="object-cover"
                  />

                  {/* <label className="block text-sm font-medium text-gray-700">
                      Овог
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        id="first-name"
                        className="block w-full border-gray-300 rounded-md"
                      />
                    </div> */}
                </div>
                <div>
                  <h1>
                    QPay үйлчилгээг ашиглан гар утсаараа QR код уншуулан
                    төлбөр төлөх боломжтой….
                  </h1>
                </div>
              </dl>

              <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                <button
                  onClick={orderAddressCheck}
                  className="w-full bg-red-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-red-500"
                >
                  Худалдаж авах
                </button>
              </div>
            </div>
          </div>
        </div>
      </main >
    </div >
  );
};

export default Checkout;
