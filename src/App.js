import React from "react";
import Registro from "./proyecto/Registro";
import Login from "./proyecto/Login";
import { Navigate } from "react-router-dom";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ListaCompras from "./proyecto/ListaCompras";
import Perfil from "./proyecto/perfil";
import Navbar from "./proyecto/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />

        <Route path="/registro" element={<Registro/>} />
        <Route path="/login" element={<Login />} />

        {/* Si agregas más rutas*/}
        <Route path="/lista-compras" element={<ListaCompras />} />
        <Navbar/>
        <Routes>
          <Route path="/Mi Perfil" element={<Perfil/>}/>
        </Routes>

        {/* Ruta por defecto para manejar 404*/}
        <Route path="*" element={<h1>Página no encontrada</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

