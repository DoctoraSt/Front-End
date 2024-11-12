import React from "react";
import BarraNav from "./BarraNav";
import Miperfil from "./Miperfil";
import Footer from "./footer";
import { Outlet } from "react-router-dom";

function Layout(){
    return(
        <>
        <BarraNav/>
        <Miperfil/>
        <Outlet/>
        <Footer/>
        </>
    );
}

export default Layout;