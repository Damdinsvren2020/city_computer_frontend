import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Delgets from "./pages/delgets/delgets";
import Product_Detail from "./pages/product_detail/product_detail";
import Login from "./pages/auth/login/login";
import Profile from "./pages/auth/profile/profile";
import SignUp from "./pages/auth/sigup/signup";
import Single from "./pages/singular/single";
import SingleNews from "./pages/news/newsdetail";
import Card from "./pages/orders/card/card";
import Checkout from "./pages/orders/checkout/checkout";
import Approve from "./pages/orders/approve/approve";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "antd/dist/antd";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";

import reportWebVitals from "./reportWebVitals";
import Order from "./pages/orders/order/order";

const token = localStorage.getItem("token");

axios.defaults.headers.post["Content-Type"] = "multipart/formdata";
axios.defaults.headers.common["authorization"] = "Bearer " + token;
axios.defaults.baseURL = "http://localhost:3001/api";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/D/:id" element={<Delgets />} />
        <Route path="/P/:name" element={<Product_Detail />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Sign_up" element={<SignUp />} />
        <Route path="/Single" element={<Single />} />
        <Route path="/S/:id" element={<SingleNews />} />
        <Route path="/Order" element={<Order />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
