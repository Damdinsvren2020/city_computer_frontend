import React, { useState } from "react";
import { Tabs } from "@mantine/core";
import OrdersSvg from "./orders.svg";

const Order = () => {
  return (
    <div>
      <Tabs color="red">
        <Tabs.Tab label="Бүгд">
          <div class="p-10 w-[850px]  h-[400px] bg-white border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div
              style={{
                Display: "flex",
                JustifyContent: "center",
                MarginTop: "50px",
              }}
            >
              <span
                className="flex"
                style={{
                  Display: "flex",
                  JustifyContent: "center",
                  MarginTop: "50px",
                }}
              >
                <img src={OrdersSvg} />
                <p className="ml-[10px]">Захиалга байхгүй байна</p>
              </span>
            </div>
          </div>
        </Tabs.Tab>
        <Tabs.Tab label="Төлбөр хүлээгдэж буй">
          <div class="p-10 w-[850px]  h-[400px] bg-white border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div
              style={{
                Display: "flex",
                JustifyContent: "center",
                MarginTop: "50px",
              }}
            >
              <span className="flex">
                <img src={OrdersSvg} />
                <p className="ml-[10px]">Захиалга байхгүй байна</p>
              </span>
            </div>
          </div>
        </Tabs.Tab>
        <Tabs.Tab label="Баталгаажсан">
          <div class="p-10 w-[850px]  h-[400px] bg-white border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div
              style={{
                Display: "flex",
                JustifyContent: "center",
                MarginTop: "50px",
              }}
            >
              <span className="flex">
                <img src={OrdersSvg} />
                <p className="ml-[10px]">Захиалга байхгүй байна</p>
              </span>
            </div>
          </div>
        </Tabs.Tab>
        <Tabs.Tab label="Хүргэгдсэн">
          <div class="p-10 w-[850px]  h-[400px] bg-white border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div
              style={{
                Display: "flex",
                JustifyContent: "center",
                MarginTop: "50px",
              }}
            >
              <span className="flex">
                <img src={OrdersSvg} />
                <p className="ml-[10px]">Захиалга байхгүй байна</p>
              </span>
            </div>
          </div>
        </Tabs.Tab>
        <Tabs.Tab label="Цуцалсан">
          <div class="p-10 w-[850px]  h-[400px] bg-white border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div
              style={{
                Display: "flex",
                JustifyContent: "center",
                MarginTop: "50px",
              }}
            >
              <span className="flex">
                <img src={OrdersSvg} />
                <p className="ml-[10px]">Захиалга байхгүй байна</p>
              </span>
            </div>
          </div>
        </Tabs.Tab>
        <Tabs.Tab label="Лизэнгээр">
          <div class="p-10 w-[850px]  h-[400px] bg-white border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div
              style={{
                Display: "flex",
                JustifyContent: "center",
                MarginTop: "50px",
              }}
            >
              <span className="flex">
                <img src={OrdersSvg} />
                <p className="ml-[10px]">Захиалга байхгүй байна</p>
              </span>
            </div>
          </div>
        </Tabs.Tab>
      </Tabs>
    </div>
  );
};

export default Order;
