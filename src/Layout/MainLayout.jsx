import { Input, Layout, theme, Typography } from "antd";
import React, { useState } from "react";

import headerBackground from "./bgc_main.jpg"

const { Search } = Input;

const { Title } = Typography;
const { Header, Content, Footer, Sider } = Layout;
const { useToken } = theme;


const MainLayout = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const { token } = useToken();

  return (
    <Layout>

      <Header className="main_header center" style={{background: `url(${headerBackground})`}}>
        <h2>Świat remontu</h2>
        <Search
          placeholder="Wyszukaj..."
          allowClear
          size="large"
          className="searchBar"
          onSearch={(e) => console.log(e)}
        />
      </Header>

      <Layout className="main_layout">
        <Layout>
          <Content
            style={{
              margin: "0 16px 0",
              zIndex: 1,
            }}
          >
            <div
              className="site-layout-background"
              style={{
                padding: 5,
                minHeight: 360,
              }}
            >
              {children}
            </div>
          </Content>
          <Footer
            style={{
              textAlign: "center",
            }}
          >
            Remonteo company S.A
          </Footer>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
