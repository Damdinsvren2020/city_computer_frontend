import React from "react";
import Header from "../../../components/header/header";
import Footer from "../../../components/footer/footer";

const Approve = () => {
  return (
    <div>
      <Header />
      <div className="relative max-w-[1400px] mx-auto md:flex p-[40px]">
        <div className="w-[800px]">
          <h2 className="font-bold">Захиалгын дэлгэрэнгүй</h2>
          <div className="w-[700px] flex ">
            <div class="flex flex-col w-[650px]">
              <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                  <div class="overflow-hidden">
                    <table class="min-w-full">
                      <thead class="border-b">
                        <tr>
                          <th
                            scope="col"
                            class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                          >
                            Бүтээгдхүүн
                          </th>
                          <th
                            scope="col"
                            class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                          >
                            Нийт дүн
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr class="border-b">
                          <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {/* <a href="#"> */}
                            <p>Dell 22" Full HD LCD Monitor E2216HV</p>
                            {/* </a> */}
                          </td>
                          <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            {/* <a href="#"> */}
                            <p>580,000 ₮</p>
                            {/* </a> */}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[600px]">
          <div className="mt-10 lg:mt-0">
            <div className="mt-4 bg-white border border-gray-200 rounded-lg shadow-sm">
              <dl className="border-t border-gray-200 py-6 px-4 space-y-6 sm:px-6">
                <h2 className="text-lg font-medium text-green-900">
                  Баярлалаа. Таны захиалгыг хүлээн авсан.
                </h2>
                <ul class="list-disc">
                  <li>
                    <span> Захиалгын дугаар: 7252</span>
                  </li>
                  <li>
                    <span>
                      Он, сар, өдөр: <strong>2022-07-27</strong>
                    </span>
                  </li>
                  <li>
                    <span>
                      Нийт дүн:<strong>580,000₮</strong>
                    </span>
                  </li>
                  <li>
                    <span>
                      Захиалгын дугаар: <strong>7252</strong>
                    </span>
                  </li>
                </ul>
              </dl>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Approve;
