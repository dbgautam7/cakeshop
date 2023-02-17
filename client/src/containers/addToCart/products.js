import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import CustomDrawer from '../../user/components/customDrawer';
import Cart from './cart'
import './cart.css'


const Products = () => {

    const [favLists, setFavLists] = useState([]);
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

    const newCount = (value) => {
        const newVal = favLists.filter((item, id) => {
            return item.name === value.name
        })

        if (newVal.length > 0) {
            const tempFavList = [...favLists]
            const newVal = tempFavList.filter((item, id) => {
                return item.name !== value.name
            })
            setFavLists(newVal)
        } else {
            const tempFavList = [...favLists]
            tempFavList.push(value)
            setFavLists(tempFavList)
        }

    }

    const addCart = (id) => {
        const tempProductList = [...productList]
        tempProductList[id]['cartCount']++
        setProductList(tempProductList)
    }

    const delCart = (id) => {
        const tempProductList = [...productList]
        tempProductList[id]['cartCount']--
        setProductList(tempProductList)

    }

    const calculateGrandTotal = (item, id) => {
        const tempProductList = [...productList]
        const grandTotal = tempProductList.reduce((total, curr) => {
            total = total + (curr.cartCount * curr.price)
            return total
        }, 0)
        return grandTotal
    }


    return (
        <>
            <div class="mx-5 my-2 ml-auto d-flex justify-content-end">
                <CustomDrawer productList={productList} favLists={favLists} />
            </div>

            <div className='product-container'>
                {productList.map((item, id) => {
                    return (<Cart item={item}
                        id={id}
                        updateData={updateData}
                        addCart={addCart}
                        newCount={newCount} />)
                }
                )}
            </div>


            {/* <div className="Fav">
                Favorites list: {favLists.length}
                {favLists.map((item, id) => {
                    return <ul><li>{item.name}</li></ul>
                })

                }
            </div> */}

            <div className='table'>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Product's Name</th>
                            <th>Quantity</th>
                            <th>Price per Item</th>
                            <th>Total Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {productList.map((item, id) => {
                            if (item.cartCount === 0) {
                                return null
                            }
                            return (
                                <tr>
                                    <td>{item.name}</td>

                                    <td><button onClick={() => delCart(id)}><AiFillMinusCircle /></button>{item.cartCount}
                                        <button onClick={() => addCart(id)}><AiFillPlusCircle /></button></td>

                                    <td>Rs {item.price}</td>
                                    <td>Rs {item.cartCount * item.price}</td>
                                </tr>
                            )
                        })}
                        <h3 id="center">Grand Total  =Rs {calculateGrandTotal()}</h3>
                    </tbody>
                </table>
            </div>

        </>
    )
}

export default Products