import React, {Component} from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

class AppNavbar extends Component{
    render() {
        return(
            <Navbar style = {{background: "#8AC6D1"}}>
                <Navbar.Brand href = "/"  style = {{color: "white"}}>SHAREKUN</Navbar.Brand>
                <Nav className = "ml-auto">
                    <Nav.Link href = "/login" style = {{color: "white"}}>Login</Nav.Link>
                    <Nav.Link href = "/register" style = {{color: "white"}}>Register</Nav.Link>
                </Nav>
            </Navbar>
        );
    }
}

export default AppNavbar;