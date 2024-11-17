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
                <h2 className="col-4">Datos de tarjeta</h2>
                <div className="col-6">
                    <FloatingLabel controlId="floatingLabel" label="Nombre en tarjeta" className="mb-3">
                        <Form.Control type="text" placeholder="Nombre completo"/>
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingInput" label="Número de tarjeta" className="mb-3">
                            <Form.Control type="number" placeholder="Número de tarjeta" />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingPassword" label="CVV">
                        <Form.Control type="number" placeholder="CVV" />
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