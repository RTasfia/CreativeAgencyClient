import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import logo from '../../../images/logos/logo.png';

const NavMenu = () => {
    const history = useHistory();
    const handleClick = () => {
        history.push("/adminOrCustomer");
    }
    return (
        <div className="container">
            <Navbar expand="lg">
            <Navbar.Brand >
                <img className="logo" src={logo} alt=""/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link className="mr-5" href="#home">Home</Nav.Link>
                    <Nav.Link className="mr-5" href="#link">Our Portfolio</Nav.Link>
                    <Nav.Link className="mr-5" href="#home">Our Team</Nav.Link>
                    <Nav.Link className="mr-5" href="#home">Contact Us</Nav.Link>
                    <Nav.Link className="mr-5" href="">
                        <button onClick={handleClick} className="btn-brand">  Login</button>
                    </Nav.Link>

                </Nav>

            </Navbar.Collapse>
        </Navbar>
        </div>
    );
};

export default NavMenu;