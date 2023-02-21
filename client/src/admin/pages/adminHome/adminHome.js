import axios from 'axios'
import React, { useEffect, useState } from 'react'
import SearchBar from '../../../components/search/searchBar'
import MySidebar from '../../components/sidebar/sidebar'
import Widget from '../../components/widget/widget'
import './adminHome.css'

const AdminHome = () => {

  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(false)
  const [query,setQuery]=useState("")

  const fetchProductsData = () => {
    setLoading(true)
    axios.get(`${process.env.REACT_APP_API_URL}/products?q=${query}`)
      .then((response) => {
        // console.log(response)
        setProductList(response.data.productList);
      });
    setLoading(false)
  }

  useEffect(() => {
    fetchProductsData()
  }, [query])


  return (
    <>
      <div className='home' style={{ display: "flex" }}>
        <div style={{ width: "25%" }}>
          <MySidebar />
        </div>
        <div style={{ display: "flex", margin:"10px", flexDirection: "column" }}>
  <div style={{marginBottom:"20px", width:"50%"}}>
    <SearchBar productList={productList} />
  </div>
  <div style={{ display: "flex", gap: "32px", flexWrap: "wrap" }}>
    {productList.map((item, id) => {
      return <Widget key={id} item={item} fetchProductsData={fetchProductsData} />;
    })}
  </div>
</div>
      </div>
    </>
  )
}

export default AdminHome