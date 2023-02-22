import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import CustomDrawer from './customDrawer';
import Cart from './cart'
import './cart.css'
import SearchBar from '../../../components/search/searchBar';


const Products = () => {
    const [productList, setProductList] = useState([]);
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState()

    const updateData = (value) => {
        setData(value);
    };

    const fetchProductsData = () => {
        setLoading(true)
        axios.get(`${process.env.REACT_APP_API_URL}/products`)
            .then((response) => {
                // console.log(response)
                setProductList(response.data.productList);
            });
        setLoading(false)
    }

    useEffect(() => {
        fetchProductsData()
    }, [])

    return (
        <>
  <div style={{margin:"20px auto", width:"40%"}}>
    <SearchBar productList={productList} />
  </div>
            <div class="mx-5 my-2 ml-auto d-flex justify-content-end">
                <CustomDrawer productList={productList} />
            </div>

            <div className='product-container'>
                {productList.map((item, id) => {
                    return (<Cart item={item}
                        id={id}
                        updateData={updateData} />)}
                )}
            </div>
        </>
    )
}

export default Products