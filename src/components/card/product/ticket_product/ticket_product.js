import React from "react";
import Desktop from "../../../../images/product/desktop.jpeg";
import "./ticket_product.css";
const Home = () => {
  return (
    <div className="Ticket_product_container">
      <div class="product-card">
        <div class="badge">хямдрал</div>
        <div class="product-tumb">
          <img src={Desktop} alt="" />
        </div>
        <div class="product-details">
          <h4>
            <a href="">Дэлгэц / Monitor </a>
          </h4>
          <p>desk</p>
          <div class="product-bottom-details">
            <div class="product-price">
              <small></small>1,100,000
            </div>
            <div class="product-links">
              <a href="">
                <i class="fa fa-heart"></i>
              </a>
              <a href="">
                <i class="fa fa-shopping-cart"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
