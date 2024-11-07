import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap"; // Importa los componentes correctamente

function BarraNav() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#">{' '}
                <img src="../images/list.png" alt="Shopping logo" width={30} height={30} className="d-inline-block align-top"/>
                </Navbar.Brand>
                <Navbar.Brand href="#home">Shopping List</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Link href="#home">Inicio</Nav.Link>
                    <Nav.Link href="#link">Promociones</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Mi perfil</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Mis tarjetas</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default BarraNav;
