import React from "react";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import { Navbar, Nav, NavDropdown, Col, Row, Button } from "react-bootstrap";
import icon from "../CSS/images/list.png"; // Importa la imagen correctamente

function BarraNav() {
    return (
        <Navbar className="bg-body-tertiary">
            <Container fluid={true} className="m-0 p-0">
                <Navbar.Brand href="#">
                    <img src={icon} alt="Shopping logo" width={30} height={30} className="d-inline-block align-top" />
                </Navbar.Brand>
                <Navbar.Brand href="#home">Shopping List</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="./lista-compras">Inicio</Nav.Link>
                        <Nav.Link href="#link">Promociones</Nav.Link>
                        <NavDropdown title="Información personal" id="basic-nav-dropdown">
                            <NavDropdown.Item href="./Miperfil">Mi perfil</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Mis tarjetas</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
                <Form className="d-flex">
                <Row>
                    <Col xs="auto">
                        <Form.Control
                            type="text"
                            placeholder="Search"
                            className="me-2"
                        />
                    </Col>
                    <Col xs="auto">
                        <Button variant="outline-success">Submit</Button>
                    </Col>
                </Row>
            </Form>
            </Container>
        </Navbar>
    );
}

export default BarraNav;
