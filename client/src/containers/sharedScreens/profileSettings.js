import React from 'react'
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import { Link } from 'react-router-dom';
import ChangePassword from './changePassword';

const ProfileSettings = () => {

    const elements = [
        {
          key: '1',
          label: (
            <Link to='/changePassword' >
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
          key: '4',
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
    <Link onClick={(e) => e.preventDefault()} to='/profileSettings'>
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