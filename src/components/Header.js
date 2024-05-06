// Header.js
import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="dark">
            < Container>
                <Navbar.Brand href="#home">Logo</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">Главная</Nav.Link>
                    <Nav.Link href="#link">Ссылка</Nav.Link>
                    <NavDropdown title="Меню" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Действие 1</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Действие 2</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Действие 3</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Действие 4</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;