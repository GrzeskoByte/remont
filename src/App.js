import { Col, ConfigProvider, Row, theme } from "antd";
import React from "react";

import "./App.css";
import ListOfProducts from "./Components/MainScreen/ListOfProducts";

import MainLayout from "./Layout/MainLayout";

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "orange",
          colorPrimaryBg: "#ffffff",
          colorLink: "#ffa940",
          colorTextLabel: "#ffa940",
          colorSider: "#fafafa",
          algorithm: theme.compactAlgorithm,
        },
        components: {
          Radio: {
            colorPrimary: "#00b96b",
          },
        },
      }}
    >
      <MainLayout>
        <Row>
          <Col Space={24}>
            <Row justify="center" align="center">
              <ListOfProducts />
            </Row>
          </Col>
        </Row>
      </MainLayout>
    </ConfigProvider>
  );
}

export default App;
