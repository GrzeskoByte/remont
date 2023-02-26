import { Button, Card, Col, Row, theme, Typography ,Pagination } from 'antd';


const data = [
  {
    title: 'Title 1',
    price: "20"
  },
  {
    title: 'Title 2',
    price: "20"

  },
  {
    title: 'Title 3',
    price: "20"

  },
  {
    title: 'Title 4',
    price: "20"

  },
  {
    title: 'Title 5',
    price: "20"

  },
  {
    title: 'Title 6',
    price: "20"

  },
];
const { Meta } = Card;

const { Title,Paragraph,Text } = Typography;

const { useToken } = theme;


const ListOfProducts = () => {
  const { token } = useToken();

  const onShowSizeChange = (current, pageSize) => {
    console.log(current, pageSize);
  };

  return(
    <div className='listOfProductsContainer'>
      <Row gutter={[16, 16]} className="center">
        {data.map(item => (
          <Col key={item.id} span={24} sm={24} md={24} lg={12} xl={12} className="center">
          <ProductCard title={item.title} price={item.price} imageUrl="https://th.bing.com/th/id/R.3c4d711e163a3cac253d2613328bb25c?rik=55P0ubghzh%2fG6g&riu=http%3a%2f%2fkleberg.pl%2fwp-content%2fuploads%2f2017%2f09%2fmaterialy-budowlane-5.jpg&ehk=f4KBCg2cw61w98tRJdtlDkaLwWuKAm7jwq%2frjMcE8y4%3d&risl=&pid=ImgRaw&r=0"/>
          </Col>
        ))}
      </Row>

      <Pagination
        showSizeChanger
        onShowSizeChange={onShowSizeChange}
        defaultCurrent={3}
        total={500}
        className="main_pagination"
      />
    </div>
)};


const ProductCard = (props) => {
  const { token } = useToken();

  const { title, imageUrl, price } = props;
  
  return (
    <Card
      style={{
        width: 300,
      }}
      cover={
        <img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
      }
      actions={[
        <Button type='primary'> Więcej</Button>,
        <>Allegro c.o</>,
        <>15,55 zł</>
      ]}
    >
    <Meta
      title="Card title"
      description="This is the description"
    />
  </Card>
  );
}
export default ListOfProducts;