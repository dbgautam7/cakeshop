import React, { useState } from 'react';
import { Form, Input, Button, message } from 'antd';

const ChangePassword = () => {
  const [form] = Form.useForm();

  const handleSubmit = async values => {
    try {
      const { currentPassword, newPassword } = values;
  
      // Make API call to change password
      const response = await fetch(`${process.env.REACT_APP_API_URL}/changePassword`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ currentPassword, newPassword })
      });
      const data = await response.json();
  
      if (data.success) {
        message.success('Password changed successfully');
        form.resetFields();
      } else {
        message.error(data.message);
      }
    } catch (error) {
      message.error('Failed to change password');
    }
  };

  return (
    <div className='changePassword'>
    <Form form={form} onFinish={handleSubmit}>
    <Form.Item
      label="Current password"
      name="currentPassword"
      rules={[{ required: true, message: 'Please input your current password' }]}
    >
      <Input.Password />
    </Form.Item>
    <Form.Item
      label="New password"
      name="newPassword"
      rules={[{ required: true, message: 'Please input your new password' }]}
    >
      <Input.Password />
    </Form.Item>
    <Form.Item
      label="Confirm new password"
      name="confirmPassword"
      dependencies={['newPassword']}
      hasFeedback
      rules={[
        { required: true, message: 'Please confirm your new password' },
        ({ getFieldValue }) => ({
          validator(rule, value) {
            if (!value || getFieldValue('newPassword') === value) {
              return Promise.resolve();
            }
            return Promise.reject('The two passwords that you entered do not match!');
          },
        }),
      ]}
    >
      <Input.Password />
    </Form.Item>
    <Form.Item>
      <Button type="primary" htmlType="submit">
        Change password
      </Button>
    </Form.Item>
  </Form>
  </div>
  )
}

export default ChangePassword