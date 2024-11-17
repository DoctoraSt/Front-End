import React from "react";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function metodoPago(){
    return (
    <>
    <div className="contenedor-grande">
        <div className="contenedor">
            <div className="row">
                <h2 className="col-4">Información de usuario</h2>
                <div className="col-6">
                    <FloatingLabel controlId="floatingLabel" label="Nombre de usuario" className="mb-3">
                        <Form.Control type="text" placeholder="Nombre de ususario"/>
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3">
                            <Form.Control type="email" placeholder="name@example.com" />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingPassword" label="Password">
                        <Form.Control type="password" placeholder="Password" />
                    </FloatingLabel>
                    <br />
                <Button  className="coustome-link">Aceptar cambios</Button>
                <br/>
                <br/>
                <Button href={"/lista-compras"} className="coustome-link">Cancelar</Button>
                </div>
            </div>
        </div>
    </div>
    </>
    );
}

export default metodoPago;