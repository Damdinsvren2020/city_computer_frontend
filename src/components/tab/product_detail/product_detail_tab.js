import React from "react";
import { Tabs, Table } from "@mantine/core";

const Product_detail_tab = ({ tabDetail }) => {
  return (
    <div>
      <Tabs color="red">
        <Tabs.Tab label="Танилцуулга">
          <div class="container mx-auto px-4 sm:px-8">
            <div class="py-8">
              <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                <div class="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
                  <table class="min-w-full leading-normal">
                    <thead>
                      <tr>
                        <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                          {/* Amount */}
                        </th>
                        <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                          {/* Issued / Due */}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        tabDetail?.specs?.map((item, index) => (
                          <tr key={index}>
                            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm flex gap-3">
                              <p class="text-gray-900 whitespace-no-wrap">
                                {item.name}:
                              </p>
                              <p class="text-gray-600 whitespace-no-wrap">{item.desc}</p>
                            </td>
                          </tr>
                        ))
                      }
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </Tabs.Tab>
        <Tabs.Tab label="Дэлгэрэнгүй мэдээлэл">
          <div class="container mx-auto px-4 sm:px-8">
            <div class="py-8">
              <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                <div class="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
                  <table class="min-w-full leading-normal">
                    <thead>
                      <tr>
                        <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                          {/* Amount */}
                        </th>
                        <th class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                          {/* Issued / Due */}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          {tabDetail.content}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </Tabs.Tab>
      </Tabs>
    </div>
  );
};

export default Product_detail_tab;
