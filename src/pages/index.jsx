import React, { useState } from "react";
import { navItems } from "../data/navBarItem";
import Routes from "../routes"
import Header from "../components/header";
import Navbar from "../components/navbar"
import SideBar from "../components/sidebarr";
import  TopBar from "../components/top-bar";
import Main from "../components/main";

const Layout = () => {
    const [openMenu, setOpenMenu] = useState(false);
    return (
        <div className="flex flex-col w-screen h-screen">
            <Navbar/>
            <SideBar/>
            <TopBar/>
            <Main/>
            {/* <Routes /> */}
        </div>
    );
}

export default Layout;



