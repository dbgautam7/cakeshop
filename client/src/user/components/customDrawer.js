import { Drawer } from 'antd';
import { LeftCircleOutlined } from '@ant-design/icons';
import { useState } from 'react';

const CustomDrawer = (props) => {
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
        <p style={{color:"InfoText"}}>
          Favorites list: {props.favLists.length}
          {props.favLists.map((item, id) => {
            return <ul><li>{item.name}</li></ul>
          })
          }
        </p>
        <p style={{color:"aqua"}}>My Cart</p>
        <p style={{color:"#873e23"}}>My Orders</p>
      </Drawer>
    </>
  );
};
export default CustomDrawer;