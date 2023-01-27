import React, { useState } from "react";
import { Badge, Button, Card, Col, List, Row, Skeleton, theme, Rate } from "antd";

import ProductReview from "../ProductReview/ProductReview";

const { useToken } = theme;

const ListOfProducts = () => {
  const { token } = useToken();

  const data = [
    {
      title: "Product Name",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis dignissimos eum rem fugit odit obcaecati!",
      imgUrl: "https://7.allegroimg.com/s512/039e42/95f32d08461c86611f93262ddf37/Taczka-BUDOWLANA-OGRODOWA-Taczki-85L-spawana-2-mm",
      price: "19,99",
    },
    {
      title: "Product Name",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis dignissimos eum rem fugit odit obcaecati!",
      imgUrl: "https://7.allegroimg.com/s512/039e42/95f32d08461c86611f93262ddf37/Taczka-BUDOWLANA-OGRODOWA-Taczki-85L-spawana-2-mm",
      price: "19,99",
    },
    {
      title: "Product Name",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis dignissimos eum rem fugit odit obcaecati!",
      imgUrl: "https://7.allegroimg.com/s512/039e42/95f32d08461c86611f93262ddf37/Taczka-BUDOWLANA-OGRODOWA-Taczki-85L-spawana-2-mm",
      price: "19,99",
    },
    {
      title: "Product Name",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis dignissimos eum rem fugit odit obcaecati!",
      imgUrl: "https://7.allegroimg.com/s512/039e42/95f32d08461c86611f93262ddf37/Taczka-BUDOWLANA-OGRODOWA-Taczki-85L-spawana-2-mm",
      price: "19,99",
    },
    {
      title: "Product Name",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis dignissimos eum rem fugit odit obcaecati!",
      imgUrl: "https://7.allegroimg.com/s512/039e42/95f32d08461c86611f93262ddf37/Taczka-BUDOWLANA-OGRODOWA-Taczki-85L-spawana-2-mm",
      price: "19,99",
    },
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
              <Badge.Ribbon text="Provided by ETC" color={token.colorTextLabel}>
                <ProductCard {...item} />
              </Badge.Ribbon>
            </Skeleton>
          </List.Item>
        )}
      />
    </Col>
  );
};

const ProductCard = ({ title, description, price, imgUrl }) => {
  const [productReviewDrawer, setProductReviewDrawer] = useState(false);

  const openProductReview = () => {
    setProductReviewDrawer(true);
  };

  const closeProductReview = () => {
    setProductReviewDrawer(false);
  };

  return (
    <Card style={{ width: "100%" }}>
      <ProductReview title={title} description={description} imgUrl={imgUrl} isProductReviewOpen={productReviewDrawer} onClose={closeProductReview} />
      <Row gutter={16} type="flex" justify="space-between" align="middle">
        <Col xs={24} sm={8}>
          <img alt="product" src={imgUrl} style={{ width: "100%" }} />
          <Rate disabled defaultValue={2} style={{ margin: "0 50px" }} />
        </Col>
        <Col xs={24} sm={16}>
          <h3>{title}</h3>
          <p>{description}</p>
          <p>
            <b>{price} zł</b>
          </p>
        </Col>
        <Row justify="end" style={{ width: "100%" }}>
          <Col>
            <Button type="primary" size="lg" onClick={() => openProductReview()}>
              Przejrzyj
            </Button>
          </Col>
        </Row>
      </Row>
    </Card>
  );
};

export default ListOfProducts;
