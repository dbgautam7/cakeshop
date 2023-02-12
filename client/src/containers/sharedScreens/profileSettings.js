import React from 'react'
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import ChangePassword from './changePassword';
import { Link } from 'react-router-dom';

const ProfileSettings = () => {

  const elements = [
    {
      key: '1',
      label: (
        <Link target="_blank" rel="noopener noreferrer" to='/changePassword' >
          <ChangePassword />
       </Link>
      ),
    },
    {
      key: '2',
      label:"Forgot Password",
      icon: <SmileOutlined />,
      disabled: true,
    },
    {
      key: '3',
      danger: true,
      label: 'Deactivate Account',
    },
  ];

  return (
    <> 
    <Dropdown
    menu={{
      elements,
    }}
  >
     <Link onClick={(e) => e.preventDefault()} to="/profileSettings">
    <Space>
      Profile Settings
      <DownOutlined />
    </Space>
    </Link>
</Dropdown>
  </>
  )
}

export default ProfileSettings