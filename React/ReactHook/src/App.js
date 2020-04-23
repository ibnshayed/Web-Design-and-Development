import React from "react";
import "./styles.css";

// import Demo from "./components/demo/Demo";
import Table from "./components/table/Table";

import users from "./data/UserData";
import products from "./data/ProductData";

export default function App() {
  const userColumn = [
    {
      dataIndex: "id",
      title: "ID"
    },
    {
      dataIndex: "name",
      title: "Name",
      render: value => `${value.firstName} ${value.lastName}`
    },
    {
      dataIndex: "image",
      title: "Image",
      render: e => (
        <img src={e} style={{ height: "50px", width: "50px" }} alt="" />
      )
    }
  ];

  const productColumn = [
    {
      dataIndex: "id",
      title: "Id"
    },
    {
      dataIndex: "product_title",
      title: "Title"
    },
    {
      dataIndex: "price",
      title: "Price"
    },
    {
      dataIndex: "picture",
      title: "Picture",
      render: value => (
        <img src={value} style={{ height: "50px", width: "50px" }} alt="" />
      )
    }
  ];

  return (
    <div className="App">
      <Table dataSource={users} column={userColumn} />
    </div>
  );
}
