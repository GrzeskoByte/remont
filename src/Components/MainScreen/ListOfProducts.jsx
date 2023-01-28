import { Card, List,Avatar ,Button,theme, Rate,Badge,Tag} from 'antd';
import {
  SettingOutlined,EditOutlined,EllipsisOutlined
} from "@ant-design/icons";


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

const { useToken } = theme;


const ListOfProducts = () => {
  const { token } = useToken();


  return(
  <List
    grid={{
      gutter: 16,
      xs: 1,
      sm: 1,
      md: 1,
      lg: 1,
      xl: 1,
      xxl: 1,
    }}
    dataSource={data}
    renderItem={(item) => (
      <List.Item className='center'>
        <ProductCard title ={item.title} imageUrl={"https://nowa-system.pl/wp-content/uploads/2019/12/hurtownia-budowlana-szczecin.jpg"} price={item.price}/>
      </List.Item>
    )}
  />
)};


const ProductCard = (props) => {
  const { token } = useToken();

  const { title, imageUrl, price } = props;
  return (
  <Badge.Ribbon text="Provided by ETC" color={token.colorTextLabel}>
    <div className="product-card">
      <img src={imageUrl} alt={title} />
                
      <div className='card_metas'>
    
      <h3>{title}</h3>
      <div className='tags'>
        {<Tag color="orange">orange</Tag>} { <Tag color="red">orange</Tag>} 
      </div>
      <div className='description'>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, perspiciatis placeat labore voluptas consequatur dignissimos voluptate sapiente assumenda fugit provident.
      </div>

      <footer >
        <Rate disabled defaultValue={2} />
        <div className="price">Od: {price}zł</div>
        <Button type="primary">Przejrzyj</Button>
      </footer>
    </div> 

     
    </div>
  </Badge.Ribbon>
  );
}
export default ListOfProducts;