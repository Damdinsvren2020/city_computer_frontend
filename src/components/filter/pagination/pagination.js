import React from "react";
import { Pagination } from "@mantine/core";

const Pagination_detail = ({ total }) => {
  return (
    <div>
      <Pagination total={total} color="red" initialPage={1} size="sm" />
    </div>
  );
};

export default Pagination_detail;
