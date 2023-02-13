import React from 'react'
import MySidebar from '../../components/sidebar/sidebar'
import { Progress, Space } from 'antd';

const Analytics = () => {
  return (
    <div className='home' style={{display:"flex"}}>
        <div style={{width:"25%"}}>
            <MySidebar />
        </div>
        <div style={{width:"75%", marginTop:"30px"}}>
        <Space wrap>
        <Progress
        type="circle"
        percent={90}
        strokeColor={{
          '0%': '#108ee9',
          '100%': '#87d068',
        }}
      />
  </Space>
</div>
    </div>
  )
}

export default Analytics