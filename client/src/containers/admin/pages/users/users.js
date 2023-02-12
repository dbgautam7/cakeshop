import React from 'react'
import MySidebar from '../../components/sidebar/sidebar'
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

const Users = () => {

  const { _id } = useSelector((state) => state.user);
  const [userDetails, setUserDetails] = useState([]);

  const fetchUserDetails=async()=> {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/users`)
      setUserDetails(response.data.userDetails)
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchUserDetails();
  },[])

  return (
    <>
    <div className='home' style={{display:"flex"}}>
        <div style={{width:"25%"}}>
            <MySidebar />
        </div>
        <div style={{width:"75%", marginTop:"30px"}}>
Users list {JSON.stringify(userDetails.firstName)}
<ul>
      {userDetails.map(user => (
        <li key={user._id}>{user.name} ({user.email})</li>
      ))}
    </ul>
</div>
    </div>
    </>
  )
}

export default Users