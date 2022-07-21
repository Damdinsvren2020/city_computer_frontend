import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import "./header.css";
const Header = ({ getProductById }) => {
  const [menuDropDown, setMenuDropDown] = useState(false);
  const [angilal, setAngilal] = useState([]);
  const [showSubsTitle, setShowSubsTitle] = useState("");
  const [showSubs, setShowSubs] = useState([]);
  const [refreshKey, setRefreshKey] = useState(0);
  const [FilteredCategory, setFilteredCategory] = useState([]);
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
                <img
                  src="https://citycomputer.mn/wp-content/uploads/2022/04/logo-1.png"
                  alt="ss"
                />
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
                    <a href="/">
                      <i className="bi bi-cart3" />
                    </a>
                  </li>
                  <li>
                    <Link to="/Login">
                      {user ? user.email : <i className="bi bi-person" />}
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
                <li>
                  <button
                    onClick={() => getProductById("62bd1b7a6ee0750f2bf6621c")}
                    href="/delgets"
                  ></button>
                </li>
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
