import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Form, Nav, Navbar } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutResetDetails } from "../../redux/actions/userAction"
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

import './navbar.css'

const MyNavbar = () => {
    const navigate=useNavigate()

    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(intervalId);
    }, []);

    const dispatch = useDispatch()
    const { firstName } = useSelector(state => state.user)
    const triggerLogout = () => {
        dispatch(logoutResetDetails())
        navigate('/login')
    }

    return (
    <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container fluid>
                <Navbar.Brand href="/home">Bakery Shop</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto my-2 my-lg-0">
                        <Nav.Link href="/aboutus">About Us</Nav.Link>
                        <Nav.Link href="/contact">Contact</Nav.Link><t></t>
                        <h3 className='show-time'>{currentTime.toLocaleString()}</h3>
                    </Nav>

                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                    <div className="icon">
                        <div className="user_details">                          
                            <Link to="/profile" className="first-name"><h3>{firstName}</h3></Link>
                            </div>
                            <Button type="primary" shape="rectangle" onClick={()=>triggerLogout()}>Logout</Button>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
    );
}

export default MyNavbar;
