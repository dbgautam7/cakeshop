import React from 'react'
import AllProducts from './allProducts'
import MySidebar from './sideBar'
import './adminDashboard.css'

const AdminDashboard = () => {
  return (
    <>
      <div className='admin-dashboard'>
        <MySidebar />
        <AllProducts />
      </div>
    </>
  )
}

export default AdminDashboard