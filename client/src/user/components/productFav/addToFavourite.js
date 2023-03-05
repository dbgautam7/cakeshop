import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { CloseOutlined  } from '@ant-design/icons';


const AddToFavourite = ({productList}) => {

  const [favouriteProduct, setFavouriteProduct] = useState([]);
  const [isFav, setIsFav] = useState(false);
  const [color, setColor] = useState('black');
  const { _id } = useSelector(state => state.user)
  const userId = _id
  
  const fetchFavProducts =async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/favourites?userId=${userId}`);
      setFavouriteProduct(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(()=>{
    fetchFavProducts()
  },[userId])
// debugger
//   console.log(favouriteProduct,"favouriteProduct")

// const favId=favouriteProduct.map((item,id)=>{
// return item._id
// })
// console.log(favId,"favId")

  const handleRemoveFav = async (productId) => {
    try {
      const response = await axios.delete(`${process.env.REACT_APP_API_URL}/favourites/${productId}`);
      console.log(response,"response")
      setIsFav(false);
      setColor('black');
      fetchFavProducts();
      console.log(response.data, "Favourite removed successfully!");
    } catch (error) {
      console.error(error);
    }
  };

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
              return <li key={item._id}>{item.name}
                <CloseOutlined  type="dashed" style={{marginLeft:"10px"}}
                onClick={()=>handleRemoveFav(item._id)}
                >Remove</CloseOutlined>
              </li>
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
