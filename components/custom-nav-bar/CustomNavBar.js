import React from 'react';

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import "./CustomNavBar.css"
import 'bootstrap/dist/css/bootstrap.min.css'

const CustomNavBar = ({...props}) => {
    console.log(props, 'test')
    return (
        <Navbar collapseOnSelect expand="lg" className="navbar navbar-expand-sm navbar-light navbar-custom" style={{backgroundColor:props.colour}}> 

            <Navbar.Toggle aria-controls="navbarSupportedContent" >
                <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>

            <a className="navbar-brand" href="#">
                <img src={require("./TransparentbgGREY.png")} height={60} />
            </a>

            <Navbar.Collapse id="responsive-navbar-nav " style={{backgroundColor:props.colour}}>
                <Nav className="ml-auto">
                    <Nav.Link className="nav-item active">
                        <a className="nav-link" href="#">About Us</a>
                    </Nav.Link>
                    <Nav.Link className="nav-item active">
                        <a className="nav-link" href="#">
                            Hackathon
                        </a>
                    </Nav.Link>
                    <Nav.Link className="nav-item active">
                        <a className="nav-link" href="#">Blog</a>
                    </Nav.Link>
                    <Nav.Link className="nav-item active">
                        <a className="nav-link" href="#">Contact us</a>
                    </Nav.Link>
                    <Nav.Link className="nav-item active">
                        <a className="nav-link" href="#">Singup/Login</a>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default CustomNavBar