import { Col, Drawer, Row, Space } from "antd";
import React from "react";

const ProductReview = ({ isProductReviewOpen, title, description, imgUrl, onClose }) => {
  return (
    <Drawer title={null} placement="right" closable={true} onClose={onClose} open={isProductReviewOpen} key={title} size={"large"}>
      <Row>
        <Col span={18}>
          <Space direction="vertical">
            <img src={imgUrl} alt={title} />
            <h1>{title}</h1>
            <p>{description}</p>
          </Space>
        </Col>
      </Row>
    </Drawer>
  );
};
export default ProductReview;
