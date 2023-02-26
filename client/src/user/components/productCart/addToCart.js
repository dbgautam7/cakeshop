import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { PlusCircleOutlined,MinusCircleOutlined } from '@ant-design/icons';
import "./cart.css"
import { Link } from 'react-router-dom';

const AddToCart = ({productList}) => {

  const [cartProduct, setCartProduct] = useState([]);
  const [showCartItems, setShowCartItems] = useState(false);
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

  const handleShowCartItems = () => {
    setShowCartItems(true);
  }

  const handleIncrementCart = async (productId, quantity) => {
    try {
      const response = await axios.put(`${process.env.REACT_APP_API_URL}/carts/${productId}`, { userId, quantity: quantity + 1 });
      setCartProduct(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDecrementCart = async (productId, quantity) => {
    if (quantity > 0) {
      try {
        const response = await axios.put(`${process.env.REACT_APP_API_URL}/carts/${productId}`, { userId, quantity: quantity - 1 });
        setCartProduct(response.data);
      } catch (error) {
        console.error(error);
      }
    }
  };


  return (
    <div>
      <Link to="/carts" onClick={handleShowCartItems}><h5 style={{textDecoration:"none"}}>My Cart:</h5></Link>
      {showCartItems && 
        <div>
          {cartProduct.map((item) => (
            <div key={item._id} className="cart-item">
              <span className="cart-item-name">{item.productId.name}</span>
              <PlusCircleOutlined onClick={() => handleIncrementCart(item.productId._id, item.quantity)} />
              {item.quantity}
              <MinusCircleOutlined onClick={() => handleDecrementCart(item.productId._id, item.quantity)} />
            </div>
          ))}
          <Link to="/">Go back to home</Link>
        </div>
      }
    </div>
  );
};

export default AddToCart;
