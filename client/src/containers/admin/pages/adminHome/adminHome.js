import React from 'react'
import MySidebar from '../../components/sidebar/sidebar'
import Widget from '../../components/widget/widget'
import './adminHome.css'

const AdminHome = () => {
  return (
    <div className='home'>
      <div style={{ width: '25%', float: 'left' }}>
        <MySidebar />
      </div>
      <div style={{ width: '75%', float: 'right', marginTop:"20px" }}>
    <Widget />
  </div>
    </div>
  )
}

export default AdminHome