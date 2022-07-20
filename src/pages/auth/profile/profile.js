import React, { useState } from "react";
import Header from "../../../components/header/header";
import Footer from "../../../components/footer/footer";
import Profiles from "../../../components/profiles/profile/profile";
import Order from "../../../components/profiles/orders/order";
import Cupon from "../../../components/profiles/cupon/cupon";
import "./profile.css";
import Wishlist from "../../../components/profiles/wishlist/wishlist";

const Profile = () => {
  const [whichTab, setWhichTab] = useState("");

  // user.wishlist.length !== 0 ? user.wishlist.map(item) : <div>Hooson baina</div>
  function Test() {
    switch (whichTab) {
      case "Profiles":
        return <Profiles />;
      case "Coupon":
        return <Cupon />;
      case "WishList":
        return <Wishlist />;
      default:
        return <Profiles />;
    }
  }
  return (
    <div>
      <Header />
      <div className="max-w-[1200px] mx-auto mt-[30px]">
        <div className="w-full flex">
          <div className="w-[300px] h-[500px] ">
            <div class="p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 ">
              <div className="p-[30px]">
                <div className="text-center	mb-[20px]">
                  <img
                    className="w-[120px] h-[120px] rounded-[50%] ml-[55px] flex justify-center	"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsIT2FkYzXlY2ZbWdgx92VUwLxB2O-7j7wBg&usqp=CAU"
                  />
                </div>
                <div className="text-center mb-[20px]">
                  <h6>Хэрэглэгчийн нэр</h6>
                  <h5>Хэрэглэгчийн email</h5>
                </div>
                <div className="hetewch">
                  <h5 className="hetewch_h5">Таны хэтэвч</h5>
                  <h4>0 ₮</h4>
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
                      <button>Гарах</button>
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
