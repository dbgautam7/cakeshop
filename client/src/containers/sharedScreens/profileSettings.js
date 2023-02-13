import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import {Link} from 'react-router-dom'
const items = [
  {
    key: '1',
    label: (
      <Link to='/changePassword'> Change Password</Link>
    ),
  },
  {
    key: '2',
    label: (
      <Link target="_blank" rel="noopener noreferrer" to="https://www.aliyun.com">
        2nd menu item (disabled)
      </Link>
    ),
    icon: <SmileOutlined />,
    disabled: true,
  },
  {
    key: '3',
    label: (
      <Link target="_blank" rel="noopener noreferrer" to="https://www.luohanacademy.com">
        3rd menu item (disabled)
      </Link>
    ),
    disabled: true,
  },
  {
    key: '4',
    danger: true,
    label: 'a danger item',
  },
];
const ProfileSettings = () => (
  <Dropdown
    menu={{
      items,
    }}
  >
    <Link onClick={(e) => e.preventDefault()}>
      <Space>
        Hover me
        <DownOutlined />
      </Space>
    </Link>
  </Dropdown>
);
export default ProfileSettings;