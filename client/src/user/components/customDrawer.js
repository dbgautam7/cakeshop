import { Drawer } from 'antd';
import { RightSquareOutlined } from '@ant-design/icons';
import { useState } from 'react';
import AddToCart from './addToCart';

const CustomDrawer = ({productList,favLists}) => {
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
        <p style={{ color: "InfoText" }}>
          Favorites list: {favLists.length} 
          {favLists.map((item, id) => {
            return <ul><li>{item.name}</li></ul>
          })
          }
        </p>
         <p style={{ color: "aqua" }}><AddToCart productList={productList} favLists={favLists} /></p>
        <p style={{ color: "#873e23" }}>My Orders</p>
      </Drawer>
    </>
  );
};
export default CustomDrawer;