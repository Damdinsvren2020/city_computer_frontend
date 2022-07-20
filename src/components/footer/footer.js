import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <div>
      <footer className="footer-section mt-[30px]">
        <div className="container">
          <div className="footer-content pt-5 pb-5">
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <h3>Үндсэн цэс</h3>
                  </div>
                  <ul>
                    <li>
                      <a href="#">Нүүр хуудас</a>
                    </li>
                    <li>
                      <a href="#">Бидний тухай</a>
                    </li>
                    <li>
                      <a href="#">Бусад</a>
                    </li>
                    <li>
                      <a href="#">Холбоо барих</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <h3>Хүргэлт</h3>
                  </div>
                  <div>
                    <p>
                      Та бараагаа өөрийн биер ирж авах боломжтой ба өөрийн
                      хаягаар хүргүүлэн хүлээн авж болно. Баярлалаа
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                <div className="footer-widget">
                  <div className="footer-widget-heading">
                    <h3>Холбоо барих</h3>
                  </div>
                  <div>
                    <p>
                      Хаяг: Компьютер Ланд, Улаанбаатар хот Утас: (+976)75757599
                      Имэйл: citycomputer421@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright-area">
          <div className="container">
            <div className="row">
              <div>
                <div className="copyright-text">
                  <p>
                    Copyright 2022 © citycomputer.mn
                    <a href="https://codepen.io/anupkumar92/"></a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      ;
    </div>
  );
};

export default Footer;
