import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../../components/header/header";
import Footer from "../../../components/footer/footer";
import { Link } from "react-router-dom";
import LoginImage from "./login.webp";
import Computerimage from "./Computer login.gif";
import axios from "axios";
import Swal from "sweetalert2";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [refresh, setRefresh] = useState(0);
  const history = useNavigate();

  const user_token = localStorage.getItem("user-token");
  useEffect(() => {
    if (user_token) {
      const authorize = async () => {
        try {
          const { data } = await axios.get("authorize", {
            headers: {
              authorization: "Bearer " + user_token,
            },
          });
          if (data.success) {
            if (data.role === "user") {
              return history("/Profile");
            }
            if (data.role === "admin") {
              return window.location.replace("http://localhost:3002");
            }
          } else {
            history("/Login");
          }
        } catch (error) {
          console.log(error);
        }
      };
      authorize();
    } else {
      history("/Login");
    }
  }, [history, refresh]);

  const logins = async () => {
    try {
      let formdata = new FormData();
      formdata.append("email", email);
      formdata.append("password", password);
      const { data } = await axios.post("/login", formdata);
      if (data.success) {
        Swal.fire({
          icon: "success",
          title: data.user.email,
        });
        setRefresh((old) => old + 1);
        localStorage.setItem("user-token", data.token);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Header />
      <main className="flex items-center justify-center h-screen bg-gray-100">
        <section class="h-screen">
          <div class="px-6 h-full text-gray-800">
            <div class="block md:flex xl:justify-center lg:justify-between justify-center items-center  h-full g-6">
              <div class="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
                <img src={Computerimage} class="w-[700px]" alt="Sample image" />
              </div>
              <div class="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
                <form>
                  <div class="flex flex-row items-center justify-center lg:justify-start">
                    <p class="text-lg mb-0 mr-4">Social нэвтрэх</p>
                    <button
                      type="button"
                      data-mdb-ripple="true"
                      data-mdb-ripple-color="light"
                      class="inline-block p-3 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 320 512"
                        class="w-4 h-4"
                      >
                        <path
                          fill="currentColor"
                          d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                        />
                      </svg>
                    </button>
                  </div>

                  <div class="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                    {/* <p class="text-center font-semibold mx-4 mb-0">Or</p> */}
                  </div>

                  <div class="mb-6">
                    <input
                      type="text"
                      class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-red-600 focus:outline-none"
                      id="exampleFormControlInput2"
                      placeholder="Таны email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div class="mb-6">
                    <input
                      type="password"
                      class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-red-600 focus:outline-none"
                      id="exampleFormControlInput2"
                      placeholder="Нууц үг"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>

                  <div class="flex justify-between items-center mb-6">
                    <div class="form-group form-check">
                      <input
                        type="checkbox"
                        class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-red-600 checked:border-red-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                        id="exampleCheck2"
                      />
                      <label
                        class="form-check-label inline-block text-gray-800"
                        for="exampleCheck2"
                      >
                        Сануулах
                      </label>
                    </div>
                    <a href="#!" class="text-gray-800">
                      Нууц үг сэргээх
                    </a>
                  </div>

                  <div class="text-center lg:text-left">
                    <button
                      type="button"
                      class="inline-block px-7 py-3 bg-red-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
                      onClick={() => logins()}
                    >
                      Нэвтрэх
                    </button>
                    <p class="text-sm font-semibold mt-2 pt-1 mb-0">
                      Бүртгэлгүй бол ?
                      <Link
                        to="/Sign_up"
                        class="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                      >
                        Бүртгүүлэх
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
