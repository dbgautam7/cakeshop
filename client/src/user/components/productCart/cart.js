import React, { useState } from 'react';
import './cart.css'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {FacebookShareButton, WhatsappShareButton } from "react-share";
import {FacebookIcon,WhatsappIcon} from "react-share";
import ShoppingCartOutlined from '@mui/icons-material/ShoppingCartOutlined';

import { useSelector } from 'react-redux';
import axios from 'axios';

const Cart = (props) => {

  const shareUrl = 'https://example.com';

  const [favouriteProduct, setFavouriteProduct] = useState([]);
  const [isFav, setIsFav] = useState(false);
  const [color, setColor] = useState('black');
  const { _id } = useSelector((state) => state.user);
  const userId = _id;

  console.log(_id, props.item._id, '@@@');

  const handleAddToFav = async (productId) => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/products/favourites`,
        { productId, userId,color:"red" }
      );
      setFavouriteProduct([...favouriteProduct, response.data]);
      setIsFav(true);
      setColor('red');
    } catch (error) {
      console.error(error);
    }
  };

const handleRemoveFav=async(productId)=>{
  try {
    console.log(favouriteProduct.includes(productId),"check")
    if(favouriteProduct.includes(productId)){
    const response = await axios.delete(
      `${process.env.REACT_APP_API_URL}/products/favourites/${productId}`);
      setIsFav(false);
      setColor('black');
      console.log(response.data,"hi");
  } 
}
catch (error) {
    console.error(error);
  }
}


  return (
    <div className='cart-container'>
      <div className='cart'>
        <Card sx={{ maxWidth: 345 }}>
          <CardHeader
            sx={{ color: 'blue' }}
            title={props.item.name}
            subheader={'Rs ' + props.item.price}
          />
          <CardMedia
            component='img'
            height='194'
            image={
              require(`../../../uploads/products/${props.item.productImage}`) ||
              'No Image for this product'
            }
            alt={props.item?.productImage || 'img'}
          />
          <CardContent>
            <Typography variant='body2' color='text.secondary'>
              Good Food, Good Mood
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label='add to favorites'>
              <FavoriteIcon
                style={{ color: color }}
                onClick={() => {
                  if (isFav) {
                    setIsFav(false);
                    setColor('black');
                    handleRemoveFav()
                  } else {
                    handleAddToFav(props.item._id);
                  }
                }}
              />
            </IconButton>

            <IconButton aria-label='add to cart'>
              <ShoppingCartOutlined
                onClick={() => {
                  props.addCart(props.id);
                }}
              />
            </IconButton>

            <FacebookShareButton
              url={shareUrl}
              quote='Check out this link!'
              hashtag='#example'
              disabled={false}>
              <FacebookIcon size={32} round={true} />
            </FacebookShareButton>

            <WhatsappShareButton
              url={shareUrl}
              quote='Check out this link!'
              hashtag='#example'
              disabled={false}>
              <WhatsappIcon size={32} round={true} />
            </WhatsappShareButton>
          </CardActions>
        </Card>
      </div>
    </div>
  );
};

export default Cart;
