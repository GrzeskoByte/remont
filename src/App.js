import React from "react";

import { Col, ConfigProvider, Row, theme } from "antd";

import "./App.css";
import "./Components/MainScreen/card.css"
import "./Components/Filters/filters.css"
import "./Layout/layout.css"


import ListOfProducts from "./Components/MainScreen/ListOfProducts";
import Filters from "./Components/Filters/Filters";
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
        <Filters/>
        <ListOfProducts />
      </MainLayout>
    </ConfigProvider>
  );
}

export default App;
