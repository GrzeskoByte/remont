import React from "react";

import { ConfigProvider, theme } from "antd";

import "./App.css";
import "./Components/MainScreen/card.css";
import "./Layout/layout.css";
import "./Components/Advertisments/Adds.css"


import ListOfProducts from "./Components/MainScreen/ListOfProducts";
import MainLayout from "./Layout/MainLayout";
import Adds from "./Components/Advertisments/Adds"

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
          iconSize: "20px"
        },
        components: {
          Radio: {
            colorPrimary: "#00b96b",
          },
        },
      }}
    >
      <MainLayout>
        <Adds/>
        <ListOfProducts />
      </MainLayout>
    </ConfigProvider>
  );
}

export default App;
