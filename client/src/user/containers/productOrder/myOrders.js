import React, { useEffect, useState } from 'react'
import { Divider, Table } from 'antd';
import { useSelector } from 'react-redux';
import axios from 'axios';

const MyOrders = () => {

    const { _id } = useSelector(state => state.user)
    const userId = _id

    const [myOrdersList, setMyOrdersList] = useState([])
    const fetchMyOrders = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/myOrders/userId=${userId}`)
            setMyOrdersList(response.data)
            console.log(response.data, "@@")
        }
        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchMyOrders()
    }, [])

    console.log(myOrdersList, "myOrdersList")

    const columns = [
        {
            title: 'Product Name',
            dataIndex: 'name',
        },
        {
            title: 'Unit Price',
            dataIndex: 'unitPrice',
        },
        {
            title: 'Quantity',
            dataIndex: 'quantity',
        },
        {
            title: 'Total Amount',
            dataIndex: 'totalAmount',
        },
    ];

    let data = []
    data = myOrdersList.map((item, id) => {
        if (userId === item.cartId.userId._id) {
            return ({
                key: id + 1,
                name: item.cartId.productId.name,
                unitPrice: item.cartId.productId.price,
                quantity: item.quantity,
                totalAmount: item.totalPrice
            })
        }
        else {
            data = <h3>No data found!!</h3>
        }
    })


    return (
        <div style={{ width: "80%", margin: "auto" }}>
            <Divider>My Order Lists</Divider>
            <Table columns={columns} dataSource={data} size="middle" />
        </div>
    )
}

export default MyOrders