import React, { useState } from "react";
import Header from "../../../components/header/header";
import Footer from "../../../components/footer/footer";
import { HiMinus } from "react-icons/hi";
import { BsPlusLg } from "react-icons/bs";

const Card = () => {
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
  return (
    <div>
      <Header />
      <div className="relative max-w-[1400px] mx-auto md:flex p-[40px]">
        <div className="w-[800px]">
          <div class="overflow-x-auto relative mt-[20px]">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="py-3 px-6">
                    Бүтээгдхүүн
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
                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white flex"
                  >
                    <img
                      class="w-[150px] h-[150px]"
                      src="https://citycomputer.mn/wp-content/uploads/2021/10/1-2-247x296.jpg"
                    />
                    <h2 class="mt-[50px]">Apple MacBook Pro 17</h2>
                  </th>
                  <td class="py-4 px-6">2,900,000₮ </td>
                  <td class="py-4 px-6">
                    <div class="flex">
                      <div className="form-control text-center flex justify-center">
                        <button onClick={handleDecrement} className="mr-[10px]">
                          <h1>
                            <HiMinus />
                          </h1>
                        </button>
                        {quantity}
                        <button onClick={handleIncrement} className="ml-[10px]">
                          <BsPlusLg />
                        </button>
                      </div>
                    </div>
                  </td>
                  <td class="py-4 px-6">2,900,000₮</td>
                </tr>
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
                <div className="flex items-center justify-between border-t border-gray-200 pt-6">
                  <dt className="text-base font-medium">Дүн</dt>
                  <dd className="text-base font-medium text-gray-900">
                    50000₮
                  </dd>
                </div>
                <div className="flex items-center justify-between  pt-6">
                  <dt className="text-base font-medium">Нийт дүн</dt>
                  <dd className="text-base font-medium text-gray-900">
                    50000₮
                  </dd>
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
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Card;
