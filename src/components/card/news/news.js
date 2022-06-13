import React from "react";
import { Card } from "antd";
import "./news.css";
const { Meta } = Card;

const News = () => (
  <Card
    hoverable
    className="NewsCard"
    cover={
      <img
        alt="example"
        src="https://citycomputer.mn/wp-content/uploads/2021/10/245994233_425186512550276_6199386403565194933_n.png"
      />
    }
  >
    <Meta
      style={{ textAlign: "center" }}
      title="Title"
      description="description"
    />
  </Card>
);

export default News;
