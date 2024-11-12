import React from "react";
import '../CSS/bootstrapCSS/bootstrap.css';
import '../CSS/Miperfil.css';
import icono from '../CSS/images/list.png';
import BarraNav from "./BarraNav";
import {Card, CardBody, CardHeader } from "react-bootstrap";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

function Miperfil(){
    return(
    <>
        <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                <Form.Control type="email" placeholder="name@example.com" />
        </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Password">
            <Form.Control type="password" placeholder="Password" />
        </FloatingLabel>
    </>
    );
}

export default Miperfil;