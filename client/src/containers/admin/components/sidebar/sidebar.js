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
import { CgProfile } from 'react-icons/cg';
import { TbDeviceAnalytics } from 'react-icons/tb';
import Home from '../../pages/home/home';

const MySidebar = () => {
  const [selectedColor, setSelectedColor] = useState('grey');

  const handleColorChange=(color)=>{
      setSelectedColor(color)
  }

  return (
    <div className="sidebar" style={{backgroundColor: selectedColor}}>
      <div style={{marginLeft:"300px"}}>
      <Home />
      </div>
        
    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <Link to="/" className="text-decoration-none" style={{ color: 'inherit', fontSize: '24px'}}>
            Admin <GrUserAdmin />
          </Link>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <p style={{textDecoration:"underline", marginTop:"1opx", marginBottom:"5px"}}>Main</p>
            <NavLink exact to="/adminDashboard" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns"> Dashboard</CDBSidebarMenuItem>
            </NavLink>
            <p style={{textDecoration:"underline",  marginTop:"1opx", marginBottom:"5px"}}>Lists</p>
            <NavLink exact to="/users" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="users">Users</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/analytics" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">{<TbDeviceAnalytics />} Products</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/analytics" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">{<TbDeviceAnalytics />} Orders</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/analytics" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">{<TbDeviceAnalytics />} Users</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/analytics" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">{<TbDeviceAnalytics />} Notifications</CDBSidebarMenuItem>
            </NavLink>
            <p style={{textDecoration:"underline", marginTop:"1opx", marginBottom:"5px"}}>Additional Features</p>
            <NavLink exact to="/analytics" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">{<TbDeviceAnalytics />} Settings</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/profile" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">{<CgProfile />} Profile</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/analytics" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">{<TbDeviceAnalytics />} Logout</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>
        
    <div className="color-options">
      <button className="color-option" onClick={() => handleColorChange('white')}>White</button>
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
  );
};

export default MySidebar;