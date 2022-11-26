import { Col, Input, Row } from "antd";
import React from "react";
import "./App.css";
import ListOfProducts from "./Components/MainScreen/ListOfProducts";

import MainLayout from "./Layout/MainLayout";

const { Search } = Input;

function App() {
  return (
    <MainLayout>
      <Col Space={24}>
        <Row justify="center">
          <Search
            placeholder="input search text"
            onSearch={() => console.log("click")}
            size={"large"}
            style={{
              width: "50vw",
              minWidth: 310,
              marginTop: 16,
            }}
          />
        </Row>
        <Row justify="center" align="center">
          <ListOfProducts />
        </Row>
      </Col>
    </MainLayout>
  );
}

export default App;
