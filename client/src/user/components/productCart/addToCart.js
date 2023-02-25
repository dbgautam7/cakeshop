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
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/products/carts?userId=${userId}`);
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

  return (
    <div>
    <Link to="/cart" onClick={handleShowCartItems}><h5 style={{textDecoration:"none"}}>My Cart:</h5></Link>
    {showCartItems && 
      <div>
        {cartProduct.map((item) => (
          <div key={item._id} className="cart-item">
            <span className="cart-item-name">{item.productId.name}</span>
            <PlusCircleOutlined />1<MinusCircleOutlined />
          </div>
        ))}
         <Link to="/">Go back to home</Link>
      </div>
      
    }
   
 </div>
  )
}

export default AddToCart