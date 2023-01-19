import React from 'react'
import { Alert, Space } from 'antd';

const Alerts = () => {
  return (
    <div>
        <Space direction="vertical" style={{ width: '100%' }}>
    <Alert
      message="Success Text"
      description="Success Description Success Description Success Description"
      type="success"
    />
    </Space>
    </div>
  )
}

export default Alerts