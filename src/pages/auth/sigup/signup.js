import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../../../components/header/header";
import Footer from "../../../components/footer/footer";
import Sign_upImage from "./profile_image.png";
import Swal from "sweetalert2";
import axios from "axios";

const Sign_up = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);

  const registerUser = async () => {
    setConfirmLoading(true);
    try {
      let formData = new FormData();
      formData.append("username", name);
      formData.append("email", email);
      formData.append("password", password);
      const { data } = await axios.post("/register", formData);
      console.log("success", data.success);
      if (data.success) {
        setVisible(false);
        setConfirmLoading(false);
        setRefreshKey((old) => old + 1);
        Swal.fire({
          title: "Амжилттай бүртгэлээ",
          icon: "success",
          title: data.result,
        });
      }
      if (!data.success) {
        setConfirmLoading(false);
        new Swal({
          icon: "error",
          title: data.result,
        });
      }
    } catch (error) {
      setConfirmLoading(false);
      new Swal({
        icon: "error",
        title: "Хэрэглэгч бүртгэхэд алдаа гарлаа",
      });
    }
  };

  return (
    <div>
      <Header />
      <main className="flex items-center justify-center h-screen bg-gray-100">
        <form>
          <div className="bg-white w-96 p-6 rounded shadow-sm">
            <div className="flex items-center justify-center mb-4">
              <img src={Sign_upImage} className="h-32" />
            </div>
            <label className="text-gray-700">Таны нэр</label>
            <input
              className="w-full py-2 bg-gray-50 text-gray-500 px-1 outline-none mb-4"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label className="text-gray-700">Таны email</label>
            <input
              className="w-full py-2 bg-gray-50 text-gray-500 px-1 outline-none mb-4"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label className="text-gray-700">Таны нууц үг</label>
            <input
              className="w-full py-2 bg-gray-50 text-gray-500 px-1 outline-none mb-4"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="submit"
              onClick={() => registerUser()}
              className="bg-red-500 w-full text-gray-100 py-2 rounded hover:bg-red-600 transition-colors"
            >
              Бүртгүүлэх
            </button>
          </div>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default Sign_up;
