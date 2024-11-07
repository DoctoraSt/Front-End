import React from "react";
import BarraNav from "./BarraNav";
import { Outlet } from "react-router-dom";

function Layout(){
    return(
        <>
        <BarraNav/>
        <Outlet/>
        </>
    );
}

export default Layout;