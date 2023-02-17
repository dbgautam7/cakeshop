import React from 'react'
import MySidebar from '../../components/sidebar/sidebar'

const Settings = () => {
  return (
    <div className='home' style={{display:"flex"}}>
        <div style={{width:"25%"}}>
            <MySidebar />
        </div>
        <div style={{width:"75%", marginTop:"30px"}}>
Settings
</div>
    </div>
  )
}

export default Settings