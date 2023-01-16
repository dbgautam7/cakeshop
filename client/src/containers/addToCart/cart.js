import React, { useState } from 'react';
import { faHeart, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './cart.css'
function Cart(props) {
  const [isFav, setIsFav] = useState(false)
  return (
    <div className='cart-container'>
      <div className='cart'>
        <h2 style={{color:"Highlight"}}>{props.item.name}</h2>
        <img src={props.item.img} alt={props.item.name} />
        <h3 style={{color:"green"}}>Price: {props.item.price}</h3>
        <FontAwesomeIcon icon={faHeart} style={{ color: isFav? 'red': 'black' }}
        onClick={()=>{
          setIsFav(!isFav)
          if(isFav){
            props.newCount(props.item)
          }else{
            props.newCount(props.item)
          }
        }}
        />  
       <FontAwesomeIcon icon={faCartShopping} 
        onClick={()=>{
          props.addCart(props.id)
          
        }}
       />  
      </div>
      </div>
  );
}
export default Cart;