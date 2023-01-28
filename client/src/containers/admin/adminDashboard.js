import React from 'react'
import AllProducts from './allProducts'
import './adminDashboard.css'
import Home from './pages/home/home'
import RoutesHandler from './routesHandler'
import MySidebar from './components/sidebar/sidebar'

const AdminDashboard = () => {
  return (
    <>
    <RoutesHandler />
    <MySidebar />
      {/* <div className='admin-dashboard'>
        Welcome to AdminDashboard
      </div> */}
    </>
  )
}

export default AdminDashboard