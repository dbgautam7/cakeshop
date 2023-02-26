import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { DeleteOutlined } from '@ant-design/icons';
import "../cart.css"

const AddToCart = ({productList}) => {

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




  return (
    <div>
       <h5 style={{color:"deeppink"}}>My Cart:</h5>
       <div>
  {cartProduct.map((item) => (
    <div key={item._id} className="cart-item">
      <span className="cart-item-name">{item.productId.name}</span>
      <DeleteOutlined />
    </div>
  ))}
</div>
    </div>
  )
}

export default AddToCart