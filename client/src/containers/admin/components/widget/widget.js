import React from 'react'
import { EditOutlined, EllipsisOutlined, DeleteOutlined } from '@ant-design/icons';
import { Card, message } from 'antd';
const { Meta } = Card;

const Widget = (props) => {
  const {_id}=props.item
  // console.log(_id,"test")

const triggerDeleteProduct=async()=>{
   const requestOptions={
    method:"DELETE",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({_id})
   }
   const res = await fetch(`${process.env.REACT_APP_API_URL}/products`,requestOptions);
   console.log(res)
   if(res.status===200){
    props.fetchProductsData()
    message.success("Orders deleted successfully",[2])
  }
  else{
    message.error("Unable to delete the product",[2])
  }
}

  return (
    <>
    <Card
    style={{
      width: 300,
    }}
    //  cover={<img alt={props.item.productImage} 
    //src={require(`../../../../uploads/products/${props.item.productImage}`)} />
    cover={
      props.item.productImage && 
      <img
      src={props.item.productImage}
        alt={props.item.productImage} />
    }
    actions={[
      <DeleteOutlined  key="delete" onClick={()=>triggerDeleteProduct()} />,
      <EditOutlined key="edit" />,
      <EllipsisOutlined key="ellipsis" />,
    ]}
  >
    <Meta
      title={props.item.name}
      description= {"Rs " + props.item.price}
    />
  </Card>
    </>
  )
}

export default Widget