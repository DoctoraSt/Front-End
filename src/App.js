import React from "react";
import Registro from "./proyecto/Registro";
import Login from "./proyecto/Login";
import { Navigate } from "react-router-dom";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ListaCompras from "./proyecto/ListaCompras";
import 'bootstrap/dist/css/bootstrap.min.css';
import BarraNav from "./proyecto/BarraNav";
import Layout from "./proyecto/Layout";
import Miperfil from "./proyecto/Miperfil";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/registro" element={<Registro/>} />
        <Route path="/login" element={<Login />} />

        {/*Rutas con Barra de navegación*/}
        <Route element={<Layout/>}>
          <Route path="/lista-compras" element={<ListaCompras/>}/>
          <Route path="/Miperfil" element={<Miperfil/>}/>
        </Route>

        {/* Si agregas más rutas*/}
        <Route path="/lista-compras" element={<ListaCompras />} />

        {/* Ruta por defecto para manejar 404*/}
        <Route path="*" element={<h1>Página no encontrada</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

