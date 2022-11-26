import React, { useState } from "react";
import { Card, Col, Row, List, Skeleton, Rate, Statistic, Space } from "antd";
import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";

const { Meta } = Card;

const ListOfProducts = () => {
  const [loading, setLoading] = useState(true);

  const data = [
    "Racing car sprays burning fuel into crowd.",
    "Japanese princess to wed commoner.",
    "Australian walks 100km after outback crash.",
    "Man charged over missing wedding girl.",
    "Los Angeles battles huge wildfires.",
    "Racing car sprays burning fuel into crowd.",
    "Japanese princess to wed commoner.",
    "Australian walks 100km after outback crash.",
    "Man charged over missing wedding girl.",
    "Los Angeles battles huge wildfires.",
    "Racing car sprays burning fuel into crowd.",
    "Japanese princess to wed commoner.",
    "Australian walks 100km after outback crash.",
    "Man charged over missing wedding girl.",
    "Los Angeles battles huge wildfires.",
    "Racing car sprays burning fuel into crowd.",
    "Japanese princess to wed commoner.",
    "Australian walks 100km after outback crash.",
    "Man charged over missing wedding girl.",
    "Los Angeles battles huge wildfires.",
  ];

  return (
    <Col span={22}>
      <List
        grid={{
          gutter: 16,
          column: 1,
        }}
        dataSource={data}
        renderItem={(item) => (
          <List.Item className="main_list_item">
            <Skeleton loading={false} avatar active>
              <Card
                style={{
                  width: "50vw",
                  minWidth: 310,
                  marginTop: 16,
                }}
                loading={false}
                cover={<img src="https://d2yvmenv39glx3.cloudfront.net/images/f-138475-1794-narzedzia-niezbedne-w-pracach-budowlanych.jpg" alt="list_item" />}
              >
                <Space direction="vertical" size="middle">
                  <Meta title="Card title" description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error, laboriosam." />
                  <Space direction="horizontal" size="large">
                    <Rate />
                    <Statistic
                      value={9.3}
                      precision={2}
                      valueStyle={{
                        color: "green",
                      }}
                      prefix={<ArrowUpOutlined />}
                      suffix="%"
                    />
                  </Space>
                </Space>
              </Card>
            </Skeleton>
          </List.Item>
        )}
      />
    </Col>
  );
};

export default ListOfProducts;
