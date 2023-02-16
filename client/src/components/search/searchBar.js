import axios from 'axios'
import React, { useState } from 'react'

const SearchBar = () => {
    const [query,setQuery]=useState("")


    const handleSearch=()=>{
        axios.get(`${process.env.REACT_APP_API_URL}/products?q=${query}`)
        .then((res)=>{
            
        })
    }

  return (
    <div>

    </div>
  )
}

export default SearchBar