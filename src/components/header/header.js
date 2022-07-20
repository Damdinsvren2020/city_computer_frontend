import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./header.css";

const Header = ({ getProductById }) => {
  const [menuDropDown, setMenuDropDown] = useState(false);
  const [angilal, setAngilal] = useState([]);
  const [refreshKey, setRefreshKey] = useState(0);
  const [FilteredCategory, setFilteredCategory] = useState([]);

  useEffect(() => {
    axios
      .get("/angilal")
      .then((response) => {
        const data = response.data.data;
        console.log("Sub angin", data);
        setAngilal(data);
        setFilteredCategory(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [refreshKey]);
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
                      <i className="bi bi-person" />
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
                  {/* <button
                    onClick={() => getProductById("62bd1b7a6ee0750f2bf6621c")}
                    href="/delgets"
                  >
                    hello
                  </button> */}
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
                    <a href="/">{row.name}</a>
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
                          style={{ borderBottom: "1px solid #e1e1e1" }}
                          key={row.id}
                        >
                          <a href="/">{row.name}</a>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="item item2">
                    <div className="item2-1">
                      {angilal.map((row) => (
                        <li
                          style={{ borderBottom: "1px solid #e1e1e1" }}
                          key={row.id}
                        >
                          <h5>{row.name}</h5>
                          <ul>
                            {row?.SubAngilal?.map((item, index) => (
                              <li>
                                <a href="/">
                                  <i className="bi bi-chevron-right" />{" "}
                                  {item.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </li>
                      ))}
                      <h5>Суурин компьютер</h5>
                      <ul>
                        <li>
                          <a href="/">
                            <i className="bi bi-chevron-right" /> Gamer
                          </a>
                        </li>
                        <li>
                          <a href="/">
                            <i className="bi bi-chevron-right" /> Gamer
                          </a>
                        </li>
                        <li>
                          <a href="/">
                            <i className="bi bi-chevron-right" /> Gamer
                          </a>
                        </li>
                        <li>
                          <a href="/">
                            <i className="bi bi-chevron-right" /> Gamer
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="item2-2">
                      <h5>Суурин компьютер</h5>
                      <ul>
                        <li>
                          <a href="/">
                            <i className="bi bi-chevron-right" /> Gamer
                          </a>
                        </li>
                        <li>
                          <a href="/">
                            <i className="bi bi-chevron-right" /> Gamer
                          </a>
                        </li>
                        <li>
                          <a href="/">
                            <i className="bi bi-chevron-right" /> Gamer
                          </a>
                        </li>
                        <li>
                          <a href="/">
                            <i className="bi bi-chevron-right" /> Gamer
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="item item3">
                    <div className="item3-1">
                      <h5>Суурин компьютер</h5>
                      <ul>
                        <li>
                          <a href="/">
                            <i className="bi bi-chevron-right" /> Gamer
                          </a>
                        </li>
                        <li>
                          <a href="/">
                            <i className="bi bi-chevron-right" /> Gamer
                          </a>
                        </li>
                        <li>
                          <a href="/">
                            <i className="bi bi-chevron-right" /> Gamer
                          </a>
                        </li>
                        <li>
                          <a href="/">
                            <i className="bi bi-chevron-right" /> Gamer
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="item3-2">
                      <h5>Суурин компьютер</h5>
                      <ul>
                        <li>
                          <a href="/">
                            <i className="bi bi-chevron-right" /> Gamer
                          </a>
                        </li>
                        <li>
                          <a href="/">
                            <i className="bi bi-chevron-right" /> Gamer
                          </a>
                        </li>
                        <li>
                          <a href="/">
                            <i className="bi bi-chevron-right" /> Gamer
                          </a>
                        </li>
                        <li>
                          <a href="/">
                            <i className="bi bi-chevron-right" /> Gamer
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
