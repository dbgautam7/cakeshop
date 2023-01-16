import React, {useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap';

const MyNavbar = () => {

    const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);


    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container fluid>
                <Navbar.Brand href="/"></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto my-2 my-lg-0">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/aboutus">About Us</Nav.Link>
                        <Nav.Link href="/contact">Contact</Nav.Link><t></t> 
                        <h3 style={{color:'powderblue', marginLeft:'280px'}} >{currentTime.toLocaleString()}</h3>
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
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MyNavbar;
