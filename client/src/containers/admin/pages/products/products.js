import React, { useState } from "react";
import { Modal, Form, Input, Button, message,Upload} from "antd";
import axios from "axios";
import MySidebar from "../../components/sidebar/sidebar";
import { IoIosAddCircle } from 'react-icons/io';
import { FiUpload } from 'react-icons/fi';
const Products = () => {
  const [visible, setVisible] = useState(false);
  const [formData, setFormData] = useState({});

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    axios.post(`${process.env.REACT_APP_API_URL}/products`, formData).then(response => {
      console.log(response.data);
      message.success("Product added successfully",[2])
    })
    .catch(error => {
      console.error(error);
    });
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const onFinish = values => {
    setFormData(values);
  };


  return (
    <>
    <div className='home' style={{ display: "flex" }}>
    <div style={{ width: "25%" }}>
      <MySidebar />
    </div>
    <div style={{ width: "75%", marginTop: "30px",display:"flex", justifyContent:"center"}}>
    <Button type="primary" onClick={showModal}
            style={{ height: '300px', width: '500px', backgroundColor: '#25a5be', fontSize:"40px"}}>
            Add Product <IoIosAddCircle />
          </Button>
      <Modal
        title="Add Product"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form onFinish={onFinish}>
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Price"
            name="price"
            rules={[{ required: true}]}
          >
            <Input />
          </Form.Item>
          <Form.Item label="Product Image">
        <Upload
          name="file"
          beforeUpload={() => false}
        >
          <Button>
            <FiUpload />Upload
          </Button>
        </Upload>
      </Form.Item>
          <div style={{ textAlign: "center" }}>
          <Form.Item >
            <Button type="primary" htmlType="submit">
              Post
            </Button>
          </Form.Item>
          <Form.Item>
              <Button
                key="link"
                href="https://google.com"
                type="dashed"
                onClick={handleOk}
              >
                Search on Google
              </Button>
              </Form.Item>
              </div>
        </Form>
      </Modal>
      </div>
      </div>
    </>
  );
};

export default Products;
