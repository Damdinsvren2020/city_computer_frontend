import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../../components/header/header";
import Footer from "../../../components/footer/footer";
import Profiles from "../../../components/profiles/profile/profile";
// import Order from "../../../components/profiles/orders/order";
import Cupon from "../../../components/profiles/cupon/cupon";
import "./profile.css";
import Wishlist from "../../../components/profiles/wishlist/wishlist";
import axios from "axios";

const Profile = () => {
  const [whichTab, setWhichTab] = useState("");
  const [refresh, setRefresh] = useState(0);
  const [user, setUser] = useState([]);

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
            setUser(data.user);
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

  // user.wishlist.length !== 0 ? user.wishlist.map(item) : <div>Hooson baina</div>
  function Test() {
    switch (whichTab) {
      case "Profiles":
        return <Profiles userDetail={user} />;
      case "Coupon":
        return <Cupon />;
      case "WishList":
        return <Wishlist />;
      default:
        return <Profiles />;
    }
  }

  const navigate = useNavigate();

  const LogOutUser = () => {
    navigate("/");
    localStorage.clear();
  };

  return (
    <div>
      <Header />
      <div className="max-w-[1200px] mx-auto mt-[30px]">
        <div className="w-full flex">
          <div className="w-[300px] h-[500px]">
            <div class="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 ">
              <div className="p-[30px]">
                <div className="text-center	mb-[20px]">
                  <img
                    className="w-[120px] h-[120px] rounded-[50%] mx-auto flex justify-center object-cover	"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsIT2FkYzXlY2ZbWdgx92VUwLxB2O-7j7wBg&usqp=CAU"
                  />
                </div>
                <div className="text-center mb-[20px]">
                  <h6>{user.username}</h6>
                  <h5>{user.email}</h5>
                </div>
                <div className="hetewch">
                  <h5 className="hetewch_h5">Таны хэтэвч</h5>
                  <h4>{user.wallet} ₮</h4>
                </div>
                <div>
                  <ul>
                    <li>
                      <button onClick={() => setWhichTab("Profiles")}>
                        Хувийн мэдээлэл
                      </button>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <button onClick={() => setWhichTab("Coupon")}>
                        Купон
                      </button>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <button onClick={() => setWhichTab("WishList")}>
                        Хүслийн жагсаалт
                      </button>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <button>Миний сагс</button>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <button onClick={LogOutUser}>Гарах</button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[850px] ml-[20px] h-[500px]">
            <Test />
            {/* <Profiles /> */}
            {/* <Order /> */}
            {/* <Cupon /> */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
