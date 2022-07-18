import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../../../components/header/header";
import Footer from "../../../components/footer/footer";
import LoginImage from "./login.webp";
import Swal from "sweetalert2";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);
  const [data, setData] = useState("");
  const navigate = useNavigate();

  const submitLogin = async () => {
    try {
      const { data } = await axios.post("login", {
        email: email,
        password: password.trim(),
      });
      if (data.token) {
        setSuccess(true);
        setData(data.token);
        Swal.fire({
          title: "Амжилттай нэвтэрлээ",
          text: data.user.email,
          icon: "success",
          confirmButtonText: "Continue",
        });
      }
    } catch (error) {
      Swal.fire({
        title: error.message,
        icon: "warning",
      });
      setSuccess(false);
    }
  };
  //   useEffect(() => {
  //     if (data) {
  //       localStorage.setItem("token", data);
  //       navigate("/Login");
  //     }
  //     if (localStorage.token) {
  //       navigate("/Profile");
  //     }
  //   }, [data, navigate]);
  return (
    <div>
      <Header />
      <main className="flex items-center justify-center h-screen bg-gray-100">
        <form>
          <div className="bg-white w-96 p-6 rounded shadow-sm">
            <div className="flex items-center justify-center mb-4">
              <img src={LoginImage} className="h-32" />
            </div>
            <label className="text-gray-700">Email</label>
            <input
              className="w-full py-2 bg-gray-50 text-gray-500 px-1 outline-none mb-4"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="text-gray-700">Password</label>
            <input
              className="w-full py-2 bg-gray-50 text-gray-500 px-1 outline-none mb-4"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="submit"
              onClick={() => submitLogin()}
              className="bg-red-500 w-full text-gray-100 py-2 rounded hover:bg-red-600 transition-colors"
            >
              Нэвтрэх
            </button>
            <button>Бүртгүүлэх</button>
          </div>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
