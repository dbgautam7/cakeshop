import { Drawer } from 'antd';
import {LeftCircleOutlined } from '@ant-design/icons';
import { useState } from 'react';

const CustomDrawer = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <LeftCircleOutlined onClick={showDrawer} style={{ fontSize: '50px', color: '#44bcd8', cursor: 'pointer' }} />

      <Drawer title="My Actions" placement="left" onClose={onClose} open={open}>
        <p>My FavList</p>
        <p>My Cart</p>
        <p>My Orders</p>
      </Drawer>
    </>
  );
};
export default CustomDrawer;