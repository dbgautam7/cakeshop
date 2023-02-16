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
import ShareIcon from '@mui/icons-material/Share';
import ShoppingCartOutlined from '@mui/icons-material/ShoppingCartOutlined';

const Cart=(props)=> {

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
        image={require(`../../uploads/products/${props.item.productImage}`)}
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
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton aria-label="add to cart">
          <ShoppingCartOutlined 
          onClick={()=>{
         props.addCart(props.id)
       }} />
        </IconButton>
      </CardActions>
    </Card>
    </div>
       </div>
  );
}
export default Cart;