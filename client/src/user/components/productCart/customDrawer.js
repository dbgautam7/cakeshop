import { Drawer } from 'antd';
import { RightSquareOutlined } from '@ant-design/icons';
import { useState } from 'react';
import AddToCart from './addToCart';
import AddToFavourite from '../productFav/addToFavourite';
import ProductOrder from '../productOrder/productOrder';
import { Link } from 'react-router-dom';

const CustomDrawer = ({productList}) => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <RightSquareOutlined onClick={showDrawer}
        style={{ fontSize: '50px', color: '#44bcd8', cursor: 'pointer', display: 'inline-block', verticalAlign: 'middle' }} />
      
      <Drawer title="My Actions" placement="right" onClose={onClose} open={open}>
        
        <AddToFavourite productList={productList} />
         <p style={{ color: "aqua" }}><AddToCart productList={productList}  /></p>
        <Link to="/orders"><p style={{ color: "#873e23" }}><ProductOrder /></p></Link>
        <Link to="/">Back to Home</Link>
      </Drawer>
    </>
  );
};
export default CustomDrawer;