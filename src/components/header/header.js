import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Avatar, Badge } from "antd";

import "./header.css";
const Header = ({ getProductById, refreshIt }) => {
  const [menuDropDown, setMenuDropDown] = useState(false);
  const [angilal, setAngilal] = useState([]);
  const [showSubsTitle, setShowSubsTitle] = useState("");
  const [showSubs, setShowSubs] = useState([]);
  const [refreshKey, setRefreshKey] = useState(0);
  const [FilteredCategory, setFilteredCategory] = useState([]);
  const [whichTab, setWhichTab] = useState("");

  const [refresh, setRefresh] = useState(0);
  const [user, setUser] = useState([]);

  const [wishList, setWishList] = useState([]);
  const [dropDownCart, setDropDownCart] = useState(false);

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
            getWishList(data.user);
          }
        } catch (error) {
          console.log(error);
        }
      };
      authorize();
    }
  }, [history, refresh, refreshIt]);

  useEffect(() => {
    axios
      .get("/angilal")
      .then((response) => {
        const data = response.data.data;
        setAngilal(data);
        setFilteredCategory(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [refreshKey]);
  const showSubAngilal = (subs, title) => {
    setShowSubs(subs);
    setShowSubsTitle(title);
  };

  const getWishList = async (user) => {
    const { data } = await axios.get("/userCart/" + user._id);
    if (data.success) {
      setWishList(data.result.cartItems);
      console.log(data.result.cartItems);
    }
  };

  // useEffect(() => {
  //   if (user) {
  //     const getWishList = async () => {
  //       const { data } = await axios.get("/userWishlist/" + user._id)
  //       if (data.success) {
  //         setWishList(data.result.cartItems)
  //         console.log(data.result.cartItems)
  //       }
  //     }
  //     getWishList()
  //   }
  // }, [user])

  return (
    <>
      <div>
        <section className="city-header">
          <div className="max-w-[1200px] mx-auto">
            <div className="row logo-con">
              <button
                onClick={() => setMenuDropDown(!menuDropDown)}
                id="mobile-menu"
              >
                <i className="bi bi-list" id="list-icon" />
                <i className="bi bi-x" id="x-icon" />
              </button>
              <div className="col-md-3 logo">
                <Link to="/">
                  <img
                    src="https://citycomputer.mn/wp-content/uploads/2022/04/logo-1.png"
                    alt="ss"
                  />
                </Link>
              </div>
              <div className="col-md-6 search">
                <input type="text" placeholder="Хайх утгаа оруулна уу..." />
                <button>
                  <i className="bi bi-search" />
                </button>
              </div>
              <div className="col-md-3 wishlist">
                <ul>
                  <li>
                    <a href="/">
                      <i className="bi bi-heart" />
                    </a>
                  </li>

                  <li>
                    <a href="/Profile">
                      <Badge count={wishList.length}>
                        <i className="bi bi-cart3" />
                      </Badge>
                    </a>
                    {dropDownCart && (
                      <div className="w-48 rounded-xl absolute top-25 right-52 z-30 h-48 bg-white overflow-auto p-2">
                        {wishList.length !== 0 ? (
                          wishList.map((item, index) => {
                            <div className="w-full p-2 text-xl">
                              <h1>{item?.product?.name}</h1>
                              <h1>{item?.price}</h1>
                            </div>;
                          })
                        ) : (
                          <div>hooson</div>
                        )}
                      </div>
                    )}
                  </li>
                  <li>
                    <Link to="/Login">
                      {user && user.email}
                      {<i className="bi bi-person" />}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <div className="sub-sec">
          <div className="container con1">
            <div className="row subtitle">
              <ul className="sub">
                {/* <li>
                  <button
                    onClick={() => getProductById("62bd1b7a6ee0750f2bf6621c")}
                    href="/delgets"
                  ></button>
                </li> */}
                <li>
                  <button
                    onClick={() => setMenuDropDown(!menuDropDown)}
                    id="togglebttn"
                  >
                    <i className="bi bi-list"></i>
                  </button>
                </li>
                {angilal.map((row) => (
                  <li key={row.id}>
                    <Link to={`/D/` + row.name}>
                      <a>{row.name}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {menuDropDown && (
          <section
            style={{ display: menuDropDown ? "flex" : "none" }}
            className="window-menu"
            id="windowMenu1"
          >
            <div className="container">
              <div className="row">
                <div className="dropdown-menu1">
                  <div className="item item1">
                    <ul>
                      {angilal.map((row) => (
                        <li
                          onMouseOver={() =>
                            showSubAngilal(row.SubAngilal, row.name)
                          }
                          style={{ borderBottom: "1px solid #e1e1e1" }}
                          key={row.id}
                        >
                          <button>{row.name}</button>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="item item2">
                    <div className="item2-1">
                      <h1 className="text-[30px]">{showSubsTitle}</h1>
                      <ul>
                        <li>
                          <a href="/">
                            {showSubs.length !== 0 &&
                              showSubs.map((row) => (
                                <li
                                  style={{ borderBottom: "1px solid #e1e1e1" }}
                                  key={row.id}
                                >
                                  <h1 className="font-bold">{row.name}</h1>
                                </li>
                              ))}
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default Header;
