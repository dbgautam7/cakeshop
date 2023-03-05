import React, { useEffect, useState } from 'react'
import MySidebar from '../../components/sidebar/sidebar'
import { Progress, Space } from 'antd';
import BarChart from './chart';
import { Chart } from "react-chartjs-2";
import * as Zoom from "chartjs-plugin-zoom";

const Analytics = () => {

const initialOptions = {
  responsive: true,
  maintainAspectRatio: false,
  pan: {
    enabled: true,
    mode: "xy"
  },
  zoom: {
    enabled: true,
    mode: "xy"
  },
  skipNull: true
};

const sampleData = {
  labels: [1, 2, 3, 4],
  datasets: [
    {
      label: "dataset1",
      data: [1, 2, 3, 4],
      backgroundColor: "green"
    },
    {
      label: "dataset2",
      data: [1, 2, null, 4],
      backgroundColor: "red"
    }
  ]
};

const [value, setValue] = useState(0);
  const [data, setData] = useState({});
  useEffect(() => {
    Chart.register(Zoom);
  }, []);

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
  <h1>Hello</h1>
      <BarChart data={data} options={initialOptions} />

      {/* this should have plotted sample dataset */}
      <button
        onClick={() => {
          setData(sampleData);
          setValue(value + 1);
        }}
      >
        add data
      </button>
</div>
    </div>
  )
}

export default Analytics