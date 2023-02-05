import React ,{useState} from 'react'
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink,Link } from 'react-router-dom';
import { GrUserAdmin } from 'react-icons/gr';
import { TbDeviceAnalytics } from 'react-icons/tb';
import { ImUsers } from 'react-icons/im';
import { FaProductHunt } from 'react-icons/fa';
import { FaJediOrder } from 'react-icons/fa';
import { IoIosNotifications } from 'react-icons/io';
import { MdSettings } from 'react-icons/md';
import AdminHome from '../../pages/adminHome/adminHome';

const MySidebar = () => {
  const [selectedColor, setSelectedColor] = useState('white');

  const handleColorChange=(color)=>{
      setSelectedColor(color)
  }

  return (
    <>
    <div style={{ width: '25%', float: 'left' }}>
        <div>
 <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <Link to="/" className="text-decoration-none" style={{ color: 'inherit', fontSize: '24px'}}>
            Admin <GrUserAdmin />
          </Link>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/users" activeClassName="activeClicked">
              <CDBSidebarMenuItem ><ImUsers />Users</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/products" activeClassName="activeClicked">
              <CDBSidebarMenuItem ><FaProductHunt /> Products</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/orders" activeClassName="activeClicked">
              <CDBSidebarMenuItem >{<FaJediOrder />} Orders</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/notifications" activeClassName="activeClicked">
              <CDBSidebarMenuItem >{<IoIosNotifications />} Notifications</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/analytics" activeClassName="activeClicked">
              <CDBSidebarMenuItem >{<TbDeviceAnalytics />} Analytics</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/settings" activeClassName="activeClicked">
              <CDBSidebarMenuItem >{<MdSettings />} Settings</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

       
    <div className="color-options">
      <button className="color-option" onClick={() => handleColorChange('grey')}>Grey</button>
      <button className="color-option" onClick={() => handleColorChange('green')}>Green</button>
    </div>
  

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '20px 5px',
              marginTop:"80px"
            }}
          >
            Copyright @2022 All Rights Reserved.
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
    </div>
    </div>

    <div style={{ width: '75%', float: 'right', backgroundColor: selectedColor, marginTop:"20px" }}>
    <AdminHome />
  </div>

    </>
  );
};

export default MySidebar;