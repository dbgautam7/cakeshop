import React from 'react'
import { Card } from 'antd';

const Widget = () => {
  return (
    <>
    <Card
    title="Card title"
    bordered={true}
    style={{
      width: 300,
    }}
  >
    <p>Card content</p>
    <p>Card content</p>
    <p>Card content</p>
  </Card>
    </>
  )
}

export default Widget