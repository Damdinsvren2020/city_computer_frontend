import React, { useState } from "react";
import { Tabs } from "@mantine/core";

const Cupon = () => {
  return (
    <div>
      <Tabs color="red">
        <Tabs.Tab label="Бүгд">
          <div class="p-10 w-[850px]  h-[400px] bg-white border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div>
              <span class="flex justify-center flex">
                <p class="ml-[10px]">Купон байхгүй байна</p>
              </span>
            </div>
          </div>
        </Tabs.Tab>
        <Tabs.Tab label="Идэвхтэй">
          <div class="p-10 w-[850px]  h-[400px] bg-white border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div>
              <span class="flex justify-center flex">
                <p class="ml-[10px]">Купон байхгүй байна</p>
              </span>
            </div>
          </div>
        </Tabs.Tab>
        <Tabs.Tab label="Ашигласан">
          <div class="p-10 w-[850px]  h-[400px] bg-white border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div>
              <span class="flex justify-center flex">
                <p class="ml-[10px]">Купон байхгүй байна</p>
              </span>
            </div>
          </div>
        </Tabs.Tab>
      </Tabs>
    </div>
  );
};

export default Cupon;
