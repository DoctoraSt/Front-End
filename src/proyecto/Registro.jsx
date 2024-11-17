import React, { useState } from "react";
import { Link } from 'react-router-dom';
import '../CSS/bootstrapCSS/bootstrap.css';
import '../CSS/registro.css';
import icono from '../CSS/images/list.png';
import axios from "axios";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Button } from "react-bootstrap";

function Registro(){
    const [usuario, setUsuario] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [lastName, setlastName] = useState('');
    const [message, setMessage] = useState('');
    const [registroExitoso, setRegistroExitoso] = useState(false);

    const sendDatos = () =>{
        //Validaciones
        axios.post("http://localhost:3000/Lista",{
            usuario: usuario,
            email: email,
            pass: pass,
            lastName: lastName,
        }).then(() =>{
            setMessage("Registro completado");
            setRegistroExitoso(true); //Cambio estado a true cuando el registro está realizado
        });
    }

    //Componente de registro exitoso
    const RegistroExitosoComponent = () =>(
        <div className="">
            <h2>Registro completo</h2>
            <p>Favor de completar la información adicional:</p>
            <Link to={`/informacion-adicional/${email}`} className="">Continuar</Link>
        </div>
    );

    return(
        //Primera división para colocar la imagen del proyecto
        <div className="fondo">
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <div>
                            <h1>Shopping List</h1>
                            <img src={icono} alt="icono" height={200} width={200}/>
                        </div>
                    </div>

                    <>
                    <div className="col-6">
                        <h2>Crea un usuario</h2>
                        <br/>
                        <div>
                            <FloatingLabel controlId="floatingInput" label="Nombre de Usuario" className="mb-3">
                                <Form.Control type="text" placeholder="Nombre de usuario"
                                value={usuario}
                                onChange={(e)=> setUsuario(e.target.value)}/>
                            </FloatingLabel>
                            <FloatingLabel controlId="floatingInput" label="Apelidos" className="mb-3">
                                <Form.Control type="text" placeholder="Apellidos"
                                value={pass}
                                onChange={(e)=> setlastName(e.target.value)}/>
                            </FloatingLabel>
                            <FloatingLabel controlId="floatingInput" label="Correo Electrónico" className="mb-3">
                                <Form.Control type="email" placeholder="name@example.com" 
                                value={email}
                                onChange={(e)=> setEmail(e.target.value)}/>
                            </FloatingLabel>
                            <FloatingLabel controlId="floatingInput" label="Contraseña" className="mb-3">
                                <Form.Control type="password" placeholder="Contraseña"
                                value={pass}
                                onChange={(e)=> setPass(e.target.value)}/>
                            </FloatingLabel>
                        </div>
                        <div>
                            <Button onClick={sendDatos} className="coustome-link">Registrar</Button>
                        </div>
                        <br/>
                        <p>¿Ya tienes cuenta?</p>
                        <Button href ="/Login" className="coustome-link">Iniciar sesión</Button>
                    </div>
                    {message && <p>{message}</p>}
                    </>
                </div>
            </div>
        </div>
    );
}

export default Registro;