import React from 'react'
import { EditOutlined, EllipsisOutlined, DeleteOutlined } from '@ant-design/icons';
import { Card } from 'antd';
const { Meta } = Card;

const Widget = (props) => {
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
      <DeleteOutlined  key="delete" />,
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