import React, { useEffect, useState } from 'react'
import { Divider, List, Typography } from 'antd';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { Button} from 'antd';


const MyCartList = () => {

  const [cartProduct, setCartProduct] = useState([]);
  const { _id } = useSelector(state => state.user)
  const userId = _id
  const fetchCartProducts =async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/carts?userId=${userId}`);
      setCartProduct(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(()=>{
    fetchCartProducts()
  },[userId])

  const data = cartProduct.map((item) => (
    <div key={item._id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <span>{item.productId.name}</span>
      <Button type='primary'>Order Now</Button>
    </div>
  ));

  return (
    <div style={{width:"50%", margin:"auto"}}>
    <Divider orientation="left"></Divider>
    <List
      header={<div style={{textAlign:'center', fontSize:"22px"}}>My Cart List</div>}
      bordered
      dataSource={data}
      renderItem={(item) => (
        <List.Item>
          <Typography.Text mark></Typography.Text> {item}
        </List.Item>
      )}
    />
    </div>
  )
}

export default MyCartList