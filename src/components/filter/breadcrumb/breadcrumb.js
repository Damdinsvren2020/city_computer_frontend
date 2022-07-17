import React from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
const BreadCrumb = () => {
  return (
    <Breadcrumb>
      <Breadcrumb.Item href="#">Нүүр хуудас</Breadcrumb.Item>
      <Breadcrumb.Item
        active
        href="https://getbootstrap.com/docs/4.0/components/breadcrumb/"
      >
        Дэлгэц
      </Breadcrumb.Item>
    </Breadcrumb>
  );
};

export default BreadCrumb;
