import axios from 'axios'
import React, { useEffect, useState } from 'react'
import MySidebar from '../../components/sidebar/sidebar'
import Widget from '../../components/widget/widget'
import './adminHome.css'

const AdminHome = () => {

  const [productList, setProductList] = useState([]);
  const [loading,setLoading]=useState(false)

  const fetchProductsData=()=>{
    setLoading(true)
    axios.get(`${process.env.REACT_APP_API_URL}/products`)
    .then((response) => {
        console.log(response)
        setProductList(response.data.productList);
      });
      setLoading(false)
}

useEffect(()=>{
    fetchProductsData()
},[])


  return (
    <>
    <div className='home' style={{display:"flex"}}>
        <div style={{width:"25%"}}>
            <MySidebar />
        </div>
        <div style={{width:"75%", marginTop:"30px"}}>
{productList.map((item,id)=>{
  return (<Widget id={id} item={item} fetchProductsData={fetchProductsData} />)
})}
</div>
    </div>
    </>
  )
}

export default AdminHome