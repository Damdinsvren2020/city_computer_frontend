import React from "react";
import Header from "../../../components/header/header";
import Footer from "../../../components/footer/footer";

const Checkout = () => {
  return (
    <div>
      <Header />
      <main className="max-w-7xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto lg:max-w-none">
          <h1 className="sr-only">Checkout</h1>
          <form className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
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
                        type="text"
                        id="first-name"
                        className="block w-full border-gray-300 rounded-md"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Нэр
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        id="last-name"
                        name="last-name"
                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Хаяг
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="address"
                        id="address"
                        autoComplete="street-address"
                        placeholder="Хороо,хороолол,гудамжны нэр..."
                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <div className="mt-1">
                      <input
                        type="text"
                        name="apartment"
                        id="apartment"
                        placeholder="Байрны дугаар,орцны дугаар,хэддүгээр давхар,тоот гэх мэт"
                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Утасны дугаар
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">
                      Имэйл хаяг
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500 sm:text-sm"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10 lg:mt-0">
              <h2 className="text-lg font-medium text-gray-900">
                Захиалгын мэдээлэл
              </h2>
              <div className="mt-4 bg-white border border-gray-200 rounded-lg shadow-sm">
                <h3 className="sr-only">Items in your cart</h3>
                <ul role="list" className="divide-y divide-gray-200">
                  <li className="flex py-6 px-4 sm:px-6">
                    <div className="flex-shrink-0">
                      <img
                        src="https://citycomputer.mn/wp-content/uploads/2021/09/11-1-510x510.jpg"
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
                              Dell 22″ Full HD LCD Monitor E2216HV
                            </a>
                          </h4>
                        </div>
                        <div className="ml-4 flex-shrink-0 flow-root">
                          <button
                            type="button"
                            className="-m-2.5 bg-white p-2.5 flex items-center justify-center text-gray-400 hover:text-gray-500"
                          >
                            <span className="sr-only">Устгах</span>
                            {/* Heroicon name: solid/trash */}
                            <svg
                              className="h-5 w-5"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path
                                fillRule="evenodd"
                                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                      <div className="flex-1 pt-2 flex items-end justify-between">
                        <p className="mt-1 text-sm font-medium text-gray-900">
                          580,000₮
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
                <dl className="border-t border-gray-200 py-6 px-4 space-y-6 sm:px-6">
                  <div className="flex items-center justify-between border-t border-gray-200 pt-6">
                    <dt className="text-base font-medium">Нийт</dt>
                    <dd className="text-base font-medium text-gray-900">
                      50000₮
                    </dd>
                  </div>
                  <div className="flex">
                    <input type="checkbox" id="first-name" />
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
                    type="submit"
                    className="w-full bg-red-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-red-500"
                  >
                    Худалдаж авах
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Checkout;
