import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout, PageHeader } from "antd";
import NavMenu from "src/components/NavMenu";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "src/redux/store";
import TopMenu from "src/components/TopMenu";
import "./index.css";

const { Header, Sider, Content } = Layout;

const MainLayout = (props: any) => {
  const [collapsed, setcollapsed] = useState(false);

  const { user: currentUser } = useSelector((state: RootState) => {
    return state.auth;
  });

  const toggle = (
    e?: React.MouseEvent<HTMLDivElement, MouseEvent> | undefined
  ) => {
    setcollapsed(!collapsed);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        collapsedWidth="0"
        theme="dark"
      >
        <div className="logo" />
        <NavMenu />
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }}>
          <PageHeader
            title={props.title}
            subTitle={props.subtitle}
            backIcon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onBack={toggle}
            extra={[<TopMenu key="topMenu" currentUser={currentUser} />]}
          />
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
          }}
        >
          {props.content}
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
