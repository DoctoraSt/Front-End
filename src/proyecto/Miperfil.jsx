import React from "react";
import '../CSS/bootstrapCSS/bootstrap.css';
import '../CSS/Miperfil.css';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Miperfil(){
    return(
    <>
    <div className="contenedor-grande">
        <div className="contenedor">
            <div className="row">
                <h2 className="col-4">Información de usuario</h2>
                <div className="col-6">
                    <FloatingLabel controlId="floatingLabel" label="Nombre de usuario" className="mb-3">
                        <Form.Control type="text" placeholder="Nombre de ususario"/>
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingPassword" label="Apellidos">
                        <Form.Control type="text" placeholder="Apellidos" />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingInput" label="Correo electrónico" className="mb-3">
                            <Form.Control type="email" placeholder="name@example.com" />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingPassword" label="Password">
                        <Form.Control type="password" placeholder="Contraseña" />
                    </FloatingLabel>
                    <br />
                    <Button className="coustome-link" href={"/metodo-Pago"}>Ingresar método de pago</Button>
                    <br />
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

export default Miperfil;