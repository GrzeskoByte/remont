import { FacebookOutlined, InstagramOutlined, TwitterOutlined, UserOutlined, VideoCameraOutlined, UploadOutlined } from "@ant-design/icons";
import { Layout, Menu, Typography, Row } from "antd";
import React from "react";

const { Title } = Typography;

const { Header, Content, Footer, Sider } = Layout;

const items = [{ icon: <FacebookOutlined /> }, { icon: <InstagramOutlined /> }, { icon: <TwitterOutlined /> }].map((item, index) => ({
  key: index,
  icon: item.icon,
  label: item.label,
}));

const MainLayout = ({ children }) => {
  return (
    <Layout className="main_layout">
      <Sider
        breakpoint="md"
        collapsedWidth="50"
        style={{
          zIndex: 10,
          paddingTop: "60px",
        }}
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <Menu
          theme="dark"
          mode="inline"
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
        <Menu
          title="Badanie betonu"
          theme="dark"
          mode="horizontal"
          style={{ display: "flex", justifyContent: "end" }}
          items={items}
          selectable={false}
          selectedKeys={null}
          className="social_navigation"
        />

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
  );
};

export default MainLayout;
