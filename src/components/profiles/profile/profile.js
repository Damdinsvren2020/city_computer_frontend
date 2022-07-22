import React, { useState } from "react";
import { Tabs } from "@mantine/core";
import { Form } from "antd";
import { User, Lock, Mail } from "tabler-icons-react";
import axios from "axios";
import Swal from "sweetalert2";

const Profile = ({ userDetail }) => {
  const [username, setUsername] = useState(userDetail?.username);
  const [email, setEmail] = useState(userDetail?.email);
  const [editUserId, setEditUserId] = useState(userDetail?._id);
  const [visible, setVisible] = useState("");
  const [refreshKey, setRefreshKey] = useState(0);
  const [password, setPassword] = useState("");
  const [matchPassword, setMatchPassword] = useState("");
  const [editLoading, setEditLoading] = useState("");
  const [form] = Form.useForm();

  const resetForm = () => {
    setUsername("");
    setEmail("");
  };

  const editUserok = async () => {
    console.log(username);
    console.log(email);
    let formdata = new FormData();
    formdata.append("username", username);
    formdata.append("email", email);
    const { data } = await axios.put(`/editUserFront/${editUserId}`, formdata);
    if (data.success) {
      Swal.fire({
        confirmButtonColor: "red",
        icon: "success",
        title: "Таны мэдээлэл амжилттай солигдлоо",
      });
    }
  };

  const editUsersPassword = async () => {
    let formdata = new FormData();
    formdata.append("password", password);
    const { data } = await axios.put(
      `/editUserFrontPassword/${editUserId}`,
      formdata
    );
    if (data.success) {
      Swal.fire({
        confirmButtonColor: "red",
        icon: "success",
        title: "Таны нууц үг амжилттай солигдлоо",
      });
    }
  };

  return (
    <div>
      <Tabs color="red" position="center">
        <Tabs.Tab
          label="Хувийн мэдээлэл"
          icon={<User size={22} strokeWidth={2.5} color={"red"} />}
        >
          <div class="p-10 w-[850px]  h-[400px] bg-white border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <form onSubmit={() => editUserok()} class="w-full max-w-sm">
              <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                  <label
                    class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                    for="inline-full-name"
                  >
                    Нэр
                  </label>
                </div>
                <div class="md:w-2/3">
                  <input
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-red-500"
                    id="inline-full-name"
                    type="text"
                  />
                </div>
              </div>
              <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                  <label
                    class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                    for="inline-full-name"
                  >
                    email
                  </label>
                </div>
                <div class="md:w-2/3">
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-red-500"
                    id="inline-full-name"
                    type="text"
                  />
                </div>
              </div>

              <div class="md:flex md:items-center">
                <div class="md:w-1/3"></div>
                <div class="md:w-2/3">
                  <button
                    class="shadow bg-red-500 hover:bg-red-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                    type="button"
                    onClick={() => editUserok()}
                  >
                    Мэдээллээ хадгалах
                  </button>
                </div>
              </div>
            </form>
          </div>
        </Tabs.Tab>
        <Tabs.Tab
          label="Нууц үг"
          icon={<Lock size={22} strokeWidth={2.5} color={"red"} />}
        >
          <div class="p-10 w-[850px]  h-[400px] bg-white border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <form class="w-[500px] ">
              <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                  <label
                    class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4 text-center"
                    for="inline-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  >
                    Шинэ нууц үг
                  </label>
                </div>
                <div class="md:w-2/3">
                  <input
                    class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-red-500"
                    id="inline-password"
                    type="password"
                    placeholder="******************"
                  />
                </div>
              </div>
              {/* <div class="md:flex md:items-center mb-6">
                <div class="md:w-1/3">
                  <label
                    class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4 text-center"
                    for="inline-password"
                  >
                    Нууц үг баталгаажуулах
                  </label>
                </div>
                <div class="md:w-2/3">
                  <input
                    class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-red-500"
                    id="inline-password"
                    type="password"
                    placeholder="******************"
                  />
                </div>
              </div> */}
              <div class="md:flex md:items-center">
                <div class="md:w-1/3"></div>
                <div class="md:w-2/3">
                  <button
                    class="shadow bg-red-500 hover:bg-red-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                    type="button"
                    onClick={() => editUsersPassword()}
                  >
                    Мэдээллээ хадгалах
                  </button>
                </div>
              </div>
            </form>
          </div>
        </Tabs.Tab>
      </Tabs>
    </div>
  );
};

export default Profile;
