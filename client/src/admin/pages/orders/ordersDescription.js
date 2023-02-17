import { Button, Descriptions, Radio } from 'antd';
import { useState } from 'react';


const OrdersDescription = () => {
  return (
    <div>
      <Descriptions
        bordered
        title="Orders Information"
        size="small"
      >
        <Descriptions.Item label="Customer Name">Ram</Descriptions.Item>
        <Descriptions.Item label="Product Name">Buns</Descriptions.Item>
        <Descriptions.Item label="time">18:00:00</Descriptions.Item>
        <Descriptions.Item label="Amount">$80.00</Descriptions.Item>
      </Descriptions>
    </div>
  );
};
export default OrdersDescription;