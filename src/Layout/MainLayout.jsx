import { UploadOutlined, UserOutlined, VideoCameraOutlined } from "@ant-design/icons";
import { Input, Layout, Menu, theme, Typography } from "antd";
import React, { useState } from "react";
const { Search } = Input;

const { Title } = Typography;
const { Header, Content, Footer, Sider } = Layout;
const { useToken } = theme;

const MainMenu = () => {
  return (
    <Menu mode="horizontal" className="main_nav center" style={{ minWidth: 0, flex: "auto" }}>
      <Menu.Item key="search" style={{ width: "10%" }}>
        LOGO
      </Menu.Item>
      <Menu.Item key="search" style={{ width: "80%", minWidth: "300px" }}>
        <Search placeholder="Wyszukaj..." allowClear size="large" className="searchBar" onSearch={(e) => console.log(e.target.value)} />
      </Menu.Item>
    </Menu>
  );
};

const MainLayout = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const { token } = useToken();

  return (
    <Layout>
      <MainMenu />
      <Layout className="main_layout">
        <Sider
          theme="light"
          collapsible
          collapsed={isCollapsed}
          collapsedWidth="0"
          style={{
            zIndex: 10,
            position: "fixed",
            top: "10%",
            left: 0,
            border: "0px solid transparent",
            borderRadius: "20px",
            backgroundColor: token.colorSider,
          }}
          onCollapse={(collapsed, type) => {
            setIsCollapsed((prev) => !prev);
          }}
        >
          <Menu
            theme="light"
            mode="inline"
            style={{ backgroundColor: token.colorSider, border: "2px solid transparent", borderRadius: "20px" }}
            defaultSelectedKeys={["4"]}
            items={[
              { icon: <UserOutlined />, label: "Główna" },
              { icon: <VideoCameraOutlined />, label: "Top" },
              { icon: <UploadOutlined />, label: "Statystyki" },
              { icon: <UserOutlined />, label: "Kontakt" },
            ].map((item, index) => ({
              key: String(index + 1),
              icon: item.icon,
              label: item.label,
            }))}
          />
        </Sider>
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
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
