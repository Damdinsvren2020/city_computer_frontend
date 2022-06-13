import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div>
      <section className="city-header">
        <div className="container">
          <div className="row logo-con">
            <button id="mobile-menu" onclick="mobileMenu()">
              <i className="bi bi-list" id="list-icon" />
              <i className="bi bi-x" id="x-icon" />
            </button>
            <div className="col-md-3 logo">
              <img
                src="https://citycomputer.mn/wp-content/uploads/2022/04/logo-1.png"
                alt
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
                  <a href="#">
                    <i className="bi bi-heart" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="bi bi-cart3" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="bi bi-person" />
                  </a>
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
                <button id="togglebttn" onclick="dropDownMenuWindows()">
                  <i className="bi bi-list" />
                </button>
              </li>
              <li>
                <a href="#">Бүх ангилал</a>
              </li>
              <li>
                <a href="#">Нүүр</a>
              </li>
              <li>
                <a href="#">Дэлгэц</a>
              </li>
              <li>
                <a href="#">Суурин компьютер</a>
              </li>
              <li>
                <a href="#">Зөөврийн компьютер</a>
              </li>
              <li>
                <a href="#">Сэлбэг эд анги</a>
              </li>
              <li>
                <a href="#">Дагалдах хэрэгсэл</a>
              </li>
              <li>
                <a href="#">Оффис тоног төхөөрөмж</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <section className="window-menu" id="windowMenu1">
        <div className="container">
          <div className="row">
            <div className="dropdown-menu1">
              <div className="item item1">
                <ul>
                  <li style={{ borderBottom: "1px solid #e1e1e1" }}>
                    <a href="#">Суурин компьютер</a>
                  </li>
                  <li>
                    <a href="#">Зөөврийн компьютер</a>
                  </li>
                </ul>
              </div>
              <div className="item item2">
                <div className="item2-1">
                  <h5>Суурин компьютер</h5>
                  <ul>
                    <li>
                      <a href="#">
                        <i className="bi bi-chevron-right" /> Gamer
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="bi bi-chevron-right" /> Gamer
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="bi bi-chevron-right" /> Gamer
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="bi bi-chevron-right" /> Gamer
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="item2-2">
                  <h5>Суурин компьютер</h5>
                  <ul>
                    <li>
                      <a href="#">
                        <i className="bi bi-chevron-right" /> Gamer
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="bi bi-chevron-right" /> Gamer
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="bi bi-chevron-right" /> Gamer
                      </a>
                    </li>
                    <li>
                      <a href="#">
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
                      <a href="#">
                        <i className="bi bi-chevron-right" /> Gamer
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="bi bi-chevron-right" /> Gamer
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="bi bi-chevron-right" /> Gamer
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="bi bi-chevron-right" /> Gamer
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="item3-2">
                  <h5>Суурин компьютер</h5>
                  <ul>
                    <li>
                      <a href="#">
                        <i className="bi bi-chevron-right" /> Gamer
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="bi bi-chevron-right" /> Gamer
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="bi bi-chevron-right" /> Gamer
                      </a>
                    </li>
                    <li>
                      <a href="#">
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
    </div>
  );
};

export default Header;
