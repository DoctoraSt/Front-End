import React from "react";
import BarraNav from "./BarraNav";
import Miperfil from "./Miperfil";
import { Outlet } from "react-router-dom";

function Layout(){
    return(
        <>
        <BarraNav/>
        <Miperfil/>
        <Outlet/>
        </>
    );
}

export default Layout;