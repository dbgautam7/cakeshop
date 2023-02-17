import React, { useState } from 'react'

const AddToCart = ({productList}) => {

    const [addCartProduct,setAddCartProduct]=useState(productList)
    const [cartCount,setCartCount]=useState(0)

    const addCart = (id) => {
        const tempProductList = [...addCartProduct]
        tempProductList[id]['cartCount']++
        setAddCartProduct(tempProductList)
    }

    const delCart = (id) => {
        const tempProductList = [...addCartProduct]
        tempProductList[id]['cartCount']--
        setAddCartProduct(tempProductList)

    }

    const calculateGrandTotal = (item, id) => {
        const tempProductList = [...addCartProduct]
        const grandTotal = tempProductList.reduce((total, curr) => {
            total = total + (curr.cartCount * curr.price)
            return total
        }, 0)
        return grandTotal
    }
  return (
    <div>My Cart</div>
  )
}

export default AddToCart