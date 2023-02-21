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
import {FacebookShareButton, WhatsappShareButton,FacebookMessengerShareButton } from "react-share";
import {FacebookIcon,FacebookMessengerIcon,WhatsappIcon} from "react-share";
import ShoppingCartOutlined from '@mui/icons-material/ShoppingCartOutlined';

const Cart=(props)=> {

  const shareUrl = 'https://example.com';

  const [isFav, setIsFav] = useState(false)
  return (
    <div className='cart-container'>
      <div className='cart'>
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title={props.item.name}
        subheader={props.item.price}
      />
      <CardMedia
        component="img"
        height="194"
        image={require(`../../../uploads/products/${props.item.productImage}`)}
        // image={props.item.productImage ? require(`../../uploads/products/${props.item.productImage}`).default : null}
        alt={props.item?.productImage || "img"}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        Good Food, Good Mood
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon style={{ color: isFav? 'red': 'black' }} 
           onClick={()=>{
          setIsFav(!isFav)         
           if(isFav){
            props.newCount(props.item)
          }else{
           props.newCount(props.item)
         }
        }} />
        </IconButton>

        <IconButton aria-label="add to cart">
          <ShoppingCartOutlined 
          onClick={()=>{
         props.addCart(props.id)
       }} />
        </IconButton>

        <FacebookShareButton
        url={shareUrl}
        quote="Check out this link!"
        hashtag="#example"
        disabled={false} >
        <FacebookIcon size={32} round={true} />
        </FacebookShareButton>

        <FacebookMessengerShareButton 
        url={shareUrl}
      quote="Check out this link!"
      hashtag="#example"
      disabled={false}  >
        <FacebookMessengerIcon size={32} round={true} />
        </FacebookMessengerShareButton >

        <WhatsappShareButton
        url={shareUrl}
        quote="Check out this link!"
        hashtag="#example"
        disabled={false} >
        <WhatsappIcon size={32} round={true} />
        </WhatsappShareButton>

      </CardActions>
    </Card>
    </div>
       </div>
  );
}
export default Cart;