import axios from "axios";
import React, { useEffect, useState } from "react";
import { Progress, Space } from 'antd';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
} from "recharts";

const BarCharts = () => {

  const [productList, setProductList] = useState([]);

  const fetchProductsData = () => {
    axios.get(`${process.env.REACT_APP_API_URL}/products`)
      .then((response) => {
        setProductList(response.data.productList)
      })
      .catch((error) => {
        console.error("Error fetching product data:", error);
      });
  }

  useEffect(() => {
    fetchProductsData()
  }, [])

console.log(productList,"pro")

    const data=productList.map((item,id)=>{
      return ({
        name:item.name,
        price:item.price
      })

    })


    return (
        <>
          <div style={{display:"flex", margin:"auto"}} >
          <Space wrap>
        <Progress
        type="circle"
        percent={productList.length}
        format={() => `${productList.length}`}
        strokeColor={{
          '0%': '#108ee9',
          '100%': '#87d068',
        }}
      />
  </Space>

                <BarChart
                    width={850}
                    height={400}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="1 1" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="price" fill="#8884d8" />
                </BarChart>
          </div>
        </>
    );
};
export default BarCharts;