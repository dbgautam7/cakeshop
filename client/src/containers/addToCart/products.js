import React, { useState } from 'react';
import Cart from './cart';
import bread from '../../images/bread.jpg'
import bdycake from '../../images/bdycake.jpg'
import buns from '../../images/buns.jpg'
import cookies from '../../images/cookies.jpg'
import dessert from '../../images/dessert.jpg'
import pastries from '../../images/pastries.jpg'
import other from '../../images/bakery3.jpg'
import './cart.css'
import { AiFillPlusCircle,AiFillMinusCircle } from "react-icons/ai";
import BoxSx from '../../components/box';


const Products = () => {
    const products = [
        {
            id: 1,
            img: bread,
            name: "Bread",
            price: 55,
            cartCount: 0,
            quantity: 1
        },
        {
            id: 2,
            img: buns,
            name: "Buns",
            price: 77,
            cartCount: 0,
            quantity: 1
        },
        {
            id: 3,
            img: pastries,
            name: "Pastries",
            price: 99,
            cartCount: 0,
            quantity: 1
        },
        {
            id: 4,
            img: bdycake,
            name: "Cakes",
            price: 699,
            cartCount: 0,
            quantity: 1
        },
        {
            id: 5,
            img: cookies,
            name: "Cookies",
            price: 89,
            cartCount: 0,
            quantity: 1
        },
        {
            id: 6,
            img: dessert,
            name: "Desserts",
            price: 120,
            cartCount: 0,
            quantity: 1
        },
        {
            id: 7,
            img: other,
            name: "Others",
            price: 299,
            cartCount: 0,
            quantity: 1
        },
    ];

    const [favLists, setFavLists] = useState([]);
    const [productList, setProductList] = useState(products);

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


        // setTotalLikes(totalLikes+value)
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
        
            <div className='product-container'>
                {productList.map((item, id) => {
                    return (<Cart item={item}
                        id={id}
                        addCart={addCart}
                        newCount={newCount} />)
                }
                )}
            </div>
            
            <div>
            {productList.map((item,id)=>{
                    return (<BoxSx item={item} 
                    id={id} />)
                })}
            </div>

            <div className="Fav">
                Favorites list: {favLists.length}
                {favLists.map((item, id) => <ul><li>{item.name}</li></ul>)}
            </div>

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
                        <h7 id="center">Grand Total  =Rs {calculateGrandTotal()}</h7>
                    </tbody>
                </table>
            </div>

        </>
    )
}

export default Products