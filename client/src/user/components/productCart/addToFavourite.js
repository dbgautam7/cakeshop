import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

const AddToFavourite = ({productList}) => {

  const [favouriteProduct, setFavouriteProduct] = useState([]);
  const { _id } = useSelector(state => state.user)
  const userId = _id
  
  const fetchFavProducts =async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/products/favourites?userId=${userId}`);
      setFavouriteProduct(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(()=>{
    fetchFavProducts()
  },[])


  const idOfProduct = productList.map((item) => item._id);
const idOfFav = favouriteProduct.map((item) => item.productId);
const commonIds = idOfProduct.filter((id) => idOfFav.includes(id));
console.log(commonIds,"Hellop")

  return (
    <div>
      <p style={{color:"chocolate"}}>My Favorite Products:</p>
      {commonIds.length > 0 ?
        <ul>
          {productList.map(item => {
            if (commonIds.includes(item._id)) {
              return <li key={item._id}>{item.name}</li>
            } else {
              return null;
            }
          })}
        </ul>
        :
        <p>Empty</p>
      }
    </div>
  )
}

export default AddToFavourite;
