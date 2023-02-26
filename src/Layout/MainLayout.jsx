import React, { useState } from "react";

import { AppstoreOutlined, BellOutlined, HeartOutlined, MailOutlined, SettingOutlined, ShoppingCartOutlined } from '@ant-design/icons';

import {
  ProFormDateRangePicker,
  ProFormSelect,
  ProFormText,
  QueryFilter
} from '@ant-design/pro-components';

import { Button, Input, Layout, Menu, Space, theme, Typography } from "antd";
import { map } from 'lodash';

const { Search } = Input;

const { Title,Paragraph,Text } = Typography;
const { Header, Content, Footer, Sider } = Layout;
const { useToken } = theme;

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const MainLayout = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const [openKeys, setOpenKeys] = useState(['sub1']);
  const [current , setCurrent] = useState('mail');
  const [inputValue, setInputValue] = useState(1);


  const rootSubmenuKeys = ['sub1', 'sub2', 'sub3','sub4','sub5','sub6','sub7','sub8'];

  const { token } = useToken();

  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  const categories = [
  getItem('Navigation One', 'sub1', <MailOutlined />, [
    getItem('Option 1', '1'),
    getItem('Option 2', '2'),
    getItem('Option 3', '3'),
    getItem('Option 4', '4'),
  ]),
  getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
    getItem('Option 5', '5'),
    getItem('Option 6', '6'),
    getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
  ]),
  getItem('Navigation Three', 'sub3', <SettingOutlined />, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
    getItem('Option 11', '11'),
    getItem('Option 12', '12'),
  ]),
  getItem('Navigation Three', 'sub4', <SettingOutlined />, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
    getItem('Option 11', '11'),
    getItem('Option 12', '12'),
  ]),
  getItem('Navigation Three', 'sub5', <SettingOutlined />, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
    getItem('Option 11', '11'),
    getItem('Option 12', '12'),
  ]),
  getItem('Navigation Three', 'sub6', <SettingOutlined />, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
    getItem('Option 11', '11'),
    getItem('Option 12', '12'),
  ]),
  getItem('Navigation Three', 'sub7', <SettingOutlined />, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
    getItem('Option 11', '11'),
    getItem('Option 12', '12'),
  ]),
  getItem('Navigation Three', 'sub8', <SettingOutlined />, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
    getItem('Option 11', '11'),
    getItem('Option 12', '12'),
  ]),
];

  const items = [
    {
      key: 'logo',
      label: <Title level={2} className="logo">iMateriały</Title>,
      disabled:true
    },
    {
      key: 'searchBar',
      toRender: <Search
            placeholder="Wyszukaj..."
            allowClear
            size="large"
            className="searchBar"
            onSearch={(e) => console.log(e)}
            enterButton={"Wyszukaj"}
          />,
      disabled:true

    },
    {
    key: 'mail',
    icon: <MailOutlined style={{fontSize:token.iconSize}}/>,
    },
    {
      key: 'notification',
      icon: <BellOutlined style={{fontSize:token.iconSize}}/>,
    }, 
    {
      key: 'products',
      icon: <ShoppingCartOutlined style={{fontSize:token.iconSize}}/>,
    },
    {
      key: 'feedback',
      icon: <HeartOutlined  style={{fontSize:token.iconSize}}/>,
    }
 ]

  const categoriesMenu = [
    {
      label: 'Ogród',
      icon: <MailOutlined style={{fontSize:token.iconSize, color:token.colorPrimary}} />,
      },
    {
      label: 'Ogród',
      icon: <MailOutlined style={{fontSize:token.iconSize, color:token.colorPrimary}} />,
      },
    {
      label: 'Ogród',
      icon: <MailOutlined style={{fontSize:token.iconSize, color:token.colorPrimary}} />,
      },
  ]

  const switchMenuItem = (e) => {
    setCurrent(e.key);
  };


  const options = [
    {
      label: 'Od najniższej cenie',
      value: 'desc',
    },
    {
      label: 'Po popularnośći',
      value: 'pop',
    },
    {
      label: 'Od najwyższej ceny',
      value: 'asc',
    },
  ];
  const onChange = (newValue) => {
    setInputValue(newValue);
  };
  return (
    <Layout >
      <Menu onClick={switchMenuItem} selectedKeys={[current]} mode="horizontal" className="layout_menu" >
        {map(items, item=>{
          return <Menu.Item key={item.key} icon={item.icon} className={item.key} disabled={item.disabled}>
              {item.label}
              {item?.toRender}
          </Menu.Item>
        })}
      </Menu>

     
      <Layout className='main_layout' hasSider>

        <Sider style={{
         
            backgroundColor:token.colorPrimaryBg,
          }} className="layout_sider">
            
              <Title level={4} >Kategorie</Title>

              <Menu
                mode="inline"
                openKeys={openKeys}
                onOpenChange={onOpenChange}
                style={{
                  width: 256,
                }}
                items={categories}
              />
      
        </Sider>

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

        <Sider style={{
          backgroundColor:token.colorPrimaryBg, 
        }} className="layout_sider_2">

         <Space direction='vertical'>

          <QueryFilter submitter={false}  onFinish={async (values) => {console.log(values.name);}} className="filters_container" defaultCollapsed={false}>
              <Title level={3}>Filtry</Title>
          
              <ProFormText name="status" label="Po nazwie" placeholder="" />
              <ProFormSelect
                name="sub_category"
                label="Podkategoria"
                showSearch
                valueEnum={{
                  val1 : "val1",
                  val2 : "val2",
                  val3 : "val3",
                  val4 : "val4",
                }}
                placeholder=""
              />
              <ProFormDateRangePicker name="create" label="Data" colSize={3} placeholder=""/>
              <Button type="primary">Filtruj</Button>
          </QueryFilter>
            
         </Space>
        </Sider>             
      </Layout>
      <Footer
            style={{
              textAlign: "center",
            }}
          >
            iMateriały.pl
          </Footer>
    </Layout>
  );
};

export default MainLayout;
