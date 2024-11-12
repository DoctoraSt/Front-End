import React, {useState } from "react";
import { Navigate,Link} from "react-router-dom";
import '../CSS/login.css';
import '../CSS/bootstrapCSS/bootstrap.css';
import icono from '../CSS/images/list.png';
import axios from 'axios';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

//Parte de arriba donde se coloca toda la lógica para cargar la información
function Login(){
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [message, setMessage] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);


    const handleLogin = () =>{
        if(!email || !pass){
            setMessage("Favor de completar los campos");
            return;
        } else{
            axios.post("http://localhost:3000/login", {email: email, pass: pass})
            .then((data) => {
                setMessage(data.data.message);
                if(data.data.sucess){
                    localStorage.setItem('sesion', JSON.stringify(data.data.usuario));
                    console.log(data.data);
                    setLoggedIn(true);
                }
            })
            .catch((error)=> {
                setMessage("Error al iniciar sesión");
            });
        }
    };

    if(loggedIn){
        return <Navigate to = "./lista-compras" />;
    }

    return(
        <>
    <div className="image">
        <div className="fondo">
            <div class="container">
                <div className="row">
                    <div className="col-4">
                        <h1>Shopping List</h1>
                        <img src={icono} alt="icono" height={200} width={200}/>
                    </div>
                    <div className="col-6">
                        <h2>Iniciar sesión</h2>
                            <FloatingLabel controlId="floatingInput" label="Correo electrónico"className="mb-3">
                                <Form.Control type="email" placeholder="name@example.com"
                                value={email}
                                onChange={(e)=> setEmail(e.target.value)}/>
                            </FloatingLabel>
                            <FloatingLabel controlId="floatingPassword" label="Contraseña">
                                <Form.Control type="password" placeholder="Password"
                                value={pass}
                                onChange={(e)=> setPass(e.target.value)}/>
                            </FloatingLabel>
                    <div>
                            <br/>
                    <button class="btn-blue" onClick={handleLogin}>Iniciar Sesión</button>
                </div>
                <div>
                    <br/>
                        <p>¿Aún no tienes tu cuenta?</p>
                    <button>
                        <Link to ="/registro" className="coustome-link">Registrate aquí</Link>
                    </button>
                </div>
                    </div>
                </div>
            </div>
            {message && <p>{message}</p>}
        </div>
    </div>
        </>
    );
}

export default Login;