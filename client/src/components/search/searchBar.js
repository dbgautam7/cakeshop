import axios from 'axios'
import React, { useState } from 'react'

const SearchBar = () => {
    // const [query,setQuery]=useState("")
    // const [productList,setProductList]=useState([])


    // const handleSearch=()=>{
    //     axios.get(`${process.env.REACT_APP_API_URL}/products?q=${query}`)
    //     .then((res)=>{
            
    //     })
    // }

  return (
    <div>
<form className="d-flex input-group w-auto">
            <input
              type="search"
              className="form-control rounded"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="search-addon"
            />
            <span className="input-group-text border-0" id="search-addon">
              <i className="fas fa-search"></i>
            </span>
          </form>
    </div>
  )
}

export default SearchBar