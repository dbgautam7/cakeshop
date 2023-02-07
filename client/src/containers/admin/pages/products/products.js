import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import MySidebar from '../../components/sidebar/sidebar';
import { Input } from 'antd';

const Products = () => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 3000);
  };
  const handleCancel = () => {
    setOpen(false);
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
            Add Product
          </Button>
          <Modal
            open={open}
            title="Title"
            onOk={handleOk}
            onCancel={handleCancel}
            footer={[
              <Button key="back" onClick={handleCancel}>
                Return
              </Button>,
              <Button key="submit" type="primary" loading={loading} onClick={handleOk}>
                Submit
              </Button>,
              <Button
                key="link"
                href="https://google.com"
                type="primary"
                loading={loading}
                onClick={handleOk}
              >
                Search on Google
              </Button>,
            ]}
          >
            Name: <Input placeholder='Enter product name' />
            Price: <Input placeholder='Enter product price' />
            <div class="input-group">
              <div class="custom-file">
                <input type="file" class="custom-file-input" id="inputGroupFile01"
                  aria-describedby="inputGroupFileAddon01" />
              </div>
            </div>
          </Modal>
        </div>
      </div>
    </>

  );
};

export default Products;